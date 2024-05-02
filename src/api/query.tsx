import client from './client';
import {
  GetTokenPairWithGoogleAuthResponse,
  GetTokenPairWithGoogleAuthRequest,
  GetAllUserRequest,
  GetAllUserResponse,
  GetAllSeatRequest,
  GetAllSeatResponse,
  CreateReservationRequest,
  CreateReservationResponse,
  GetReservationListRequest,
  GetReservationListResponse,
  CancelReservationRequest,
} from './interfaces';
import { makeAuthorization } from './utils';

async function getTokenPairWithGoogleAuth({
  authorizationCode,
}: GetTokenPairWithGoogleAuthRequest) {
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

async function getAllSeats({ accessToken, refreshToken }: GetAllSeatRequest) {
  const result = await client.get<GetAllSeatResponse>('/seat', {
    headers: {
      ...makeAuthorization({ accessToken, refreshToken }),
    },
  });
  return result.data;
}

async function createReservation({
  accessToken,
  refreshToken,
  ...rest
}: CreateReservationRequest) {
  const result = await client.post<CreateReservationResponse>(
    '/reservation',
    {
      ...rest,
    },
    {
      headers: {
        ...makeAuthorization({ accessToken, refreshToken }),
      },
    },
  );
  return result.data;
}

async function getReservationList({
  accessToken,
  refreshToken,
  reservedAt,
}: GetReservationListRequest & { reservedAt: string }) {
  const result = await client.get<GetReservationListResponse>(
    `/reservation/${reservedAt}`,
    {
      headers: {
        ...makeAuthorization({ accessToken, refreshToken }),
      },
    },
  );
  return result.data;
}

async function cancelReservation({
  accessToken,
  refreshToken,
  ...rest
}: CancelReservationRequest) {
  const result = await client.delete('/reservation', {
    data: {
      ...rest,
    },
    headers: {
      ...makeAuthorization({ accessToken, refreshToken }),
    },
  });
  return result;
}

export const RAW_QUERY = {
  getTokenPairWithGoogleAuth,
  getAllUsers,
  getAllSeats,
  createReservation,
  getReservationList,
  cancelReservation,
};
