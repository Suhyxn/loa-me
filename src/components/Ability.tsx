import React, { useState } from "react";
import SubTab from "./SubTab";
import Equipment from "./Equipment";
import Avatar from "./Avatar";

type SubTab = "equipments" | "avatars";

function Ability() {
  const [selectedSubTab, setSelectedSubTab] = useState<SubTab>("equipments");

  const TabClick = (tab: SubTab) => {
    setSelectedSubTab(tab);
  };
  return (
    <>
      <SubTab tab={selectedSubTab} onClick={TabClick} />
      {selectedSubTab === "equipments" && <Equipment />}
      {selectedSubTab === "avatars" && <Avatar />}
    </>
  );
}

export default Ability;
