import { styled } from "styled-components";
import ScrollUp from "../../Utils/scrollUp";
import useScroll from "../../Hooks/useScroll";

function UpBtn() {
  const scrollHook = useScroll();

  const goUp = () => {
    ScrollUp(0);
  };

  return (
    <UpButton onClick={goUp} scroll={scrollHook}>
      UP
    </UpButton>
  );
}
export default UpBtn;

const UpButton = styled.button`
  font-weight: bold;
  font-size: 1.1rem;
  padding: 1.2rem 1.1rem;
  background-color: #000;
  color: #fff;
  border: 2px solid rgb(210, 204, 193);
  border-radius: 50%;
  cursor: pointer;
  position: fixed;
  left: 92%;
  bottom: 100px;
  display: ${({ scroll }) => (scroll ? "block" : "none")};
  @media ${({ theme }) => theme.DEVICE.tablet} {
    left: 90%;
    padding: 2rem 1.9rem;
  }
  @media ${({ theme }) => theme.DEVICE.mobile} {
    left: 85%;
    padding: 1.5rem 1.4rem;
  }
`;
