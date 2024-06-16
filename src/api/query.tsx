import {
  GetTokenPairWithGoogleAuthResponse,
  GetTokenPairWithGoogleAuthRequest,
  GetUserResponse,
  GetAllSeatResponse,
  CreateReservationRequest,
  CreateReservationResponse,
  GetReservationListResponse,
  CancelReservationRequest,
} from './interfaces';
import useAppQuery from '../hooks/useAppQuery';
import useAppMutation from '../hooks/useAppMutation';

function useGetAllSeat(): GetAllSeatResponse {
  const { data } = useAppQuery<GetAllSeatResponse>({
    queryKey: ['seats'],
    requestOptions: { method: 'GET', path: '/seat' },
  });
  return data;
}

function useGetUser() {
  return useAppQuery<GetUserResponse>({
    queryKey: ['users'],
    requestOptions: { method: 'GET', path: '/user/detail' },
  });
}

function useGetAllReservation({
  reservedAt,
}: {
  reservedAt: string;
}): GetReservationListResponse {
  const { data } = useAppQuery<GetReservationListResponse>({
    queryKey: ['reservations', reservedAt],
    requestOptions: { method: 'GET', path: `/reservation/${reservedAt}` },
  });
  return data;
}

function useGetTokenPairWithGoogleAuth({
  onSuccess,
}: {
  onSuccess?: (data: GetTokenPairWithGoogleAuthResponse) => void;
}) {
  const mutate = useAppMutation<
    GetTokenPairWithGoogleAuthRequest,
    GetTokenPairWithGoogleAuthResponse
  >({
    requestOptions: {
      method: 'POST',
      path: '/auth/login/google',
    },
    onSuccess: onSuccess,
  });

  return mutate;
}

function useCreateReservation() {
  return useAppMutation<CreateReservationRequest, CreateReservationResponse>({
    mutationKey: ['reservations'],
    requestOptions: { method: 'POST', path: '/reservation' },
  });
}

function useCancelReservation() {
  return useAppMutation<CancelReservationRequest, void>({
    mutationKey: ['reservations'],
    requestOptions: { method: 'DELETE', path: '/reservation' },
  });
}

export {
  useGetAllSeat,
  useGetUser,
  useGetAllReservation,
  useGetTokenPairWithGoogleAuth,
  useCreateReservation,
  useCancelReservation,
};
