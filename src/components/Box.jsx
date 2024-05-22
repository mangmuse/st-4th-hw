import styled, { css } from "styled-components";

// TODO: props로 받은 $active 에 따라 배경색이 blue 또는 gray가 되도록 해보세요.
const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  font-size: 20px;

  ${(props) =>
    props.$active &&
    css`
      background-color: blue;
    `}
`;

function Box({ active, onClick }) {
  return <StyledBox $active={active} onClick={onClick} />;
}

export default Box;