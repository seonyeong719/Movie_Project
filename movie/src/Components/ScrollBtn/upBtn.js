import { styled } from "styled-components";

function UpBtn() {
  return <UpButton>UP</UpButton>;
}
export default UpBtn;

const UpButton = styled.button`
  font-weight: bold;
  font-size: 15px;
  padding: 20px 15px;
  background-color: #000;
  color: #fff;
  border: 2px solid rgb(210, 204, 193);
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  position: sticky;
  left: 92%;
  bottom: 100px;
  display: none;
  display: ${({ scroll }) => (scroll ? "block" : "none")};
  :hover {
    background-color: rgb(102, 102, 102);
  }
`;
