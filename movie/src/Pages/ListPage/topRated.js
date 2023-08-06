import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopList } from "../../Store/Slice/topSlice";
import ListCard from "../../Components/Card/listCard";
import { styled } from "styled-components";
import { FlexAllCenter, GridAllCenter, GridColumn, GridGap } from "../../Styles/common";
import Pagination from "../../Components/Pagination/pagination";
import DetailSkeleton from "../Skeleton/detailSkeleton";
import UpBtn from "../../Components/ScrollBtn/upBtn";
import ErrorPage from "../../Components/ErrorPage/errorPage";

function TopRated() {
  const [topPages, setTopPages] = useState(1);
  const dispatch = useDispatch();
  const getTopState = useSelector((store) => store.top);

  useEffect(() => {
    dispatch(getTopList(topPages));
  }, [topPages, dispatch]);

  if (getTopState.loading) {
    return <DetailSkeleton />;
  }

  return (
    <>
      <ErrorPage />
      <S.Wrap>
        <S.List>
          <ListCard list={getTopState.top?.results} />
        </S.List>
      </S.Wrap>
      <UpBtn />
      <Pagination
        totalPage={getTopState.top?.total_pages}
        limits={10}
        setPage={setTopPages}
        scroll={0}
      />
    </>
  );
}
export default TopRated;

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
