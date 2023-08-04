import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailList } from "../../Store/Slice/detailSlice";
import { styled } from "styled-components";

function DetailPage() {
  const [detailPages, setDetailPages] = useState(1);
  const dispatch = useDispatch();
  const getDetailState = useSelector((store) => store.detail);

  console.log(getDetailState);

  useEffect(() => {
    dispatch(getDetailList(detailPages));
  }, []);

  if (getDetailState.loading) {
    return <div>Loading...</div>;
  }

  return (
    <S.Body>
      <S.BackImg />
      <S.PostImg />
      <S.Post>
        <S.Blank></S.Blank>

        <S.Video></S.Video>
      </S.Post>
      <Box>
        <Title>
          <H1></H1>
        </Title>
        <S.Title_1>
          <S.Avg>⭐️</S.Avg>
          <S.Date>제작년도:</S.Date>
        </S.Title_1>
        <S.Genres>장르: </S.Genres>

        <S.Genres></S.Genres>

        <Div>줄거리: </Div>
        <S.OverView></S.OverView>
      </Box>
    </S.Body>
  );
}
export default DetailPage;

const Blank = styled.div`
  background-color: rgb(32, 33, 36);
  height: 101px;
`;
const Post = styled.div`
  padding: 50px 0;
  background-color: rgb(32, 33, 36);
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Div = styled.div`
  font-size: 25px;
  margin-top: 30px;
`;
const OverView = styled.div`
  font-size: 25px;
  margin-top: 10px;
`;
const Genres = styled.span`
  padding: 0px 5px;
  font-size: 20px;
`;
const Title_1 = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
`;
const Avg = styled.div`
  font-size: 25px;
`;
const Date = styled.div`
  font-size: 22px;
`;
const PostImg = styled.img`
  width: 350px;
  height: 500px;
  position: absolute;
  left: 178px;
  top: 200px;
`;
const BackImg = styled.img`
  width: 100%;
  height: 700px;
  filter: brightness(50%);
  position: relative;
`;
const Body = styled.div`
  height: 809px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  background-color: rgb(32, 33, 36);
`;
const Img = styled.img`
  width: 1600px;
  height: 800px;
`;
const Video = styled.iframe`
  width: 1600px;
  height: 800px;
`;

const Box = styled.div`
  padding-left: 50px;
  width: 950px;
  position: absolute;
  left: 550px;
  top: 200px;
`;

const Title = styled.div`
  font-weight: 900;
  font-size: 50px;
`;

const H1 = styled.h1`
  font-weight: 900;
`;

const S = {
  Body,
  Video,
  Img,
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
