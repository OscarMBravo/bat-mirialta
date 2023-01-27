/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import { CenteredFlexBox } from '@/display/components/styled';
import Header from '@/display/sections/Header';
import { withErrorHandler } from '@/error-handling';
import AppErrorBoundaryFallback from '@/error-handling/fallbacks/App';
import Pages from '@/routes/Pages';
// import supabase from '@/services/supabase';
import { getProfile } from '@/services/supabase';
import { useProfile, useSession } from '@/store/auth';

function App() {
  const { session, setSession } = useSession();
  const { setProfile } = useProfile();

  // Log in fake user for development
  // const [email] = useState('test@test.com');
  // const [password] = useState('xxxxxx');
  useEffect(() => {
    // supabase.auth.getSession().then(({ data: { session } }) => {
    //   setSession(session);
    // });

    // supabase.auth.onAuthStateChange((_event, session) => {
    //   setSession(session);
    // });

    const supabaseLocalStorage = localStorage['sb-pdntukcptgktuzpynlsv-auth-token'];
    setSession(JSON.parse(supabaseLocalStorage));
  }, []);

  useEffect(() => {
    console.log('session changed');
    if (session !== null) {
      getProfile(session).then((p) => {
        setProfile(p);
        console.log('p:', p);
      });
    } else {
      console.log('session is null');
    }
  }, [session]);

  // useEffect(() => {
  //   console.log('profile:', profile);
  // }, [profile]);

  return (
    <Fragment>
      <CssBaseline />
      <BrowserRouter>
        <CenteredFlexBox sx={{ backgroundColor: 'background.dark' }}>
          <Box sx={{ maxWidth: 'sm', width: '100%' }}>
            <Header />
            <Pages />
          </Box>
        </CenteredFlexBox>
      </BrowserRouter>
    </Fragment>
  );
}

export default withErrorHandler(App, AppErrorBoundaryFallback);
