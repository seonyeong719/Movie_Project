import { styled } from "styled-components";
import { FlexJustifyCenter, FlexSpaceBetween } from "../../Styles/common";

function ListCard() {
  return (
    <>
      {/* <S.MainPostWrap>
        <S.MainPost></S.MainPost>
        <S.MainCont>영화 제목</S.MainCont>
        <S.MainCont1>개봉일 :</S.MainCont1>
      </S.MainPostWrap>
      <S.List> */}
      <S.Box>
        <S.ImgWrap>
          <S.Img />
        </S.ImgWrap>
        <S.ContentWrapper>
          <S.Contents_Header>
            <S.Title>제목</S.Title>
            <div>⭐️ 별점 점수</div>
          </S.Contents_Header>
          <S.Contents_Body>영화 설명</S.Contents_Body>
        </S.ContentWrapper>
      </S.Box>
      {/* </S.List> */}
    </>
  );
}
export default ListCard;

// const MainCont1 = styled.div`
//   font-size: 40px;
//   position: absolute;
//   bottom: 20rem;
//   left: 180px;
//   text-shadow: black 1px 1px 10px;
//   color: ${({ theme }) => theme.COLOR.common.white};
// `;
// const MainCont = styled.div`
//   font-size: 80px;
//   font-weight: 600;
//   text-shadow: black 1px 1px 10px;
//   color: ${({ theme }) => theme.COLOR.common.white};
//   position: absolute;
//   bottom: 24rem;
//   left: 180px;
// `;
// const MainPost = styled.img`
//   width: 100%;
//   height: 80vh;
//   position: relative;
//   opacity: 0.7;
// `;

// const MainPostWrap = styled.div`
//   display: flex;
//   justify-content: center;
//   position: relative;
// `;

// const List = styled.div`
//   background-color: ${({ theme }) => theme.COLOR.common.black};
//   ${FlexJustifyCenter}
//   flex-wrap: wrap;
// `;

const Box = styled.div`
  background-color: #111111;
  width: 18.5rem;
  margin: 1.9rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: transform 0.9s;
  }
  transform: scale(1);
  transition: transform 0.9s;
`;

const Img = styled.img`
  height: 20rem;
  width: 20rem;
  /* width: 310px; */
`;

const Contents_Header = styled.div`
  ${FlexSpaceBetween}
  color: white;
  font-size: 1.3rem;
`;
const Contents_Body = styled.div`
  padding-top: 1.5rem;
  font-size: 1.15rem;
  color: rgb(152, 152, 152);
`;
const ImgWrap = styled.div`
  ${FlexJustifyCenter}
`;

const Title = styled.div`
  max-width: 150px;
  /* max-width: 12rem; */
`;
const ContentWrapper = styled.div`
  padding: 1rem;
`;
const S = {
  //   List,
  //   MainPost,
  //   MainCont,
  //   MainPostWrap,
  //   MainCont1,
  Box,
  Img,
  Contents_Header,
  Contents_Body,
  ImgWrap,
  ContentWrapper,
  Title,
};
