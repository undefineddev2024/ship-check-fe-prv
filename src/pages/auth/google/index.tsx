import { useSearchParams, useNavigate } from 'react-router-dom';
import useTokenAuth from '../../../hooks/useTokenAuth';
import { useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { RAW_QUERY } from '../../../api/query';

export default function AuthGoogle() {
  const [searchParams] = useSearchParams();
  const authorizationCode = searchParams.get('code');
  const { storeToken } = useTokenAuth();
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: RAW_QUERY.getTokenPairWithGoogleAuth,
    onSuccess: (data) => {
      storeToken(data.data);
      navigate('/');
    },
  });

  useEffect(() => {
    mutate({ authorizationCode });
  }, [authorizationCode, mutate]);

  return <></>;
}
