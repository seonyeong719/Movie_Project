import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNowPlay } from "../../Store/Slice/nowSlice";
import ListCard from "../../Components/Card/listCard";
import { styled } from "styled-components";
import { FlexJustifyCenter } from "../../Styles/common";

function NowPlaying() {
  const [pages, setPages] = useState(1);
  const dispatch = useDispatch();
  const getNowPlayState = useSelector((store) => store.nowPlay);

  console.log(getNowPlayState.nowPlay?.results);

  useEffect(() => {
    dispatch(getNowPlay(pages));
  }, []);

  if (getNowPlayState.loading) {
    return <div>Loading...</div>;
  }

  // if (getNowPlayState.nowPlay === null) {
  //   return <div>No movies</div>;
  // }

  return (
    <S.List>
      <ListCard list={getNowPlayState.nowPlay?.results} />
    </S.List>
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
