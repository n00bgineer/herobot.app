import env_config from "../../env_config";

export default {
  getUser: async () => {
    return {
      url: `${env_config.API_URL}/api/getUser`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
  },  
}