import { useAuth0 } from '@auth0/auth0-react';
import { useState, useEffect, useCallback } from 'react';

/**
 * @name useApi
 * @description A HOOK FOR MAKING API CALLS AND MANAGING REQUEST STATE
 * @param {Object} config API CONFIGURATION OBJECT
 * @param {boolean} loadOnMount WHETHER TO AUTOMATICALLY CALL THE API ON COMPONENT MOUNT
 * @param {Array} dependencies DEPENDENCIES THAT SHOULD TRIGGER A RE-FETCH WHEN CHANGED
 * @returns {Object} { data, error, loading, handleApiCall }
 */
export const useApi = ({config, loadOnMount = false, requiresAuth = false, dependencies = []}) => {
  // SETTING LOCAL STATE
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(loadOnMount);

  // GETTING AUTH0 METHODS
  const { getAccessTokenSilently } = useAuth0();


  // SETTING METHODS
  /**
   * @name handleApiCall
   * @description FUNCTION TO HANDLE API CALLS
   * @param {AbortSignal} signal ABORT SIGNAL FOR FETCH REQUEST
   * @returns {Promise} API RESPONSE
   */
  const handleApiCall = useCallback(async (signal) => {
  
    try {
      setLoading(true);
      setError(null);

      // SETTING AUTHORIZATION HEADER IF NEEDED
      const token = await getAccessTokenSilently();
      let customHeaders = config.headers || {};
      if(requiresAuth && token){
        customHeaders = {
          ...customHeaders,
          "Authorization": `Bearer ${token}`
        }
      } 
      
      const response = await fetch(config.url, {
        method: config.method || 'GET',
        headers: customHeaders,
        body: config.body || null,
        signal
      });

      if (!response.ok) {
        throw new Error(`API ERROR: ${response.status} ${response.statusText}`);
      }

      // Parse and set the data
      const result = await response.json();
      setData(result.data);
      return result;
    } catch (error) {
      if (error.name !== 'AbortError') {
        setError(error);
      }
      return null;
    } finally {
      setLoading(false);
    }
  }, [config, requiresAuth, getAccessTokenSilently]);

  // Automatically call API on mount if loadOnMount is true
  useEffect(() => {
    // SETTING UP ABORT CONTROLLER FOR FETCH REQUESTS
    const controller = new AbortController();
    const signal = controller.signal;

    if (loadOnMount) {
      handleApiCall(signal);
    }

    return () => controller.abort();
  }, [loadOnMount, handleApiCall, ...dependencies]);

  return {
    data,
    error,
    loading,
    handleApiCall
  };
};

export default useApi;
