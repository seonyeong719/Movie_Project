import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import ScrollUp from "../../Utils/scrollUp";
import { FlexAllCenter } from "../../Styles/common";

function Pagination({ totalPage, limits, setPage, scroll }) {
  const [params, setParams] = useSearchParams();

  const nowPage = parseInt(params.get("page")) || 1;

  const startPage = Math.floor((nowPage - 1) / limits) * limits + 1;
  let endPage = startPage + limits - 1;
  if (endPage >= totalPage) endPage = totalPage;

  const nextPage = (number) => {
    setPage(number);
    const queryString = {};
    if (params.toString()) {
      params
        .toString()
        .split("&")
        .forEach((query) => {
          const [key, value] = query.split("=");
          queryString[key] = value;
        });
    }
    queryString["page"] = number;
    setParams(queryString);
  };

  const createPageArray = (start, end) => {
    return Array(end - start + 1)
      .fill()
      .map((_, i) => start + i);
  };

  const disable = (type) => {
    if (type === "start") {
      return Math.floor((nowPage - 1) / limits) === 0;
    }
    if (type === "end") {
      return Math.ceil(nowPage / limits) === Math.ceil(totalPage / limits);
    }
  };

  if (!endPage) return;

  return (
    <S.NavBtn>
      <S.ArrowBtn
        onClick={() => {
          nextPage(Math.floor((nowPage - 1) / limits) * limits);
          ScrollUp(scroll);
        }}
        disabled={disable("start")}
        aria-label="LeftArrow"
      >
        <HiArrowCircleLeft />
      </S.ArrowBtn>
      {createPageArray(startPage, endPage).map((_, i) => (
        <S.NumBtn
          aria-label="NumberBtn"
          key={i}
          onClick={() => {
            nextPage(i + startPage);
            ScrollUp(scroll);
          }}
          aria-current={nowPage === i + startPage ? "page" : null}
        >
          {i + startPage}
        </S.NumBtn>
      ))}
      <S.ArrowBtn
        onClick={() => {
          nextPage(Math.ceil(nowPage / limits) * limits + 1);
          ScrollUp(scroll);
        }}
        disabled={disable("end")}
        aria-label="RightArrow"
      >
        <HiArrowCircleRight />
      </S.ArrowBtn>
    </S.NavBtn>
  );
}
export default Pagination;

const NavBtn = styled.nav`
  ${FlexAllCenter}
  padding: 5rem 0;
  gap: 4px;
  background-color: ${({ theme }) => theme.COLOR.common.black};
`;

const ArrowBtn = styled.button`
  padding: 0.5rem;
  padding-top: 0.8rem;
  font-size: 1.9rem;
  color: ${({ theme }) => theme.COLOR.common.white};
  background-color: transparent;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.COLOR.common.gray[300]};
  }

  &[disabled] {
    cursor: revert;
    color: ${({ theme }) => theme.COLOR.common.gray[200]};
  }
`;

const NumBtn = styled.button`
  border: none;
  margin: 0 1.1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.COLOR.common.white};
  background-color: transparent;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.COLOR.main};
    border-bottom: 1px solid ${({ theme }) => theme.COLOR.main};
  }

  &[aria-current] {
    color: ${({ theme }) => theme.COLOR.main};
    font-weight: bold;
  }
`;

const S = {
  NavBtn,
  ArrowBtn,
  NumBtn,
};
