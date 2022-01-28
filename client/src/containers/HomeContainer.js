import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useAuthState } from '../auth/AuthContext';

function HomeContainer() {
  const { user } = useAuthState()

  return (
    <div>
      <h1>Welcome {user?.email}</h1>
      <button onClick={() => signOut(getAuth())}>Sign out</button>
    </div>
  );
}

export default HomeContainer;