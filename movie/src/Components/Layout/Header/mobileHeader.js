import { RxHamburgerMenu } from "react-icons/rx";
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
      <S.Hamburger onClick={onSideBarBtn} />
      {open && (
        <S.Div>
          {NAV_LIST.map((nav, idx) => (
            <S.Li key={idx} onClick={() => onClickNav(nav.url)}>
              {nav.title}
            </S.Li>
          ))}
        </S.Div>
      )}
    </S.Wrapper>
  );
}
export default MobileHeader;

const Wrapper = styled.div`
  position: relative;
  ${FlexAlignCenter}
  display: none;
  @media ${({ theme }) => theme.DEVICE.mobile} {
    display: block;
  }
`;

const Hamburger = styled(RxHamburgerMenu)`
  color: gray;
  font-size: 3.5rem;
  cursor: pointer;
`;

const Div = styled.div`
  position: absolute;
  background-color: beige;
  right: 0;
  top: 4rem;
  font-size: 2rem;
  height: 15rem;
  width: 11rem;
  padding: 1rem 0 0 0.8rem;
  opacity: 0.7;
`;

const Li = styled.li`
  color: white;
  list-style: none;
  padding-top: 0.7rem;
  color: black;
`;

const S = { Wrapper, Hamburger, Li, Div };
