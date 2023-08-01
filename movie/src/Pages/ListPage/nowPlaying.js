import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getNowPlay } from "../../Store/Slice/nowSlice";

function NowPlaying() {
  const { pageParam } = useParams();
  const dispatch = useDispatch();
  const getNowPlayState = useSelector((store) => store.nowPlay); // store 뒤에 createSlice의 name써야함

  useEffect(() => {
    dispatch(getNowPlay(pageParam));
    console.log(getNowPlayState);
  }, []);

  return <div>NowPlaying</div>;
}
export default NowPlaying;
