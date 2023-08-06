import { styled } from "styled-components";

function ErrorPage() {
  return (
    <Wrap>
      <div>검색결과가 없습니다</div>
      <HomeBtn>홈으로 돌아갑니다.</HomeBtn>
    </Wrap>
  );
}
export default ErrorPage;

const Wrap = styled.div``;

const HomeBtn = styled.button``;
