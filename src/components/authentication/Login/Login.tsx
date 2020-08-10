import React from "react";
import { useDispatch } from "main/useDispatch";
import {
  Wrapper,
  Button,
  Loginization,
  JustASec,
  Body
} from "./Login.style";
import { login } from "../loginCommand";
import { isLoggingIn } from "../authenticationModel";
import { isUserLoggedIn } from "components/authentication/authenticationModel";
import { useSelector } from "react-redux";
import KnownIds from "./knownUserIds.json";

const Login = () => {
  const dispatch = useDispatch();
  const loggingIn = useSelector(isLoggingIn);
  const loggedIn = useSelector(isUserLoggedIn);

  const loginWithRandomlyPickedUser = () => {
    if (loggingIn || loggedIn) {
      return;
    }
    const userId = KnownIds[Math.floor(Math.random() * KnownIds.length)];
    dispatch(login(userId));
  };

  if (!loggedIn && !loggingIn) {
    loginWithRandomlyPickedUser();
  }

  return (
    <Wrapper>
      <Body>
        <Button onClick={loginWithRandomlyPickedUser}>
          {loggingIn ? "Connecting" : "Connect"}
        </Button>
        <Loginization>
          <JustASec>Hey, just a second please.</JustASec>
        </Loginization>
      </Body>
    </Wrapper>
  );
};

export { Login };
