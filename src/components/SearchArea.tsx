import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SearchBox = styled.input`
  width: 100%;
  height: 100%;
  color: #ffffff;
  outline: 4px solid #ebebe3;
  border-radius: 1rem;
  line-height: 100%;
  text-align: center;

  &::placeholder {
    color: #ebebe3;
    font-size: 1.4rem;
  }

  &:focus {
    placeholder: "";

    &::placeholder {
      color: transparent;
    }
  }
`;

function SearchArea() {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  const ChangeSearchText = (e: any) => {
    setSearchText(e.target.value);
  };

  const ChangeCharacterPage = (e: any) => {
    if (e.key === "Enter") {
      navigate(`/${searchText}`);
    }
  };

  return (
    <>
      <SearchBox
        placeholder="검색할 캐릭터명을 입력해 주세요..."
        onChange={ChangeSearchText}
        onKeyDown={ChangeCharacterPage}
      />
    </>
  );
}

export default SearchArea;
