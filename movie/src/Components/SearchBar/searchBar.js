import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CiSearch } from "react-icons/ci";

function SearchBar() {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const onClickSearch = () => {
    if (!title) return;
    navigate(`/search/${title}`);
  };
  const searchInput = (e) => {
    setTitle(e.target.value);
  };

  return (
    <>
      <Form onSubmit={onClickSearch}>
        <S.SearchInput onChange={searchInput} placeholder="제목, 사람, 장르" />
        <S.Button disabled={title.length === 0}>
          <CiSearch color={"white"} size={25} />
        </S.Button>
      </Form>
    </>
  );
}
export default SearchBar;

const Form = styled.form`
  display: flex;
`;

const SearchInput = styled.input`
  background-color: rgb(32, 33, 36);
  color: white;
  border-radius: 2rem 0 0 2rem;
  padding: 0.5rem;
  padding-left: 2rem;
  font-size: 1.25rem;
  border: none;
  outline: none;
  text-align: left;
`;

const Button = styled.button`
  background-color: rgb(32, 33, 36);
  color: white;
  border: none;
  padding-right: 0.5rem;
  border-radius: 0 2rem 2rem 0;
  cursor: pointer;
`;

const IconWrapper = styled.div`
  cursor: pointer;
`;

const S = {
  SearchInput,
  Button,
  Form,
  IconWrapper,
};
