import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '../components/UI/Input';
import { Button } from '../components/UI/Button';
import { Card } from '../components/UI/Card';
import { CreditCard, ShieldCheck } from 'lucide-react';
import { createPayment } from '../data/api';

const paymentSchema = z.object({
  admissionNumber: z.string().min(4, 'Registration index must contain at least 4 alphanumeric markers'),
  amount: z.string().refine((value) => !isNaN(Number(value)) && Number(value) > 0, { message: 'Enter a valid payment amount.' })
});
type PaymentFormValues = z.infer<typeof paymentSchema>;

export const OnlineFeePayment: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<PaymentFormValues>({ resolver: zodResolver(paymentSchema) });

  const executeFinancialTransaction = async (values: PaymentFormValues) => {
    try {
      await createPayment(values);
      window.alert(`Payment request for ₹${Number(values.amount).toLocaleString()} was received and is pending confirmation.`);
      reset();
    } catch (error: any) {
      window.alert(error.response?.data?.message || 'We could not create your payment request. Please try again.');
    }
  };

  return (
    <div className="max-w-xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold dark:text-white">Centralized Fee Payment Gateway</h1>
        <p className="text-sm text-gray-400">Submit a fee payment request for confirmation by the school accounts team.</p>
      </div>
      <Card hoverEffect={false} className="relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-5 text-brand-primary"><CreditCard className="h-32 w-32" /></div>
        <form onSubmit={handleSubmit(executeFinancialTransaction)} className="space-y-6 relative z-10">
          <Input label="Student Alphanumeric Admission Index" placeholder="e.g. VANG-2026-89A" error={errors.admissionNumber?.message} {...register('admissionNumber')} />
          <Input label="Transaction Remittance Amount (INR)" type="number" placeholder="45000" error={errors.amount?.message} {...register('amount')} />
          <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl flex items-start gap-3 border border-gray-100 dark:border-gray-800">
            <ShieldCheck className="h-5 w-5 text-brand-success mt-0.5 shrink-0" />
            <p className="text-xs text-gray-400 leading-relaxed">Your request is securely recorded. A real payment provider must confirm the transaction before it is marked paid.</p>
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>{isSubmitting ? 'Saving payment request...' : 'Submit Payment Request'}</Button>
        </form>
      </Card>
    </div>
  );
};
