import AuthCheck from '../../../hocs/AuthCheck';

const AuthTest = () => {
  return <>인증이 잘 되어있어요</>;
};

export default AuthCheck(AuthTest);
