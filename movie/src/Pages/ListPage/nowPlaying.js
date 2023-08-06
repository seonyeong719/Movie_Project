import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNowPlay } from "../../Store/Slice/nowSlice";
import ListCard from "../../Components/Card/listCard";
import { styled } from "styled-components";
import { FlexAllCenter, GridAllCenter, GridColumn, GridGap } from "../../Styles/common";
import Pagination from "../../Components/Pagination/pagination";
import DetailSkeleton from "../Skeleton/detailSkeleton";
import UpBtn from "../../Components/ScrollBtn/upBtn";

function NowPlaying() {
  const [pages, setPages] = useState(1);
  const dispatch = useDispatch();
  const getNowPlayState = useSelector((store) => store.nowPlay);

  useEffect(() => {
    dispatch(getNowPlay(pages));
  }, [pages, dispatch]);

  if (getNowPlayState.loading) {
    return <DetailSkeleton />;
  }

  return (
    <>
      <S.Wrap>
        <S.List>
          <ListCard list={getNowPlayState.nowPlay?.results} />
        </S.List>
      </S.Wrap>
      <UpBtn />
      <Pagination
        totalPage={getNowPlayState.nowPlay?.total_pages}
        limits={10}
        setPage={setPages}
        scroll={0}
      />
    </>
  );
}
export default NowPlaying;

const Wrap = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLOR.common.black};
  ${FlexAllCenter}
`;

const List = styled.div`
  background-color: ${({ theme }) => theme.COLOR.common.black};
  padding-top: 10rem;
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
};
