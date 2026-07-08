import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { mockClasses, ClassStructure } from '../data/mockData';
import { Card } from '../components/UI/Card';
import { Badge } from '../components/UI/Badge';
import { FileText, Users, Landmark } from 'lucide-react';
import toast from 'react-hot-toast';

export const Classes: React.FC = () => {
  const { data: classes = [] } = useQuery<ClassStructure[]>({
    queryKey: ['classesData'],
    queryFn: async () => mockClasses,
    initialData: mockClasses
  });

  const handleSyllabusDownload = (className: string) => {
    toast.success(`Download initiated: Schema syllabus manifest for ${className}`);
  };

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold dark:text-white">Academic Curriculum Classrooms</h1>
        <p className="text-sm text-gray-400 mt-1">Available curricular paths, capacity limits, and core modules.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {classes.map((c) => (
          <Card key={c.id} className="space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold dark:text-white">{c.className}</h3>
                <Badge variant={c.availableSeats > 0 ? 'success' : 'danger'}>
                  {c.availableSeats > 0 ? `${c.availableSeats} Seats Open` : 'Class Full'}
                </Badge>
              </div>
              
              <div className="space-y-1.5">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Primary Modules</p>
                <div className="flex flex-wrap gap-2">
                  {c.subjects.map((sub, idx) => (
                    <span key={idx} className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-2.5 py-1 rounded-md">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
              <div className="flex gap-4 text-xs font-medium text-gray-500">
                <span className="flex items-center gap-1"><Users className="h-4 w-4 text-brand-primary" /> Max {c.capacity}</span>
                <span className="flex items-center gap-1"><Landmark className="h-4 w-4 text-brand-secondary" /> ₹{c.annualFee.toLocaleString()}/yr</span>
              </div>
              <button 
                onClick={() => handleSyllabusDownload(c.className)}
                className="flex items-center gap-1.5 text-xs font-semibold text-brand-primary hover:underline focus:outline-none"
              >
                <FileText className="h-4 w-4" /> Curriculum PDF
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};