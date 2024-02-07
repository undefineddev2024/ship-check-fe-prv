import axios from 'axios';
import { useSearchParams, useNavigate } from 'react-router-dom';
import useTokenAuth from '../../../hooks/useTokenAuth';
import { useEffect } from 'react';

export default function AuthGoogle() {
  const [searchParams] = useSearchParams();
  const authorizationCode = searchParams.get('code');
  const { storeToken } = useTokenAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post('http://127.0.0.1:8080/auth/login/google', { authorizationCode })
      .then((res) => {
        const tokenPair: { accessToken: string; refreshToken: string } =
          res.data;
        console.log(tokenPair);
        storeToken(tokenPair);
        navigate('/');
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
}
