import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUpComingList } from "../../Store/Slice/upSlice";
import ListCard from "../../Components/Card/listCard";
import { styled } from "styled-components";
import { FlexJustifyCenter } from "../../Styles/common";

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

  return (
    <S.List>
      <ListCard list={getUpState.up?.results} />
    </S.List>
  );
}
export default UpComing;

const List = styled.div`
  background-color: ${({ theme }) => theme.COLOR.common.black};
  ${FlexJustifyCenter}
  flex-wrap: wrap;
`;

const S = {
  List,
};
