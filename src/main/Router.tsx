import React from "react";

import { Wrapper } from "./style";
import { Login } from "components/authentication/Login/Login";
import { ChatUI } from "components/chat/Chat";
import { isUserLoggedIn } from "components/authentication/authenticationModel";
import { useSelector } from "react-redux";

export const ApplicationRouter = () => {
  const loggedIn = useSelector(isUserLoggedIn);
  const view = loggedIn ? <ChatUI /> : <Login />;
  return (
    <Wrapper>
      {view}
    </Wrapper>
  );
};
