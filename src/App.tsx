/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import { production } from '@/config';
import { CenteredFlexBox } from '@/display/components/styled';
import Header from '@/display/sections/Header';
import { withErrorHandler } from '@/error-handling';
import AppErrorBoundaryFallback from '@/error-handling/fallbacks/App';
import Pages from '@/routes/Pages';
import supabase from '@/services/supabase';
import { getProfile } from '@/services/supabase';
import { useProfile, useSession } from '@/store/auth';

function App() {
  const { session, setSession } = useSession();
  const { setProfile } = useProfile();
  const [email] = useState('test@test.com');
  const [password] = useState('xxxxxx');

  useEffect(() => {
    if (!production && session === null) {
      supabase.auth.signInWithPassword({ email, password }).then(() => {
        console.log('signed in');
      });
      supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session);
      });
    } else {
      const supabaseLocalStorage = localStorage['sb-pdntukcptgktuzpynlsv-auth-token'];
      console.log('supabaseLocalStorage:', supabaseLocalStorage);
      if (supabaseLocalStorage !== undefined) {
        setSession(JSON.parse(supabaseLocalStorage));
      }
    }
  }, []);

  useEffect(() => {
    console.log('session changed');
    if (session !== null) {
      console.log('session:', session);
      getProfile(session).then((p) => {
        setProfile(p);
        // console.log('profile:', p);
      });
    } else {
      console.log('session is null');
    }
  }, [session]);

  return (
    <Fragment>
      <CssBaseline />
      <BrowserRouter>
        <CenteredFlexBox sx={{ backgroundColor: 'background.dark', height: '100vh' }}>
          <Box sx={{ maxWidth: 'sm', width: '100%', height: '100%' }}>
            <Header />
            <Pages />
          </Box>
        </CenteredFlexBox>
      </BrowserRouter>
    </Fragment>
  );
}

export default withErrorHandler(App, AppErrorBoundaryFallback);
