import styled from "styled-components/macro";

export const Wrapper = styled.div`
  left: 16px;
  right: 16px;
  bottom: 16px;
  margin: 1px 15px 15px 15px;
`;

export const Container = styled.div`
  position: relative;
  bottom: 0;
  line-height: 13px;
  padding: 9px 7px;
  height: auto;
  border-radius: 25px;
  display: flex;
  border: 1px solid #979797;
  align-items: flex-end;
`;

export const TextArea = styled.textarea`
  flex-grow: 1;
  border: none;
  resize: none;
  overflow: auto;
  padding: 0;
  margin-left: 15px;
  background-color: black;

  &::placeholder {
    color: #979797;
  }

  &:focus {
    outline: none;
  }
  font-size: 30px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  color: #5a5a5a;
`;
