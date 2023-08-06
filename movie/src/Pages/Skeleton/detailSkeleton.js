import Skeleton from "@mui/material/Skeleton";
import styled from "styled-components";
import { FlexAllCenter, GridAllCenter, GridColumn } from "../../Styles/common";

const DetailSkeleton = () => {
  const length = new Array(20).fill(0);
  return (
    <S.Wrapper>
      <S.List>
        {length.map((el, idx) => (
          <S.Wrap key={idx}>
            <Skeleton animation="wave" variant="rounded" width={300} height={450} />
          </S.Wrap>
        ))}
      </S.List>
    </S.Wrapper>
  );
};
export default DetailSkeleton;

const Wrapper = styled.div`
  width: 100%;
  ${FlexAllCenter}
  background-color: rgb(132, 132, 132);
`;

const List = styled.div`
  border-top: 2px solid gray;
  padding-top: 10rem;
  ${GridAllCenter}
  ${GridColumn(4)}
`;

const Wrap = styled.div`
  margin: 30px;
`;

const S = {
  Wrapper,
  List,
  Wrap,
};
