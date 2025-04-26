'use client';

import { usePrivy } from '@privy-io/react-auth';
import { Button } from '@/components/ui/button';

export default function AuthButton() {
  const { login, logout, authenticated, user } = usePrivy();

  if (!authenticated) {
    return (
      <Button 
        onClick={login}
        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
      >
        Connect Wallet
      </Button>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-300">
        {user?.email?.address || 
          (user?.wallet?.address ? 
            `${user.wallet.address.slice(0, 6)}...${user.wallet.address.slice(-4)}` : 
            'Connected')}
      </span>
      <Button 
        onClick={logout}
        variant="ghost"
        className="text-sm text-gray-400 hover:text-white p-2"
      >
        Disconnect
      </Button>
    </div>
  );
} 