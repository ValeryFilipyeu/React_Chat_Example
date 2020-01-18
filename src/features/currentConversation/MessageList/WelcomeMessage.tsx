import React from "react";
import { UserInitialsAvatar } from "components/UserInitialsAvatar";
import { Message } from "../Message";

const welcomeMessage = {
  sender: {
    id: "WELCOME",
    name: "Welcome"
  },
  timetoken: "15735897955841496",
  message: {
    content: {
      body:
        "There you can type any message you want. Enjoy."
    }
  }
};

const WelcomeMessage = () => (
  <Message
    message={welcomeMessage}
    key={welcomeMessage.timetoken}
    avatar={
      <UserInitialsAvatar
        size={36}
        name="P N"
        uuid={welcomeMessage.sender.id}
        color="#E5585E"
      />
    }
  />
);

export default WelcomeMessage;
