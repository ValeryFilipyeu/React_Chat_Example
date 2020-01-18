import React from "react";

import { Wrapper } from "./style";
import { Login } from "features/authentication/Login/Login";
import { ChatUI } from "features/chat/Chat";
import { isUserLoggedIn } from "features/authentication/authenticationModel";
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
