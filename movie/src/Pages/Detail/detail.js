import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailList } from "../../Store/Slice/detailSlice";
import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import { FlexAlignCenter } from "../../Styles/common";

function DetailPage() {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const getDetailState = useSelector((store) => store.detail);

  const IMG_BASE_URL = "https://image.tmdb.org/t/p/original/";
  const VIDEO_URL = "https://www.youtube.com/embed/";

  useEffect(() => {
    dispatch(getDetailList({ movieId }));
  }, []);

  if (getDetailState.loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {getDetailState.detail && (
        <S.Body>
          <S.BackImg src={IMG_BASE_URL + getDetailState.detail.backdrop_path} />
          <Wrap>
            <S.PostImg src={IMG_BASE_URL + getDetailState.detail.poster_path} />
            <Box>
              <Title>
                <H1>{getDetailState.detail.title}</H1>
              </Title>
              <S.Title_1>
                <S.Avg>⭐️ {getDetailState.detail.vote_average.toFixed(1)}</S.Avg>
                <S.Date>제작년도: {getDetailState.detail.release_date}</S.Date>
              </S.Title_1>
              <S.Genres>장르: </S.Genres>
              {getDetailState.detail.genres.map((el, idx) => (
                <S.Genres key={idx}>{el.name}</S.Genres>
              ))}
              <Div>줄거리: </Div>
              <S.OverView>{getDetailState.detail.overview}</S.OverView>
            </Box>
          </Wrap>
          <S.Post>
            {getDetailState.detail.videos.results.length === 0 ? (
              <S.Blank>본 영화는 영상이 제공되지 않습니다.</S.Blank>
            ) : (
              <S.Video
                src={VIDEO_URL + getDetailState.detail.videos.results[0].key + "?autoplay=1&mute=1"}
              ></S.Video>
            )}
          </S.Post>
        </S.Body>
      )}
    </>
  );
}
export default DetailPage;

const Body = styled.div`
  width: 100%; // 보류
  /* height: 809px; // ? */
  /* height: 90rem; */
  ${FlexAlignCenter}
  flex-direction: column;
  color: white;
  background-color: rgb(32, 33, 36);
  @media ${({ theme }) => theme.DEVICE.mobile} {
    flex-direction: column;
  }
`;

const BackImg = styled.img`
  width: 100%;
  height: 50rem;
  filter: brightness(50%);
  position: relative;
`;

const Wrap = styled.div`
  width: 100%;
  @media ${({ theme }) => theme.DEVICE.mobile} {
    width: 95%;
  }
`;

const PostImg = styled.img`
  width: 22rem;
  height: 31rem;
  position: absolute;
  left: 11rem;
  top: 12rem;
  @media ${({ theme }) => theme.DEVICE.mobile} {
    width: 26rem;
    height: 33rem;
    top: 11rem;
    left: 50%;
    transform: translate(-50%, 0%);
  }
`;

const Post = styled.div`
  padding: 3rem 0;
  background-color: rgb(32, 33, 36);
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Blank = styled.div`
  background-color: rgb(32, 33, 36);
  height: 8.2rem;
`;

const Video = styled.iframe`
  width: 1600px;
  height: 45rem;
`;

const Box = styled.div`
  padding-left: 3rem;
  width: 59rem;
  position: absolute;
  left: 35rem;
  top: 12rem;
  @media ${({ theme }) => theme.DEVICE.mobile} {
    position: static;
    width: 100%;
    padding: 5rem 0;
  }
`;

const Title = styled.div`
  font-weight: 900;
  font-size: 3rem;
`;

const H1 = styled.h1`
  font-weight: 900;
`;

const Title_1 = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0;
`;

const Avg = styled.div`
  font-size: 1.7rem;
`;

const Date = styled.div`
  font-size: 1.4rem;
`;

const Genres = styled.span`
  font-size: 1.8rem;
`;

const Div = styled.div`
  font-size: 1.8rem;
  margin-top: 2rem;
  font-weight: 700;
`;

const OverView = styled.div`
  font-size: 1.5rem;
  margin-top: 1.2rem;
  line-height: 2.2rem;
`;

const S = {
  Body,
  Video,
  BackImg,
  PostImg,
  Avg,
  Date,
  Title_1,
  Genres,
  OverView,
  Div,
  Post,
  Blank,
};
