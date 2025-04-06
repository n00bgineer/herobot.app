import env_config from "../../env_config";

export default {
  auth: async () => {
    return {
      url: `${env_config.API_URL}/api/auth`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
  },  
}