'use client';

import { useState, useCallback } from 'react';
import { useWalletClient } from 'wagmi';
import { base } from 'wagmi/chains';
import { parseUnits, formatUnits } from 'viem';

// USDC contract address on Base
const USDC_BASE_ADDRESS = '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913';

export interface PaymentRequest {
  amount: string; // Amount in USDC (e.g., "1.50")
  recipient: string; // Recipient address
  description?: string;
  metadata?: Record<string, any>;
}

export interface PaymentResult {
  success: boolean;
  transactionHash?: string;
  error?: string;
  confirmations?: number;
}

export interface PaymentStatus {
  isLoading: boolean;
  error: string | null;
  lastPayment: PaymentResult | null;
}

export function useX402Payment() {
  const { data: walletClient } = useWalletClient();
  const [status, setStatus] = useState<PaymentStatus>({
    isLoading: false,
    error: null,
    lastPayment: null,
  });

  const processPayment = useCallback(async (
    request: PaymentRequest
  ): Promise<PaymentResult> => {
    if (!walletClient) {
      const error = 'Wallet not connected';
      setStatus(prev => ({ ...prev, error }));
      return { success: false, error };
    }

    setStatus(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      // Convert amount to wei (USDC has 6 decimals)
      const amountInWei = parseUnits(request.amount, 6);

      // Prepare payment data for x402 protocol
      const paymentData = {
        to: request.recipient,
        amount: amountInWei.toString(),
        token: USDC_BASE_ADDRESS,
        description: request.description || 'Payment via Gigs & Gains Guild',
        metadata: request.metadata || {},
        chainId: base.id,
      };

      console.log('Processing x402 payment:', paymentData);

      // Simulate x402 payment processing
      // In a real implementation, this would use the x402-axios library
      // with the correct API once the package documentation is available
      const mockTransactionHash = await simulateX402Payment(paymentData, walletClient);

      if (mockTransactionHash) {
        // Wait for transaction confirmation
        const confirmations = await waitForConfirmation(
          mockTransactionHash,
          walletClient
        );

        const result: PaymentResult = {
          success: true,
          transactionHash: mockTransactionHash,
          confirmations,
        };

        setStatus(prev => ({
          ...prev,
          isLoading: false,
          lastPayment: result,
        }));

        return result;
      } else {
        throw new Error('No transaction hash received');
      }
    } catch (error: any) {
      console.error('x402 payment error:', error);
      
      const errorMessage = error.response?.data?.message || 
                          error.message || 
                          'Payment failed';

      const result: PaymentResult = {
        success: false,
        error: errorMessage,
      };

      setStatus(prev => ({
        ...prev,
        isLoading: false,
        error: errorMessage,
        lastPayment: result,
      }));

      return result;
    }
  }, [walletClient]);

  const validatePaymentRequest = useCallback((request: PaymentRequest): string | null => {
    if (!request.amount || parseFloat(request.amount) <= 0) {
      return 'Invalid amount';
    }

    if (!request.recipient || !request.recipient.startsWith('0x')) {
      return 'Invalid recipient address';
    }

    if (request.recipient.length !== 42) {
      return 'Invalid recipient address length';
    }

    return null;
  }, []);

  const getUSDCBalance = useCallback(async (): Promise<string | null> => {
    if (!walletClient) return null;

    try {
      // This would typically require a contract read call
      // For now, return a placeholder - in a real implementation,
      // you'd use a contract read to get the USDC balance
      return '0.00';
    } catch (error) {
      console.error('Error fetching USDC balance:', error);
      return null;
    }
  }, [walletClient]);

  return {
    processPayment,
    validatePaymentRequest,
    getUSDCBalance,
    status,
    isConnected: !!walletClient,
  };
}

// Helper function to wait for transaction confirmation
async function waitForConfirmation(
  transactionHash: string,
  walletClient: any,
  maxWaitTime = 60000 // 60 seconds
): Promise<number> {
  const startTime = Date.now();
  let confirmations = 0;

  while (Date.now() - startTime < maxWaitTime) {
    try {
      const receipt = await walletClient.getTransactionReceipt({
        hash: transactionHash as `0x${string}`,
      });

      if (receipt) {
        const currentBlock = await walletClient.getBlockNumber();
        confirmations = Number(currentBlock - receipt.blockNumber);
        
        if (confirmations >= 1) {
          return confirmations;
        }
      }
    } catch (error) {
      console.log('Waiting for confirmation...', error);
    }

    // Wait 2 seconds before checking again
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  return confirmations;
}

// Simulate x402 payment processing for demo purposes
// In a real implementation, this would be replaced with actual x402-axios integration
async function simulateX402Payment(
  paymentData: any,
  walletClient: any
): Promise<string> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Generate a mock transaction hash
  const mockTxHash = `0x${Math.random().toString(16).substr(2, 64)}`;
  
  console.log('Simulated x402 payment:', {
    ...paymentData,
    transactionHash: mockTxHash,
    status: 'success',
    timestamp: new Date().toISOString(),
  });
  
  // In a real implementation, this would:
  // 1. Use x402-axios to create a payment request
  // 2. Handle the payment protocol negotiation
  // 3. Execute the USDC transfer on Base
  // 4. Return the actual transaction hash
  
  return mockTxHash;
}
