type EnvKeys =
  | 'REACT_APP_NODE_ENV'
  | 'REACT_APP_BASE_API_URL'
  | 'REACT_APP_GOOGLE_CLIENT_ID'
  | 'REACT_APP_GOOGLE_REDIRECT_URI';

const getEnv = (envName: EnvKeys, required = false): string => {
  const result = process.env[envName];
  required &&
    !result &&
    (() => {
      throw new Error(`the environment variable '${envName}' can not be null`);
    })();
  return result;
};

export const getBaseApiUrl = () => getEnv('REACT_APP_BASE_API_URL', true);
export const getGoogleClientId = () =>
  getEnv('REACT_APP_GOOGLE_CLIENT_ID', true);
export const getGoogleRedirectURI = () =>
  getEnv('REACT_APP_GOOGLE_REDIRECT_URI', true);
