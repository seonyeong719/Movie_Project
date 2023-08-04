import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailList } from "../../Store/Slice/detailSlice";

function DetailPage() {
  const [detailPages, setDetailPages] = useState(1);
  const dispatch = useDispatch();
  const getDetailState = useSelector((store) => store.detail);

  console.log(getDetailState);

  useEffect(() => {
    dispatch(getDetailList(detailPages));
  }, []);

  if (getDetailState.loading) {
    return <div>Loading...</div>;
  }

  return <div>DetailPage</div>;
}
export default DetailPage;
