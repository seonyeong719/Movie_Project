import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNowPlay } from "../../Store/Slice/nowSlice";
import ListCard from "../../Components/Card/listCard";

function NowPlaying() {
  const [pages, setPages] = useState(1);
  const dispatch = useDispatch();
  // useDispatch는 생성한 action을 호출하는 용도로 사용하기 때문에, dispatch라는 변수에 선언해서 담아둔다.
  const getNowPlayState = useSelector((store) => store.nowPlay); // store 뒤에 createSlice의 name써야함

  console.log(getNowPlayState);

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
    <div>
      <ListCard />
    </div>
  );
}
export default NowPlaying;
