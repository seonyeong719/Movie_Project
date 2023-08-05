import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopList } from "../../Store/Slice/topSlice";
import ListCard from "../../Components/Card/listCard";
import { styled } from "styled-components";
import { FlexJustifyCenter } from "../../Styles/common";
import Pagination from "../../Components/Pagination/pagination";

function TopRated() {
  const [topPages, setTopPages] = useState(1);
  const dispatch = useDispatch();
  const getTopState = useSelector((store) => store.top);

  useEffect(() => {
    dispatch(getTopList(topPages));
  }, [topPages]);

  if (getTopState.loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <S.List>
        <ListCard list={getTopState.top?.results} />
      </S.List>
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

const List = styled.div`
  background-color: ${({ theme }) => theme.COLOR.common.black};
  ${FlexJustifyCenter}
  flex-wrap: wrap;
`;

const S = {
  List,
};
