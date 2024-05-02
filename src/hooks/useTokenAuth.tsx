import { useEffect, useMemo, useState } from 'react';
import { TokenPair, User } from '../types';

const extractUserFromAccessToken = (accessToken: string | undefined) => {
  if (!accessToken) {
    return null;
  }
  const decodedPayload = atob(accessToken.split('.')[1]);
  return JSON.parse(decodedPayload) as User;
};

const STORAGE_KEY_JWT = 'bearerToken';

const getToken = (): TokenPair | undefined => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY_JWT));
};

/** #FIXME 로그아웃시 isLoggedIn이 제대로 false 처리가 안됨. Provider나 recoil로 변경해야할듯 */
export const useTokenAuth = () => {
  const [tokenPair, setTokenPair] = useState<TokenPair>();

  useEffect(() => {
    const token = getToken();
    if (!tokenPair && token) {
      setTokenPair(structuredClone(token));
    }
  }, [tokenPair]);

  const storeToken = (token: TokenPair) => {
    setTokenPair(structuredClone(token));
    localStorage.setItem(STORAGE_KEY_JWT, JSON.stringify(token));
  };

  const clearToken = () => {
    localStorage.removeItem(STORAGE_KEY_JWT);
    setTokenPair(undefined);
    window.location.reload(); //  #FIXME 로그아웃시 isLoggedIn이 제대로 false 처리가 안됨. Provider나 recoil로 변경해야할듯 > 이 이슈 때문에 임시로 새로고침을 한다
  };

  const isLoggedIn = useMemo(() => {
    return !!tokenPair;
  }, [tokenPair]);

  return {
    storeToken,
    clearToken,
    isLoggedIn,
    tokenPair,
    user: extractUserFromAccessToken(tokenPair?.accessToken),
  };
};
