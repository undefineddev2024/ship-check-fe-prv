import axios from 'axios';
import { useSearchParams, useNavigate } from 'react-router-dom';
import useTokenAuth from '../../../hooks/useTokenAuth';
import { useEffect } from 'react';

const GOOGLE_LOGIN_URL = '/auth/login/google';

export default function AuthGoogle() {
  const [searchParams] = useSearchParams();
  const authorizationCode = searchParams.get('code');
  const { storeToken } = useTokenAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post(`http://127.0.0.1:8080${GOOGLE_LOGIN_URL}`, { authorizationCode })
      .then((res) => {
        const tokenPair: { accessToken: string; refreshToken: string } =
          res.data;

        storeToken(tokenPair);
        navigate('/');
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
}
