import axios from 'axios';
import { Assignment, ClassStructure, Faculty, FeatureCard, HomeMetric, Notice, analyticalRevenueData, studentAssignments } from './mockData';

const client = axios.create({ baseURL: import.meta.env.VITE_API_URL || '/api' });

export const fetchHomeMetrics = async (): Promise<HomeMetric[]> => (await client.get<{ metrics: HomeMetric[] }>('/home')).data.metrics;
export const fetchHomeFeatures = async (): Promise<FeatureCard[]> => (await client.get<{ features: FeatureCard[] }>('/home')).data.features;
export const fetchAboutHighlights = async (): Promise<FeatureCard[]> => (await client.get<{ highlights: FeatureCard[] }>('/home')).data.highlights;
export const fetchFaculty = async (): Promise<Faculty[]> => (await client.get<Faculty[]>('/faculty')).data;
export const fetchClasses = async (): Promise<ClassStructure[]> => (await client.get<ClassStructure[]>('/classes')).data;
export const fetchNotices = async (): Promise<Notice[]> => (await client.get<Notice[]>('/notices')).data;
export const fetchAnalyticalRevenueData = async () => (await client.get<typeof analyticalRevenueData>('/analytics/revenue')).data;

// Student authentication has not been added yet, so assignments remain a local demo dataset.
export const fetchStudentAssignments = async (): Promise<Assignment[]> => studentAssignments;

export const submitAdmission = async (values: { studentName: string; email: string; phoneNumber: string; targetClass: string }) => {
  return (await client.post('/admissions', values)).data;
};

export const createPayment = async (values: { admissionNumber: string; amount: string }) => {
  return (await client.post('/payments', { ...values, amount: Number(values.amount) })).data;
};
