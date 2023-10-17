import React from "react";
import styled from "styled-components";

const SearchBox = styled.input`
  width: 100%;
  height: 100%;
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
  return (
    <>
      <SearchBox placeholder="검색할 캐릭터명을 입력해 주세요..." />
    </>
  );
}

export default SearchArea;
