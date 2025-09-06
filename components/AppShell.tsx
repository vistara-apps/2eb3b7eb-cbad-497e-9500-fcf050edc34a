'use client';

import { ReactNode } from 'react';
import { ConnectWallet, Wallet } from '@coinbase/onchainkit/wallet';
import { Name } from '@coinbase/onchainkit/identity';
import { Menu, Search, Bell } from 'lucide-react';

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-blue-500 to-cyan-400">
      {/* Header */}
      <header className="glass-card mx-4 mt-4 p-4 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">G&G</span>
            </div>
            <h1 className="text-white font-bold text-lg">Gigs & Gains Guild</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="text-white hover:text-blue-200 transition-colors duration-200">
              <Search size={20} />
            </button>
            <button className="text-white hover:text-blue-200 transition-colors duration-200">
              <Bell size={20} />
            </button>
            <Wallet>
              <ConnectWallet>
                <Name />
              </ConnectWallet>
            </Wallet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-6xl mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="glass-card mx-4 mb-4 p-6 rounded-lg text-center">
        <p className="text-white text-sm opacity-80">
          © 2024 Gigs & Gains Guild. Discover legitimate online earnings and master micro-skills.
        </p>
      </footer>
    </div>
  );
}
