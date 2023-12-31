import { styled } from "styled-components";
import { FlexAllCenter } from "../../Styles/common";
import { Link } from "react-router-dom";

function ErrorPage({ title }) {
  return (
    <S.Wrap>
      <S.Comment>
        " {title} " 에 대한 검색결과가 없습니다 <br /> 홈으로 돌아갑니다
      </S.Comment>
      <Link to="/">
        <S.HomeBtn>홈으로 돌아가기</S.HomeBtn>
      </Link>
    </S.Wrap>
  );
}
export default ErrorPage;

const Wrap = styled.div`
  background-color: #111111;
  width: 100%;
  height: 100vh;
  ${FlexAllCenter}
  text-align: center;
  flex-direction: column;
`;

const Comment = styled.div`
  color: white;
  font-size: 1.9rem;
  line-height: 3rem;
`;

const HomeBtn = styled.button`
  width: 20rem;
  height: 3.5rem;
  margin-top: 3rem;
  color: white;
  font-size: 1.4rem;
  font-weight: 700;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.COLOR.main};
  cursor: pointer;
  &:hover {
    background-color: #ae0e0f;
  }
`;

const S = {
  Wrap,
  Comment,
  HomeBtn,
};
