import React from "react";
import { useSelector } from "react-redux";
import { UserInitialsAvatar } from "components/UI/UserInitialsAvatar";
import { getLoggedInUserId } from "components/authentication/authenticationModel";
import { getUsersById } from "components/users/userModel";
import {
  Wrapper,
  Avatar,
  About,
  UserName,
  UserTitle
} from "./MyUserDetails.style";

const MyUserDetails = () => {
  const userId = useSelector(getLoggedInUserId);
  const usersById = useSelector(getUsersById);
  const user = usersById[userId];

  // We must always have a user; change this to a development time error check
  if (user === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <Avatar>
        <UserInitialsAvatar size={56} name={user.name} uuid={user.id} />
      </Avatar>
      <About>
        <UserName>{user.name}</UserName>
        <UserTitle>{user.custom.title}</UserTitle>
      </About>
    </Wrapper>
  );
};

export { MyUserDetails };
