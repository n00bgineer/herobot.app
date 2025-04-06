import React, { useEffect, useMemo } from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import useApi from '../../hooks/useApi';
import auth from '../../api/auth';
import useStore from '../../state/store';
import { useNavigate } from 'react-router';

const Callback = () => {
  // SETTING HOOKS
  const navigate = useNavigate();
  const { setGlobalAlert, setUser } = useStore();

  // GETTING AUTHENTICATION STATES & METHODS
  const { logout } = useAuth0();
  
  // SETTING SIDE EFFECTS
  // ACCESSING USER DATA
  const { data, error, loading } = useApi({
    config: useMemo(() => auth.auth(), []),
    loadOnMount: true,
    requiresAuth: true,
    dependencies: []
  });

  useEffect(() => {
    if(!loading){
      if(data){
        setUser(data);
        navigate("/", { replace: true });
      }
      if (error) {
        console.error('ERROR FETCHING USER DATA:', error);
        setGlobalAlert({
          message: 'Error fetching user data',
          severity: 'error'
        });
        navigate("/", { replace: true });
      }
    }
  }, [data, loading, error, logout, setGlobalAlert, navigate, setUser]);
  
  return (<></>);
};

export default Callback;