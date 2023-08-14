import { styled } from "styled-components";
import { FlexSpaceBetween } from "../../Styles/common";
import { useNavigate } from "react-router-dom";

function ListCard({ list }) {
  const IMG_BASE_URL = "https://image.tmdb.org/t/p/original/";
  const navigate = useNavigate();

  return (
    <>
      {list &&
        list.map((el) => (
          <S.Box onClick={() => navigate(`/detail/${el.id}`)}>
            <S.ImgWrap>
              <S.Img src={IMG_BASE_URL + el.poster_path} width="100" height="700" />
            </S.ImgWrap>
            <S.ContentWrapper>
              <S.Contents_Header>
                <S.Title>{el.title}</S.Title>
                <div>⭐️ {el.vote_average} </div>
              </S.Contents_Header>
              <S.Contents_Body>{el.overview.substr(0, 50) + "..."}</S.Contents_Body>
            </S.ContentWrapper>
          </S.Box>
        ))}
    </>
  );
}
export default ListCard;

const Box = styled.div`
  background-color: #111111;
  width: 90%;
  height: 90%;
  margin: 1.9rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: transform 0.9s;
  }
  transform: scale(1);
  transition: transform 0.9s;
  @media ${({ theme }) => theme.DEVICE.mobile} {
    height: 90%;
  }
`;

const Img = styled.img`
  width: 100%;
  max-height: 20rem;
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

const ImgWrap = styled.div``;

const Title = styled.div`
  max-width: 150px;
`;

const ContentWrapper = styled.div`
  padding: 1rem;
`;

const S = {
  Box,
  Img,
  Contents_Header,
  Contents_Body,
  ImgWrap,
  ContentWrapper,
  Title,
};
