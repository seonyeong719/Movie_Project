import Skeleton from "@mui/material/Skeleton";
import styled from "styled-components";

const ListSkeleton = () => {
  const length = new Array(20).fill(0);
  return (
    <>
      <S.MainPostWrap>
        <Skeleton animation="wave" variant="rounded" width={1600} height={550} />
      </S.MainPostWrap>
      <S.List>
        {length.map((el, idx) => (
          <S.Wrap key={idx}>
            <Skeleton animation="wave" variant="rounded" width={350} height={550} />
          </S.Wrap>
        ))}
      </S.List>
    </>
  );
};
export default ListSkeleton;
const MainPostWrap = styled.div`
  background-color: rgb(132, 132, 132);
  padding-top: 30px;
  display: flex;
  justify-content: center;
  position: relative;
`;
const List = styled.div`
  background-color: rgb(132, 132, 132);
  border-top: 2px solid gray;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 10px;
`;
const Wrap = styled.div`
  margin: 30px;
`;

const S = {
  MainPostWrap,
  List,
  Wrap,
};
