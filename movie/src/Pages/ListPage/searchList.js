import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchList } from "../../Store/Slice/searchSlice";
import { styled } from "styled-components";
import { GridAllCenter, GridColumn, GridGap } from "../../Styles/common";
import { useParams } from "react-router-dom";
import ListCard from "../../Components/Card/listCard";

function SearchList() {
  const { title } = useParams();
  const dispatch = useDispatch();
  const getSearchState = useSelector((store) => store.search);

  useEffect(() => {
    dispatch(getSearchList({ title }));
  }, [dispatch]);

  if (getSearchState.loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {getSearchState.search && (
        <S.Div>
          {getSearchState.search.results?.length === 0 ? (
            <div>검색결과가 없다는 페이지</div>
          ) : (
            <>
              <S.List>
                <ListCard list={getSearchState.search?.results} />
              </S.List>
            </>
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
  Div,
  List,
};
