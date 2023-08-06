import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import SearchBar from "../../SearchBar/searchBar";
import { FlexAlignCenter, FlexSpaceBetween } from "../../../Styles/common";
import "../../../Css/font.css";
import { NAV_LIST } from "../../../Consts/navList";
import MobileHeader from "./mobileHeader";

function Header() {
  const navigate = useNavigate();
  const [locationUrl, setLocationUrl] = useState("");
  const location = useLocation();
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);

  useEffect(() => {
    setLocationUrl(location.pathname);
  }, [location]);

  return (
    <>
      <S.Wrapper scroll={scroll}>
        {/* <S.Wrapper> */}
        <S.Head>
          <S.HeaderLeft>
            <S.HeaderLogo className="headerFont" onClick={() => navigate("")}>
              영화를 보CINEMA
            </S.HeaderLogo>
            <S.ButtonWrap>
              {NAV_LIST.map((el, idx) => (
                <S.Button2 onClick={() => navigate(el.url)} key={idx}>
                  <span>{el.title}</span>
                  {locationUrl === el.url && <S.Dot />}
                </S.Button2>
              ))}
            </S.ButtonWrap>
          </S.HeaderLeft>
          <SearchBar />
          <MobileHeader />
        </S.Head>
      </S.Wrapper>
    </>
  );
}
export default Header;

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: ${({ scroll }) => (scroll ? "rgba(0, 0, 0, 1)" : "transparent")};
`;
const Head = styled.div`
  ${FlexSpaceBetween}
  margin: 0 auto;
  width: 80%;
  padding-top: 0.5rem;
  @media ${({ theme }) => theme.DEVICE.mobile} {
    width: 90%;
  }
`;

const HeaderLogo = styled.div`
  font-size: 2.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.COLOR.main};
  margin-right: 2rem;
  -webkit-text-stroke: 1px white;
  @media ${({ theme }) => theme.DEVICE.mobile} {
    width: 10rem;
    padding-top: 1rem;
  }
`;
const HeaderLeft = styled.div`
  ${FlexAlignCenter};
`;

const ButtonWrap = styled.div`
  display: flex;
  @media ${({ theme }) => theme.DEVICE.mobile} {
    display: none;
  }
`;
const Button2 = styled.button`
  padding: 1rem 2rem;
  border: none;
  font-size: 1.1rem;
  text-shadow: black 1px 1px 10px;
  color: ${({ theme }) => theme.COLOR.common.gray[100]};
  cursor: pointer;
  background-color: transparent;
  position: relative;
  &:hover {
    filter: brightness(80%);
    transition: filter 0.9s;
  }
  & > span {
    width: 1rem;
  }
`;
const Dot = styled.div`
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  bottom: 8px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.COLOR.main};
`;

const S = {
  Head,
  HeaderLogo,
  HeaderLeft,
  Wrapper,
  ButtonWrap,
  Button2,
  Dot,
};
