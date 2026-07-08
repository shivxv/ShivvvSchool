import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { mockFaculty, Faculty as FacultyType } from '../data/mockData';
import { Card } from '../components/UI/Card';
import { Input } from '../components/UI/Input';
import { Mail, Search, Briefcase } from 'lucide-react';

export const Faculty: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const { data: facultyList = [] } = useQuery<FacultyType[]>({
    queryKey: ['facultyData'],
    queryFn: async () => mockFaculty,
    initialData: mockFaculty
  });

  const filteredFaculty = facultyList.filter(f =>
    f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1.5">
          <h1 className="text-3xl font-bold dark:text-white">Academic Faculty Directory</h1>
          <p className="text-sm text-gray-400">Direct directory tracking qualified professors and research specialists across streams.</p>
        </div>
        <div className="w-full md:w-80 relative">
          <Input 
            placeholder="Search name or department..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-11"
          />
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredFaculty.map((teacher) => (
          <Card key={teacher.id} className="p-0 flex flex-col justify-between">
            <img src={teacher.image} alt={teacher.name} className="w-full h-56 object-cover" />
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-brand-primary bg-brand-primary/10 px-2.5 py-1 rounded-md">{teacher.department}</span>
                <h3 className="text-xl font-bold dark:text-white pt-2">{teacher.name}</h3>
                <p className="text-sm text-gray-400 font-medium">{teacher.role}</p>
              </div>
              <div className="space-y-2 pt-2 border-t border-gray-100 dark:border-gray-800 text-xs text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-2"><Briefcase className="h-4 w-4 text-brand-secondary" /> {teacher.experience} Experience</div>
                <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-brand-accent" /> {teacher.email}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};