import React from 'react';
import { ArrowRight, Shield, Award, Cpu } from 'lucide-react';
import { Button } from '../components/UI/Button';
import { Card } from '../components/UI/Card';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  const metrics = [
    { label: 'Enrolled Academic Scholars', total: '5,000+' },
    { label: 'World-Class Educators', total: '250+' },
    { label: 'Smart Enabled Classrooms', total: '100+' },
    { label: 'Successful Graduation Rate', total: '98%' },
  ];

  return (
    <div className="space-y-24">
      {/* Hero Block */}
      <section className="relative flex flex-col lg:flex-row items-center justify-between gap-12 py-6">
        <div className="flex-1 space-y-6 text-left">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brand-primary/10 text-brand-primary animate-pulse">
            ★ Enrollment Applications Now Open for 2026
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.1]">
            Cultivating Infinite <br />
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              Academic Brilliance
            </span>
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl">
            Empowering modern student pathways using optimized curricula models, premium learning tech, and dedicated mentorship.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link to="/admissions">
              <Button size="lg">Apply Securely <ArrowRight className="h-5 w-5 ml-1" /></Button>
            </Link>
            <Link to="/about">
              <Button variant="ghost" size="lg">Institutional Strategy</Button>
            </Link>
          </div>
        </div>

        <div className="flex-1 relative w-full flex justify-center">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-brand-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -right-4 w-72 h-72 bg-brand-secondary/20 rounded-full blur-3xl" />
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80"
            alt="Vanguard Academy Campus Architecture"
            className="rounded-3xl shadow-2xl relative z-10 w-full max-w-lg object-cover aspect-[4/3]"
          />
        </div>
      </section>

      {/* Numerical Metrics Strip */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-white dark:bg-brand-dark/40 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-premium">
        {metrics.map((m, idx) => (
          <div key={idx} className="text-center space-y-1">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-brand-primary">{m.total}</h3>
            <p className="text-xs sm:text-sm font-medium text-gray-400 uppercase tracking-wider">{m.label}</p>
          </div>
        ))}
      </section>

      {/* Structural Pillars Block */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold dark:text-white tracking-tight">Institutional Pillars</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Engineered to support academic breakthroughs and personal growth.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="space-y-4">
            <div className="p-3 bg-brand-primary/10 text-brand-primary rounded-xl w-fit"><Shield className="h-6 w-6" /></div>
            <h3 className="text-xl font-bold dark:text-white">Impeccable Safety Systems</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Continuous campus monitoring protocols paired with secure credentials storage architecture access.</p>
          </Card>
          <Card className="space-y-4">
            <div className="p-3 bg-brand-secondary/10 text-brand-secondary rounded-xl w-fit"><Cpu className="h-6 w-6" /></div>
            <h3 className="text-xl font-bold dark:text-white">Smart Technical Infrastructure</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Immersive laboratory environments optimized for complex problem solving and creative expression.</p>
          </Card>
          <Card className="space-y-4">
            <div className="p-3 bg-brand-accent/10 text-brand-accent rounded-xl w-fit"><Award className="h-6 w-6" /></div>
            <h3 className="text-xl font-bold dark:text-white">Validated Mastery Pedagogy</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Curriculum plans focused on deep long-term comprehension rather than superficial examination pacing.</p>
          </Card>
        </div>
      </section>
    </div>
  );
};