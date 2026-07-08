import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '../components/UI/Input';
import { Button } from '../components/UI/Button';
import { Card } from '../components/UI/Card';
import { CreditCard, ShieldCheck } from 'lucide-react';

const paymentSchema = z.object({
  admissionNumber: z.string().min(4, 'Registration index must contain at least 4 alphanumeric markers'),
  amount: z.string().refine(val => !isNaN(Number(val)) && Number(val) > 0, {
    message: 'Value allocation must represent a valid financial integer'
  })
});

type PaymentFormValues = z.infer<typeof paymentSchema>;

export const OnlineFeePayment: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<PaymentFormValues>({
    resolver: zodResolver(paymentSchema)
  });

  const executeFinancialTransaction = async (values: PaymentFormValues) => {
    await new Promise(resolve => setTimeout(resolve, 1800));
    window.alert(`Transaction of ₹${Number(values.amount).toLocaleString()} cleared via Shiv Academy secure payment gateway!`);
    reset();
  };

  return (
    <div className="max-w-xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold dark:text-white">Centralized Fee Payment Gateway</h1>
        <p className="text-sm text-gray-400">Process secure tuition statements directly via automated end-to-end routing channels.</p>
      </div>

      <Card hoverEffect={false} className="relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-5 text-brand-primary"><CreditCard className="h-32 w-32" /></div>
        <form onSubmit={handleSubmit(executeFinancialTransaction)} className="space-y-6 relative z-10">
          <Input 
            label="Student Alphanumeric Admission Index" 
            placeholder="e.g. VANG-2026-89A" 
            error={errors.admissionNumber?.message}
            {...register('admissionNumber')}
          />
          <Input 
            label="Transaction Remittance Amount (INR)" 
            type="number"
            placeholder="45000" 
            error={errors.amount?.message}
            {...register('amount')}
          />
          <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl flex items-start gap-3 border border-gray-100 dark:border-gray-800">
            <ShieldCheck className="h-5 w-5 text-brand-success mt-0.5 shrink-0" />
            <p className="text-xs text-gray-400 leading-relaxed">
              Payments are protected with industry-standard 256-bit encryption. The transaction status will be sent to your registered contact device instantly.
            </p>
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Authorizing Secure Clearing System...' : 'Initiate Secure Settlement'}
          </Button>
        </form>
      </Card>
    </div>
  );
};