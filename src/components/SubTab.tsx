import React from "react";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
  li:first-child button {
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }

  li:last-child button {
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
`;

const ListItem = styled.li``;

const TabButton = styled.button`
  padding: 0.25rem
  font-size: 14px;
  color: #ffffff;
  background-color: #131415;
`;

interface Props {
  tab: "equipments" | "avatars";
  onClick: (tab: "equipments" | "avatars") => void;
}

function SubTab({ tab, onClick }: Props) {
  return (
    <List>
      <ListItem onClick={() => onClick("equipments")}>
        <TabButton>장비</TabButton>
      </ListItem>
      <ListItem>
        <TabButton onClick={() => onClick("avatars")}>아바타</TabButton>
      </ListItem>
    </List>
  );
}

export default SubTab;
