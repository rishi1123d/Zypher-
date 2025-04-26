'use client';

import { PrivyProvider as PrivyAuthWrapper } from '@privy-io/react-auth';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

interface PrivyProviderProps {
  children: ReactNode;
}

export default function PrivyProvider({ children }: PrivyProviderProps) {
  const router = useRouter();
  
  return (
    <PrivyAuthWrapper
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || ''}
      config={{
        loginMethods: ['email', 'wallet', 'google'],
        appearance: {
          theme: 'dark',
          accentColor: '#6366F1', // Indigo color to match your UI
          logo: '/logo.svg',
        },
        embeddedWallets: {
          createOnLogin: true,
        },
        onSuccess: (user) => {
          router.push('/dashboard');
        },
      }}
    >
      {children}
    </PrivyAuthWrapper>
  );
} 