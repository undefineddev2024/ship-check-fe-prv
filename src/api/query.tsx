import client from './client';
import {
  GetTokenPairWithGoogleAuthResponse,
  GetTokenPairWithGoogleAuthReuqest,
  GetAllUserRequest,
  GetAllUserResponse,
} from './types';
import { makeAuthorization } from './utils';

function getTokenPairWithGoogleAuth({
  authorizationCode,
}: GetTokenPairWithGoogleAuthReuqest) {
  return client.post<GetTokenPairWithGoogleAuthResponse>('/auth/login/google', {
    authorizationCode,
  });
}

function getAllUsers({ accessToken, refreshToken }: GetAllUserRequest) {
  return client.get<GetAllUserResponse>('/user', {
    headers: {
      ...makeAuthorization({ accessToken, refreshToken }),
    },
  });
}

export const RAW_QUERY = {
  getTokenPairWithGoogleAuth,
  getAllUsers,
};
