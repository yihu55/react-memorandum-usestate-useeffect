import styled from "styled-components";
export const ButtonStyled = styled.button`
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  font-size: 1rem;
  &:hover {
    opacity: 0.98;
    transform: scale(0.99);
  }
`;
