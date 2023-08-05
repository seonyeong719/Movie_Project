import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNowPlay } from "../../Store/Slice/nowSlice";
import ListCard from "../../Components/Card/listCard";
import { styled } from "styled-components";
import { FlexJustifyCenter } from "../../Styles/common";
import Pagination from "../../Components/Pagination/pagination";

function NowPlaying() {
  const [pages, setPages] = useState(1);
  const dispatch = useDispatch();
  const getNowPlayState = useSelector((store) => store.nowPlay);

  useEffect(() => {
    dispatch(getNowPlay(pages));
  }, [pages]);

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
  ${FlexJustifyCenter}
  flex-wrap: wrap;
`;

const S = {
  List,
};
