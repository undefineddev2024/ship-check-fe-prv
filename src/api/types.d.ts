import { TokenPair, User } from '../types';

type GetTokenPairWithGoogleAuthReuqest = {
  authorizationCode: string;
};

type GetTokenPairWithGoogleAuthResponse = {
  accessToken: string;
  refreshToken: string;
};

type GetAllUserRequest = {} & TokenPair;
type GetAllUserResponse = Array<Pick<User, 'id' | 'email'>>;

export {
  GetTokenPairWithGoogleAuthReuqest,
  GetTokenPairWithGoogleAuthResponse,
  GetAllUserRequest,
  GetAllUserResponse,
};
