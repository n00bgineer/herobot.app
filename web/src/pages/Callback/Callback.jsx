import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import useApi from '../../hooks/useApi';
import user from '../../api/user';
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
    config: user.getUser(),
    loadOnMount: true,
    requiresAuth: true,
    dependencies: []
  });
  
  // SETTING USER DATA OR ERROR STATE 
  useEffect(() => {
    if(!loading){
      if(data){
        setUser(data); 
      }
      if (error) {
        console.error('ERROR FETCHING USER DATA:', error);
        setGlobalAlert({
          message: 'Error fetching user data',
          severity: 'error'
        });
        navigate("/");
        logout({ 
          logoutParams: {
            returnTo: window.location.origin
          } 
        });
      }
    }
  }, [data, loading, error, logout, setGlobalAlert, navigate, setUser]);
  
  return (<></>);
};

export default Callback;