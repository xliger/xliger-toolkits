import React, { useState } from "react";
import XLigerToggle from "./XLigerToggle";

export default {
  title: "Components/XLigerToggle",
  component: XLigerToggle,
};

export const Default: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => setIsChecked(!isChecked);

  return (
    <>
      <div style={{ marginBottom: "32px" }}>
        <XLigerToggle checked={isChecked} onChange={toggle} />
      </div>
      <div style={{ marginBottom: "32px" }}>
        <XLigerToggle checked={isChecked} onChange={toggle} scale="md" />
      </div>
      <div>
        <XLigerToggle checked={isChecked} onChange={toggle} scale="sm" />
      </div>
    </>
  );
};
