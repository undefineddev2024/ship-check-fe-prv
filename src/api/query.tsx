import client from './client';
import {
  GetTokenPairWithGoogleAuthResponse,
  GetTokenPairWithGoogleAuthReuqest,
  GetAllUserRequest,
  GetAllUserResponse,
} from './types';
import { makeAuthorization } from './utils';

async function getTokenPairWithGoogleAuth({
  authorizationCode,
}: GetTokenPairWithGoogleAuthReuqest) {
  const result = await client.post<GetTokenPairWithGoogleAuthResponse>(
    '/auth/login/google',
    {
      authorizationCode,
    },
  );
  return result.data;
}

async function getAllUsers({ accessToken, refreshToken }: GetAllUserRequest) {
  const result = await client.get<GetAllUserResponse>('/user', {
    headers: {
      ...makeAuthorization({ accessToken, refreshToken }),
    },
  });
  return result.data;
}

export const RAW_QUERY = {
  getTokenPairWithGoogleAuth,
  getAllUsers,
};
