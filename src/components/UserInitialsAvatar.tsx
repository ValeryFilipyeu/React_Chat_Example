import React from "react";
import styled from "styled-components/macro";
import { setLightness } from "polished";

export const Wrapper = styled.div<{ color: string; size: number }>`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  border-radius: 50%;
  text-align: center;
  color: white;
  text-transform: uppercase;
  vertical-align: middle;
  background-color: ${props => props.color};
  width: ${props => props.size}px;
  font-size: ${props => Math.round(props.size / 3)}px;
  height: ${props => props.size}px;
  line-height: ${props => props.size}px;
`;

type UserInitialsAvatarProps = {
  name: string;
  uuid: string;
  size: number;
  muted?: boolean;
  color?: string;
};

const UserInitialsAvatar = ({
  name,
  size,
  muted,
  color
}: UserInitialsAvatarProps) => {
  const initials = name.match(/\b\w/g) || [];
  const uniqueColor = "#80DEEA";
  const processedColor = muted ? setLightness(0.9, uniqueColor) : uniqueColor;
  return (
    <Wrapper size={size} color={color || processedColor}>
      {initials}
    </Wrapper>
  );
};

export { UserInitialsAvatar };
