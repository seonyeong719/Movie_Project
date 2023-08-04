import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../../Store/Slice/movieSlice";

function Home() {
  const [homePages, setHomePages] = useState(1);
  const dispatch = useDispatch();
  const getMovieState = useSelector((store) => store.movies);

  console.log(getMovieState);

  useEffect(() => {
    dispatch(getMovie(homePages));
  }, []);

  if (getMovieState.loading) {
    return <div>Loading...</div>;
  }

  return <div>Home</div>;
}
export default Home;
