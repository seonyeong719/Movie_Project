import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUpComingList } from "../../Store/Slice/upSlice";

function UpComing() {
  const [upPages, setUpPages] = useState(1);
  const dispatch = useDispatch();
  const getUpState = useSelector((store) => store.up);

  console.log(getUpState);

  useEffect(() => {
    dispatch(getUpComingList(upPages));
  }, []);

  if (getUpState.loading) {
    return <div>Loading...</div>;
  }

  return <div>UpComing</div>;
}
export default UpComing;
