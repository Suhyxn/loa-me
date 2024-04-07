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
  padding: 0.25rem;
  font-size: 14px;
  color: #ffffff;
  background-color: #131415;
`;

interface Props {
  tab: "ability" | "skills" | "collections";
  onClick: (tab: "ability" | "skills" | "collections") => void;
}

function Tabs({ tab, onClick }: Props) {
  return (
    <List>
      <ListItem onClick={() => onClick("ability")}>
        <TabButton>능력치</TabButton>
      </ListItem>
      <ListItem>
        <TabButton onClick={() => onClick("skills")}>스킬</TabButton>
      </ListItem>
      <ListItem>
        <TabButton onClick={() => onClick("collections")}>수집</TabButton>
      </ListItem>
    </List>
  );
}

export default Tabs;
