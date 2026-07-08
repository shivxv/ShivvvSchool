import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '../components/UI/Input';
import { Button } from '../components/UI/Button';
import { Card } from '../components/UI/Card';
import toast from 'react-hot-toast';

const admissionSchema = z.object({
  studentName: z.string().min(3, 'Full student legal identifier must span minimum 3 structural indices'),
  email: z.string().email('Invalid global routing communication address format'),
  phoneNumber: z.string().min(10, 'Contact sequence must contain exactly 10 digital integer tokens'),
  targetClass: z.string().min(1, 'Target classroom index is mandatory')
});

type AdmissionFormValues = z.infer<typeof admissionSchema>;

export const AdmissionForm: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<AdmissionFormValues>({
    resolver: zodResolver(admissionSchema)
  });

  const onSubmissionExecution = async (values: AdmissionFormValues) => {
    await new Promise(resolve => setTimeout(resolve, 1400));
    console.log('Ingested Secure Admission Metadata:', values);
    toast.success('Registration document added successfully to our processing queue!');
    reset();
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold dark:text-white">Secure Admission Processing</h1>
        <p className="text-sm text-gray-400">Submit your applicant profile directly to our admissions registrar system.</p>
      </div>

      <Card hoverEffect={false}>
        <form onSubmit={handleSubmit(onSubmissionExecution)} className="space-y-6">
          <Input 
            label="Applicant Full Legal Name" 
            placeholder="e.g. Lekhraj Sharma" 
            error={errors.studentName?.message}
            {...register('studentName')}
          />
          <Input 
            label="Contact Email Address" 
            type="email" 
            placeholder="admissions@shivacademy.edu.in" 
            error={errors.email?.message}
            {...register('email')}
          />
          <Input 
            label="Direct Mobile Sequence" 
            placeholder="9876543210" 
            error={errors.phoneNumber?.message}
            {...register('phoneNumber')}
          />
          <div className="w-full flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Target Curricular Class</label>
            <select 
              {...register('targetClass')}
              className="w-full px-4 py-2.5 rounded-xl border bg-white dark:bg-brand-dark border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 text-gray-900 dark:text-white text-sm"
            >
              <option value="">Select Target Class</option>
              <option value="c1">Class 10 - Science Stream</option>
              <option value="c2">Class 11 - Computer Science</option>
              <option value="c3">Class 12 - Advanced Biology</option>
            </select>
            {errors.targetClass && <span className="text-xs text-brand-danger font-medium">{errors.targetClass.message}</span>}
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Syncing Secure Protocols...' : 'Commit Ingestion Form'}
          </Button>
        </form>
      </Card>
    </div>
  );
};