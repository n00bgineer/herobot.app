import env_config from "../../env_config";

export default {
  auth: () => {
    return {
      url: `${env_config.API_URL}/auth`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
  },  
}