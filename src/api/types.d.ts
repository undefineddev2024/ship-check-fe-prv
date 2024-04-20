import { TokenPair, User } from '../types';

type GetTokenPairWithGoogleAuthRequest = {
  authorizationCode: string;
};

type GetTokenPairWithGoogleAuthResponse = {
  accessToken: string;
  refreshToken: string;
};

type GetAllUserRequest = {} & TokenPair;
type GetAllUserResponse = Array<Pick<User, 'id' | 'email'>>;

export {
  GetTokenPairWithGoogleAuthRequest,
  GetTokenPairWithGoogleAuthResponse,
  GetAllUserRequest,
  GetAllUserResponse,
};
