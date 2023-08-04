import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopList } from "../../Store/Slice/topSlice";

function TopRated() {
  const [topPages, setTopPages] = useState(1);
  const dispatch = useDispatch();
  const getTopState = useSelector((store) => store.top);

  console.log(getTopState);

  useEffect(() => {
    dispatch(getTopList(topPages));
  }, []);

  if (getTopState.loading) {
    return <div>Loading...</div>;
  }

  return <div>TopRated</div>;
}
export default TopRated;
