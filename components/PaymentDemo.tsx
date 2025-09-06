'use client';

import { useState } from 'react';
import { useX402Payment, PaymentRequest } from '../lib/hooks/useX402Payment';
import { CreditCard, CheckCircle, XCircle, Loader2, DollarSign } from 'lucide-react';

export function PaymentDemo() {
  const { processPayment, validatePaymentRequest, status, isConnected } = useX402Payment();
  const [formData, setFormData] = useState<PaymentRequest>({
    amount: '1.00',
    recipient: '',
    description: 'Test payment via Gigs & Gains Guild',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationError = validatePaymentRequest(formData);
    if (validationError) {
      alert(validationError);
      return;
    }

    const result = await processPayment(formData);
    
    if (result.success) {
      console.log('Payment successful:', result);
    } else {
      console.error('Payment failed:', result.error);
    }
  };

  const handleInputChange = (field: keyof PaymentRequest, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!isConnected) {
    return (
      <div className="glass-card p-6 rounded-lg">
        <div className="text-center">
          <CreditCard className="mx-auto h-12 w-12 text-white/60 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">
            x402 Payment Demo
          </h3>
          <p className="text-white/80">
            Please connect your wallet to test x402 payments
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card p-6 rounded-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg">
          <DollarSign className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">
            x402 Payment Demo
          </h3>
          <p className="text-white/80 text-sm">
            Test USDC payments on Base using x402 protocol
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-white/90 text-sm font-medium mb-2">
            Amount (USDC)
          </label>
          <input
            type="number"
            step="0.01"
            min="0.01"
            value={formData.amount}
            onChange={(e) => handleInputChange('amount', e.target.value)}
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="1.00"
            disabled={status.isLoading}
          />
        </div>

        <div>
          <label className="block text-white/90 text-sm font-medium mb-2">
            Recipient Address
          </label>
          <input
            type="text"
            value={formData.recipient}
            onChange={(e) => handleInputChange('recipient', e.target.value)}
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="0x..."
            disabled={status.isLoading}
          />
        </div>

        <div>
          <label className="block text-white/90 text-sm font-medium mb-2">
            Description (Optional)
          </label>
          <input
            type="text"
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Payment description"
            disabled={status.isLoading}
          />
        </div>

        <button
          type="submit"
          disabled={status.isLoading}
          className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {status.isLoading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Processing Payment...
            </>
          ) : (
            <>
              <CreditCard className="h-5 w-5" />
              Send Payment
            </>
          )}
        </button>
      </form>

      {/* Status Display */}
      {status.error && (
        <div className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
          <div className="flex items-center gap-2">
            <XCircle className="h-5 w-5 text-red-400" />
            <span className="text-red-200 font-medium">Payment Failed</span>
          </div>
          <p className="text-red-200/80 text-sm mt-1">{status.error}</p>
        </div>
      )}

      {status.lastPayment?.success && (
        <div className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-400" />
            <span className="text-green-200 font-medium">Payment Successful</span>
          </div>
          {status.lastPayment.transactionHash && (
            <div className="mt-2 space-y-1">
              <p className="text-green-200/80 text-sm">
                <span className="font-medium">Transaction:</span>{' '}
                <a
                  href={`https://basescan.org/tx/${status.lastPayment.transactionHash}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-green-200"
                >
                  {status.lastPayment.transactionHash.slice(0, 10)}...
                </a>
              </p>
              {status.lastPayment.confirmations && (
                <p className="text-green-200/80 text-sm">
                  <span className="font-medium">Confirmations:</span> {status.lastPayment.confirmations}
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Info Section */}
      <div className="mt-6 p-4 bg-blue-500/20 border border-blue-500/30 rounded-lg">
        <h4 className="text-blue-200 font-medium mb-2">About x402 Payments</h4>
        <ul className="text-blue-200/80 text-sm space-y-1">
          <li>• Uses USDC on Base network for fast, low-cost transactions</li>
          <li>• Integrates with wagmi useWalletClient for wallet connectivity</li>
          <li>• Provides real-time transaction confirmation tracking</li>
          <li>• Includes comprehensive error handling and validation</li>
        </ul>
      </div>
    </div>
  );
}
