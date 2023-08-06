import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchList } from "../../Store/Slice/searchSlice";
import { styled } from "styled-components";
import { FlexAllCenter, GridAllCenter, GridColumn, GridGap } from "../../Styles/common";
import { useParams } from "react-router-dom";
import ListCard from "../../Components/Card/listCard";
import DetailSkeleton from "../Skeleton/detailSkeleton";

function SearchList() {
  const { title } = useParams();
  const dispatch = useDispatch();
  const getSearchState = useSelector((store) => store.search);

  useEffect(() => {
    dispatch(getSearchList({ title }));
  }, [dispatch]);

  if (getSearchState.loading) {
    return <DetailSkeleton />;
  }

  return (
    <>
      {getSearchState.search && (
        <S.Div>
          {getSearchState.search.results?.length === 0 ? (
            <div>검색결과가 없다는 페이지</div>
          ) : (
            <S.Wrap>
              <S.List>
                <ListCard list={getSearchState.search?.results} />
              </S.List>
            </S.Wrap>
          )}
        </S.Div>
      )}
    </>
  );
}
export default SearchList;
const Div = styled.div`
  background-color: #111111;
`;

const Wrap = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLOR.common.black};
  ${FlexAllCenter}
`;

const List = styled.div`
  background-color: ${({ theme }) => theme.COLOR.common.black};
  padding-top: 10rem;
  width: 80%;
  ${GridColumn(4)}
  ${GridAllCenter}
  @media ${({ theme }) => theme.DEVICE.tablet} {
    ${GridColumn(3)}
    width: 90%;
  }
  @media ${({ theme }) => theme.DEVICE.mobile} {
    ${GridColumn(2)}
    ${GridGap.mobile}
  width: 95%;
  }
`;

const S = {
  Div,
  Wrap,
  List,
};
