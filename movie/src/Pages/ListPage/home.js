import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../../Store/Slice/movieSlice";
import { styled } from "styled-components";
import { FlexJustifyCenter } from "../../Styles/common";
import ListCard from "../../Components/Card/listCard";
import Pagination from "../../Components/Pagination/pagination";

function Home() {
  const [homePages, setHomePages] = useState(1);
  const dispatch = useDispatch();
  const getMovieState = useSelector((store) => store.movies);

  useEffect(() => {
    dispatch(getMovie(homePages));
  }, [homePages]);

  if (getMovieState.loading) {
    return <div>Loading...</div>;
  }

  // const IMG_BASE_URL = process.env.REACT_APP_IMG_BASE_URL;
  const IMG_BASE_URL = "https://image.tmdb.org/t/p/original/";
  const random = Math.floor(Math.random() * 20);

  return (
    <div>
      <S.MainPostWrap>
        <S.MainPost
          src={IMG_BASE_URL + getMovieState.movies?.results[random].backdrop_path}
        ></S.MainPost>
        <S.MainCont>{getMovieState.movies?.results[random].title}</S.MainCont>
        <S.MainCont1>개봉일 :{getMovieState.movies?.results[random].release_date}</S.MainCont1>
      </S.MainPostWrap>
      <S.List>
        <ListCard list={getMovieState.movies?.results} />
      </S.List>
      <Pagination
        totalPage={getMovieState.movies?.total_pages}
        limits={10}
        setPage={setHomePages}
        scroll={0}
      />
    </div>
  );
}
export default Home;

const MainPostWrap = styled.div`
  ${FlexJustifyCenter}
  position: relative;
`;

const MainPost = styled.img`
  width: 100%;
  height: 48rem;
  position: relative;
  opacity: 0.7;
`;

const MainCont = styled.div`
  font-size: 4.5rem;
  font-weight: 600;
  text-shadow: black 0.1rem 0.1rem 0.6rem;
  color: ${({ theme }) => theme.COLOR.common.white};
  position: absolute;
  bottom: 24rem;
  left: 11rem;
`;

const MainCont1 = styled.div`
  font-size: 2.5rem;
  position: absolute;
  bottom: 20rem;
  left: 11rem;
  text-shadow: black 0.1rem 0.1rem 0.6rem;
  color: ${({ theme }) => theme.COLOR.common.white};
`;

const List = styled.div`
  background-color: ${({ theme }) => theme.COLOR.common.black};
  ${FlexJustifyCenter}
  flex-wrap: wrap;
`;

const S = {
  List,
  MainPost,
  MainCont,
  MainPostWrap,
  MainCont1,
};
