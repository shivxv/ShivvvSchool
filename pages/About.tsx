import React, { useEffect, useState } from 'react';
import { Card } from '../components/UI/Card';
import { fetchAboutHighlights } from '../data/api';
import { FeatureCard } from '../data/mockData';
import { Target, Eye, Compass } from 'lucide-react';

export const About: React.FC = () => {
  const [highlights, setHighlights] = useState<FeatureCard[]>([]);

  useEffect(() => {
    fetchAboutHighlights().then(setHighlights);
  }, []);

  return (
    <div className="space-y-16">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight dark:text-white">Institutional Blueprint & Vision</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">Shiv Academy drives academic excellence through advanced educational research, modern campus systems, and community-focused innovation.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {highlights.length === 0 ? (
          <div className="col-span-full text-center text-sm text-gray-400">Loading institutional highlights...</div>
        ) : (
          highlights.map((feature, idx) => (
            <Card key={idx} className="space-y-4 text-center items-center flex flex-col">
              <div className={`p-4 rounded-full ${feature.variant === 'primary' ? 'bg-brand-primary/10 text-brand-primary' : feature.variant === 'secondary' ? 'bg-brand-secondary/10 text-brand-secondary' : 'bg-brand-accent/10 text-brand-accent'}`}>
                {feature.variant === 'primary' ? <Target className="h-8 w-8" /> : feature.variant === 'secondary' ? <Eye className="h-8 w-8" /> : <Compass className="h-8 w-8" />}
              </div>
              <h3 className="text-xl font-bold dark:text-white">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
            </Card>
          ))
        )}
      </div>

      <div className="bg-white dark:bg-brand-dark/40 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 space-y-6">
        <h2 className="text-2xl font-bold dark:text-white">Executive Board Direction</h2>
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80" alt="Principal Portrait" className="w-32 h-32 rounded-2xl object-cover" />
          <div className="space-y-3">
            <h4 className="text-lg font-bold text-brand-primary">Message from Dr. Shiv Narayan Sharma, Director Emeritus</h4>
            <p className="text-sm text-gray-500 leading-relaxed dark:text-gray-400">
              "Educational architecture must be agile. At Shiv Academy, we treat learning software environments, computational capabilities, and artistic fundamentals with equal weight. Our goal is to train students to quickly identify, isolate, and solve complex real-world systemic issues."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};