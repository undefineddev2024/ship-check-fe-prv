import { useState } from 'react';

type TokenPair = { accessToken: string; refreshToken: string };
const STORAGE_KEY_JWT = 'bearerToken';

const tokenPairInStorage = JSON.parse(
  localStorage.getItem(STORAGE_KEY_JWT),
) as TokenPair;

const useTokenAuth = () => {
  const [tokenPair, setTokenPair] = useState<TokenPair | undefined>(
    tokenPairInStorage,
  );

  const storeToken = (tokenPair: TokenPair) => {
    localStorage.setItem(STORAGE_KEY_JWT, JSON.stringify(tokenPair));
    setTokenPair(tokenPair);
  };

  const clearToken = () => {
    localStorage.removeItem(STORAGE_KEY_JWT);
    setTokenPair(undefined);
  };

  const isLoggedIn = tokenPair || tokenPairInStorage;

  return { storeToken, clearToken, isLoggedIn, tokenPair };
};

export default useTokenAuth;
