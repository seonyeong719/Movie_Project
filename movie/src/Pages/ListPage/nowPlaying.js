import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNowPlay } from "../../Store/Slice/nowSlice";
import ListCard from "../../Components/Card/listCard";
import { styled } from "styled-components";
import { GridAllCenter, GridColumn, GridGap } from "../../Styles/common";
import Pagination from "../../Components/Pagination/pagination";

function NowPlaying() {
  const [pages, setPages] = useState(1);
  const dispatch = useDispatch();
  const getNowPlayState = useSelector((store) => store.nowPlay);

  useEffect(() => {
    dispatch(getNowPlay(pages));
  }, [pages, dispatch]);

  if (getNowPlayState.loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <S.List>
        <ListCard list={getNowPlayState.nowPlay?.results} />
      </S.List>
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

const List = styled.div`
  background-color: ${({ theme }) => theme.COLOR.common.black};
  padding-top: 10rem;
  ${GridColumn(4)}
  ${GridAllCenter}
  @media ${({ theme }) => theme.DEVICE.tablet} {
    ${GridColumn(3)}
  }
  @media ${({ theme }) => theme.DEVICE.mobile} {
    ${GridColumn(2)}
    ${GridGap.mobile}
  }
`;

const S = {
  List,
};
