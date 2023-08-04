import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchList } from "../../Store/Slice/searchSlice";

function SearchList() {
  const [searchPages, setSearchPages] = useState(1);
  const dispatch = useDispatch();
  const getSearchState = useSelector((store) => store.search);

  console.log(getSearchState);

  useEffect(() => {
    dispatch(getSearchList(searchPages));
  }, []);

  if (getSearchState.loading) {
    return <div>Loading...</div>;
  }

  return <div>SearchList</div>;
}
export default SearchList;
