import { Stack, styled } from "@mui/material";
import { MainTemplate } from "../../components/templates/MainTemplate";
import React from "react";
import Register from "../../components/organisms/SignUpForm";
import { useNavigate } from "react-router-dom";
import { NAVIGATE_SIGNUP_DETAILS } from "../../utils/constants";
import { useAuth0 } from '@auth0/auth0-react';

const OuterLayout = styled(Stack)({
  width: "516px",
});

const SignUpPage = () => {
  const navigate = useNavigate();
  const handleOnClickSignUp = () => {
    navigate(NAVIGATE_SIGNUP_DETAILS);
  }
  const { loginWithRedirect } = useAuth0()
  const handleOnClickLogin = () => {navigate('/login')}
  return (
    <MainTemplate>
      <OuterLayout>
        <Register
          onClickLogin={handleOnClickLogin}
          onClickSignUp={handleOnClickSignUp}
          onClickGoogleSignUp={() => loginWithRedirect()}
        />
      </OuterLayout>
    </MainTemplate>
  );
};
export default SignUpPage;
