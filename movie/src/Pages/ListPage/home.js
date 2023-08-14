import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../../Store/Slice/movieSlice";
import { styled } from "styled-components";
import {
  FlexAllCenter,
  FlexJustifyCenter,
  GridAllCenter,
  GridColumn,
  GridGap,
} from "../../Styles/common";
import ListCard from "../../Components/Card/listCard";
import Pagination from "../../Components/Pagination/pagination";
import ListSkeleton from "../Skeleton/listSkeleton";
import UpBtn from "../../Components/ScrollBtn/upBtn";

function Home() {
  const [homePages, setHomePages] = useState(1);
  const dispatch = useDispatch();
  const getMovieState = useSelector((store) => store.movies);

  useEffect(() => {
    dispatch(getMovie(homePages));
  }, [homePages, dispatch]);

  const IMG_BASE_URL = "https://image.tmdb.org/t/p/original/";
  const random = Math.floor(Math.random() * 20);

  if (getMovieState?.loading) {
    return <ListSkeleton />;
  }

  return (
    <>
      {!getMovieState?.loading && (
        <div>
          <S.MainPostWrap>
            <S.MainPost
              src={IMG_BASE_URL + getMovieState?.movies?.results[random].backdrop_path}
              width="100"
              height="100"
              alt="mainPostImg"
            ></S.MainPost>
            <S.MainCont>{getMovieState.movies?.results[random].title}</S.MainCont>
            <S.MainCont1>개봉일 :{getMovieState.movies?.results[random].release_date}</S.MainCont1>
          </S.MainPostWrap>
          <S.Wrap>
            <S.List>
              <ListCard list={getMovieState.movies?.results} />
            </S.List>
          </S.Wrap>
          <UpBtn />
          <Pagination
            totalPage={getMovieState.movies?.total_pages}
            limits={10}
            setPage={setHomePages}
            scroll={0}
          />
        </div>
      )}
    </>
  );
}
export default Home;

const MainPostWrap = styled.div`
  ${FlexJustifyCenter}
  position: relative;
`;

const MainPost = styled.img`
  width: 100%;
  height: 44rem;
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
  @media ${({ theme }) => theme.DEVICE.mobile} {
    bottom: 10rem;
    left: 4rem;
  }
`;

const MainCont1 = styled.div`
  font-size: 2.5rem;
  position: absolute;
  bottom: 20rem;
  left: 11rem;
  text-shadow: black 0.1rem 0.1rem 0.6rem;
  color: ${({ theme }) => theme.COLOR.common.white};
  @media ${({ theme }) => theme.DEVICE.mobile} {
    bottom: 7rem;
    left: 4rem;
  }
`;

const Wrap = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLOR.common.black};
  ${FlexAllCenter}
`;

const List = styled.div`
  padding-top: 5rem;
  width: 80%;
  ${GridColumn(4)}
  ${GridAllCenter}
  @media ${({ theme }) => theme.DEVICE.tablet} {
    ${GridColumn(3)}
    width: 90%;
  }
  @media ${({ theme }) => theme.DEVICE.mobile} {
    ${GridColumn(2)}
    ${GridGap.mobile}
  width: 95%;
  }
`;

const S = {
  Wrap,
  List,
  MainPost,
  MainCont,
  MainPostWrap,
  MainCont1,
};
