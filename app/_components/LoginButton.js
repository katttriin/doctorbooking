// components/LoginButton.js
'use client';

import React from 'react';
import { useKindeAuth } from '@kinde-oss/kinde-auth-nextjs';

const LoginButton = () => {
  const { login } = useKindeAuth();

  return (
    <button className={styles.loginButton} onClick={() => login()}>
      Get Started
    </button>
  );
};

export default LoginButton;
