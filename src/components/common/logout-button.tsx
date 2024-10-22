'use client';

import { sva } from '@/styled-system/css';
import { LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';
import { useCallback } from 'react';

const LogoutButton = () => {
  const logoutButtonStyle = LogoutButtonSva();

  const handleLogout = useCallback(() => {
    signOut();
  }, []);

  return (
    <button className={logoutButtonStyle.wrapper} onClick={handleLogout}>
      Logout <LogOut className={logoutButtonStyle.icon} />
    </button>
  );
};

export default LogoutButton;

const LogoutButtonSva = sva({
  slots: ['wrapper', 'icon'],
  base: {
    wrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 'fit-content',
      borderRadius: '10rem',
      border: '1px solid',
      cursor: 'pointer',
      padding: '0.25rem 1rem',
      fontSize: '0.875rem',
      fontWeight: 'bold',
      backgroundColor: 'white',
      color: 'black',
      '&:hover': {
        backgroundColor: 'black',
        color: 'white',
      },
    },
    icon: {
      width: '1rem',
      height: '1rem',
      marginLeft: '0.5rem',
    },
  },
});
