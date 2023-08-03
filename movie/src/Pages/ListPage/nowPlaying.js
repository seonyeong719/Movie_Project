import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getNowPlay } from "../../Store/Slice/nowSlice";

function NowPlaying() {
  const { pageParam } = useParams();
  const dispatch = useDispatch();
  // useDispatch는 생성한 action을 호출하는 용도로 사용하기 때문에, dispatch라는 변수에 선언해서 담아둔다.
  const getNowPlayState = useSelector((store) => store.nowPlay); // store 뒤에 createSlice의 name써야함

  useEffect(() => {
    dispatch(getNowPlay(pageParam));
  }, []);

  if (getNowPlayState.loading) {
    return <div>Loading...</div>;
  }

  if (getNowPlayState.movies === null) {
    return <div>No movies available yet.</div>;
  }

  return <div>NowPlaying</div>;
}
export default NowPlaying;
