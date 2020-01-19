import styled from "styled-components/macro";

import posed from "react-pose";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-color: black;
  width: 50%;
`;

export const AnimatedWrapper = posed(Wrapper)({
    open: { applyAtStart: { display: "flex" } },
    closed: { applyAtEnd: { display: "none" } }
});

export const Body = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  margin: 0px 15px 15px 15px;
`;
