export interface Faculty {
  id: string;
  name: string;
  role: string;
  department: string;
  qualification: string;
  experience: string;
  email: string;
  image: string;
}

export interface ClassStructure {
  id: string;
  className: string;
  subjects: string[];
  capacity: number;
  availableSeats: number;
  annualFee: number;
}

export interface Notice {
  id: string;
  title: string;
  date: string;
  category: 'Academic' | 'Admission' | 'General';
  description: string;
}

export const mockFaculty: Faculty[] = [
  { id: '1', name: 'Dr. Arindam Das', role: 'Head of Department', department: 'Science', qualification: 'Ph.D. in Physics', experience: '14 Years', email: 'a.das@edu.in', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80' },
  { id: '2', name: 'Mrs. Priya Sharma', role: 'Senior Lecturer', department: 'Mathematics', qualification: 'M.Sc. Applied Mathematics', experience: '10 Years', email: 'p.sharma@edu.in', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80' },
  { id: '3', name: 'Mr. Rajesh Verma', role: 'Assistant Professor', department: 'Computer Science', qualification: 'M.Tech in Software Systems', experience: '8 Years', email: 'r.verma@edu.in', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80' }
];

export const mockClasses: ClassStructure[] = [
  { id: 'c1', className: 'Class 10 - Science Stream', subjects: ['Physics', 'Chemistry', 'Mathematics', 'English'], capacity: 40, availableSeats: 5, annualFee: 45000 },
  { id: 'c2', className: 'Class 11 - Computer Science', subjects: ['Data Structures', 'Physics', 'Mathematics', 'Electronics'], capacity: 35, availableSeats: 3, annualFee: 52000 },
  { id: 'c3', className: 'Class 12 - Advanced Biology', subjects: ['Botany', 'Zoology', 'Chemistry', 'English Communications'], capacity: 30, availableSeats: 0, annualFee: 55000 }
];

export const mockNotices: Notice[] = [
  { id: 'n1', title: 'Admissions Open Academic Year 2026-27', date: '2026-07-01', category: 'Admission', description: 'Online applications are formally invited for registration across elementary and advanced curricula lines.' },
  { id: 'n2', title: 'Final Assessment Term Timetable Release', date: '2026-07-05', category: 'Academic', description: 'The comprehensive semester examination mappings are now active on your centralized dashboard hubs.' }
];

export const analyticalRevenueData = [
  { month: 'Jan', revenue: 420000, admissions: 120, growth: 12 },
  { month: 'Feb', revenue: 510000, admissions: 150, growth: 15 },
  { month: 'Mar', revenue: 680000, admissions: 240, growth: 22 },
  { month: 'Apr', revenue: 950000, admissions: 380, growth: 28 },
  { month: 'May', revenue: 720000, admissions: 190, growth: 18 },
  { month: 'Jun', revenue: 890000, admissions: 290, growth: 24 }
];