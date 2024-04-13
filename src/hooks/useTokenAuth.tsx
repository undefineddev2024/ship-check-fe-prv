import { useState } from 'react';
import { User } from '../types';

const extractUserFromAccessToken = (accessToken: string | undefined) => {
  if (!accessToken) {
    return null;
  }
  const decodedPayload = atob(accessToken.split('.')[1]);
  return JSON.parse(decodedPayload) as User;
};

type TokenPair = { accessToken: string; refreshToken: string };
const STORAGE_KEY_JWT = 'bearerToken';

const getToken = (): TokenPair | undefined => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY_JWT));
};

const useTokenAuth = () => {
  const [tokenPair, setTokenPair] = useState<TokenPair | undefined>(getToken());

  const storeToken = (tokenPair: TokenPair) => {
    localStorage.setItem(STORAGE_KEY_JWT, JSON.stringify(tokenPair));
    setTokenPair(tokenPair);
  };

  const clearToken = () => {
    localStorage.removeItem(STORAGE_KEY_JWT);
    setTokenPair(undefined);
  };

  const isLoggedIn = tokenPair || getToken();

  return {
    storeToken,
    clearToken,
    isLoggedIn,
    tokenPair,
    user: extractUserFromAccessToken(tokenPair?.accessToken),
  };
};

export default useTokenAuth;
