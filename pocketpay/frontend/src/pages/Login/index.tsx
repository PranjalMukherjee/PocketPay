import { Stack, styled } from "@mui/material";
import LoginCard from "../../components/organisms/SigninForm";
import { MainTemplate } from "../../components/templates/MainTemplate";
import React from "react";
import { LOGIN_FILED } from "../../utils/constants";
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { addUserLoginDetails } from "../../services/User";

const OuterBox = styled(Stack)({
  width: "900px",
});

const LoginPage = () => {
  const navigate = useNavigate();
  const { loginWithRedirect } = useAuth0()
  const handleSignIn = async (email: string, password: string) => {
    const user = await addUserLoginDetails(email, password);

    if (user) {
      localStorage.setItem("accessToken", user.data.token);
      navigate('/home-page');
    } else {
      window.alert(LOGIN_FILED);
    }
  };

  return (
      <MainTemplate>
        <OuterBox>
          <LoginCard
            handleLogInWithGoogle={() => loginWithRedirect()}
            handleLogIn={handleSignIn}
          />
        </OuterBox>
      </MainTemplate>
  );
};
export default LoginPage;
