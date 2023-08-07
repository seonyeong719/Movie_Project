import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { styled } from "styled-components";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NAV_LIST } from "../../../Consts/navList";
import { FlexAlignCenter } from "../../../Styles/common";

function MobileHeader() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const onSideBarBtn = () => {
    setOpen((prev) => !prev);
  };

  const onClickNav = (page) => {
    navigate(`${page}`);
  };

  return (
    <S.Wrapper>
      {open ? <Cross onClick={onSideBarBtn} /> : <S.Hamburger onClick={onSideBarBtn} />}
      {open && (
        <S.Ul>
          {NAV_LIST.map((nav, idx) => (
            <S.Li
              key={idx}
              state={nav.url === location.pathname}
              onClick={() => onClickNav(nav.url)}
            >
              {nav.title}
            </S.Li>
          ))}
        </S.Ul>
      )}
    </S.Wrapper>
  );
}

export default MobileHeader;

const Wrapper = styled.div`
  ${FlexAlignCenter}
  display: none;
  @media ${({ theme }) => theme.DEVICE.mobile} {
    display: block;
  }
`;

const Cross = styled(RxCross2)`
  color: ${({ theme }) => theme.COLOR.main};
  font-size: 3.5rem;
  position: relative;
  cursor: pointer;
  z-index: 9999;
`;

const Hamburger = styled(RxHamburgerMenu)`
  color: ${({ theme }) => theme.COLOR.main};
  font-size: 3.5rem;
  position: relative;
  cursor: pointer;
  z-index: 9999;
`;

const Ul = styled.ul`
  position: absolute;
  background-color: #111111;
  right: -3rem;
  top: 0;
  font-size: 2rem;
  width: 60vw;
  height: 100vh;
  padding: 8rem 0 0 3rem;
  @keyframes slide {
    0% {
      transform: translateX(50%);
    }
    100% {
      transform: translateX(0);
    }
  }
  animation: slide 1s ease;
  animation-duration: 0.4s;
  animation-timing-function: ease;
`;

const Li = styled.li`
  color: white;
  list-style: none;
  padding-top: 3rem;
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  color: ${({ state }) => (state ? "#E51013" : "")};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.COLOR.main};
  }
`;

const S = { Wrapper, Hamburger, Ul, Li };
