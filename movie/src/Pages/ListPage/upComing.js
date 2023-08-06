import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUpComingList } from "../../Store/Slice/upSlice";
import ListCard from "../../Components/Card/listCard";
import { styled } from "styled-components";
import { GridAllCenter, GridColumn, GridGap } from "../../Styles/common";
import Pagination from "../../Components/Pagination/pagination";

function UpComing() {
  const [upPages, setUpPages] = useState(1);
  const dispatch = useDispatch();
  const getUpState = useSelector((store) => store.up);

  useEffect(() => {
    dispatch(getUpComingList(upPages));
  }, [upPages, dispatch]);

  if (getUpState.loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <S.List>
        <ListCard list={getUpState.up?.results} />
      </S.List>
      <Pagination
        totalPage={getUpState.up?.total_pages}
        limits={10}
        setPage={setUpPages}
        scroll={0}
      />
    </>
  );
}
export default UpComing;

const List = styled.div`
  background-color: ${({ theme }) => theme.COLOR.common.black};
  padding-top: 10rem;
  ${GridColumn(4)}
  ${GridAllCenter}
  @media ${({ theme }) => theme.DEVICE.tablet} {
    ${GridColumn(3)}
  }
  @media ${({ theme }) => theme.DEVICE.mobile} {
    ${GridColumn(2)}
    ${GridGap.mobile}
  }
`;

const S = {
  List,
};
