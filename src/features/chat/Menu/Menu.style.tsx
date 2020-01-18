import styled from "styled-components/macro";
import posed from "react-pose";

export const Wrapper = styled.section<{ pose: string }>`
  display: ${props => (props.pose === "closed" ? "none" : "flex")};
  flex-direction: column;
  background-color: #A9A9A9;
  max-width: 290px;
  width: 100%;
`;

export const AnimatedWrapper = posed(Wrapper)({
    open: { width: "100%", applyAtStart: { display: "flex" } },
    closed: { width: "24px", applyAtEnd: { display: "none" } }
});
