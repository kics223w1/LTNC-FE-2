'use client';
import '@/lib/env';
import Header from '@/app/components/header';
import SignInForm from '@/app/components/sign-in-form';
import { useState } from 'react';
import SignUpForm from '@/app/components/sign-up-form';

export default function HomePage() {
  const [isSignInFormVisible, setIsSignInFormVisible] = useState(true);

  return (
    <main>
      <div className='flex flex-col w-screen h-screen'>
        <Header />
        <div className='h-[calc(100%-56px)]'>
          {isSignInFormVisible ? (
            <SignInForm
              handleSwitchToSignUp={() => {
                setIsSignInFormVisible(false);
              }}
            />
          ) : (
            <SignUpForm
              handleSwitchToSignIn={() => {
                setIsSignInFormVisible(true);
              }}
            />
          )}
        </div>
      </div>
    </main>
  );
}
