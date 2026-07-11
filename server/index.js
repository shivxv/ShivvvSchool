import cors from 'cors';
import express from 'express';
import { randomUUID } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const app = express();
const port = Number(process.env.PORT || 4000);
const dataPath = fileURLToPath(new URL('./data.json', import.meta.url));
const load = async () => JSON.parse(await readFile(dataPath, 'utf8'));
const save = async (data) => writeFile(dataPath, `${JSON.stringify(data, null, 2)}\n`);
const asyncRoute = (handler) => (req, res, next) => Promise.resolve(handler(req, res, next)).catch(next);
const required = (body, fields) => fields.every((field) => typeof body[field] === 'string' && body[field].trim());

app.use(cors({ origin: process.env.CLIENT_ORIGIN?.split(',') || true }));
app.use(express.json({ limit: '100kb' }));

const requireAdmin = (req, res, next) => {
  if (!process.env.ADMIN_API_KEY || req.get('x-admin-key') !== process.env.ADMIN_API_KEY) {
    return res.status(401).json({ message: 'Admin authorization is required.' });
  }
  next();
};

app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));
app.get('/api/home', asyncRoute(async (_req, res) => {
  const data = await load();
  res.json({ metrics: data.metrics, features: data.homeFeatures, highlights: data.aboutHighlights });
}));
for (const collection of ['faculty', 'classes', 'notices']) {
  app.get(`/api/${collection}`, asyncRoute(async (_req, res) => res.json((await load())[collection])));
}
app.get('/api/analytics/revenue', asyncRoute(async (_req, res) => res.json((await load()).revenueData)));

app.post('/api/admissions', asyncRoute(async (req, res) => {
  if (!required(req.body, ['studentName', 'email', 'phoneNumber', 'targetClass']) || !/^\S+@\S+\.\S+$/.test(req.body.email)) {
    return res.status(400).json({ message: 'Please provide valid applicant details.' });
  }
  const data = await load();
  const classRoom = data.classes.find((item) => item.id === req.body.targetClass);
  if (!classRoom) return res.status(400).json({ message: 'The selected class does not exist.' });
  if (classRoom.availableSeats <= 0) return res.status(409).json({ message: 'The selected class is full.' });
  const admission = { id: randomUUID(), ...req.body, status: 'Pending', submittedAt: new Date().toISOString() };
  data.admissions.push(admission);
  classRoom.availableSeats -= 1;
  await save(data);
  res.status(201).json(admission);
}));

app.post('/api/payments', asyncRoute(async (req, res) => {
  const amount = Number(req.body.amount);
  if (!required(req.body, ['admissionNumber']) || !Number.isFinite(amount) || amount <= 0) {
    return res.status(400).json({ message: 'Please provide a valid admission number and amount.' });
  }
  const data = await load();
  const payment = { id: randomUUID(), admissionNumber: req.body.admissionNumber.trim(), amount, status: 'Pending', createdAt: new Date().toISOString() };
  data.payments.push(payment);
  await save(data);
  res.status(201).json(payment);
}));

for (const collection of ['faculty', 'classes', 'notices']) {
  app.post(`/api/admin/${collection}`, requireAdmin, asyncRoute(async (req, res) => {
    const data = await load();
    const item = { id: randomUUID(), ...req.body };
    data[collection].push(item);
    await save(data);
    res.status(201).json(item);
  }));
  app.patch(`/api/admin/${collection}/:id`, requireAdmin, asyncRoute(async (req, res) => {
    const data = await load();
    const item = data[collection].find((entry) => entry.id === req.params.id);
    if (!item) return res.status(404).json({ message: 'Record not found.' });
    Object.assign(item, req.body, { id: item.id });
    await save(data);
    res.json(item);
  }));
  app.delete(`/api/admin/${collection}/:id`, requireAdmin, asyncRoute(async (req, res) => {
    const data = await load();
    const index = data[collection].findIndex((entry) => entry.id === req.params.id);
    if (index < 0) return res.status(404).json({ message: 'Record not found.' });
    data[collection].splice(index, 1);
    await save(data);
    res.status(204).end();
  }));
}
app.get('/api/admin/admissions', requireAdmin, asyncRoute(async (_req, res) => res.json((await load()).admissions)));
app.get('/api/admin/payments', requireAdmin, asyncRoute(async (_req, res) => res.json((await load()).payments)));

app.use((error, _req, res, _next) => {
  console.error(error);
  res.status(500).json({ message: 'An unexpected server error occurred.' });
});
app.listen(port, () => console.log(`School API listening at http://localhost:${port}`));
