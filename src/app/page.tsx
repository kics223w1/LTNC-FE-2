'use client';

import Head from 'next/head';
import '@/lib/env';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Logo from '~/svg/Logo.svg';
import Header from '@/app/components/header';
import SignInForm from '@/app/components/sign-in-form';
import { useState } from 'react';
import SignUpForm from '@/app/components/sign-up-form';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

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
