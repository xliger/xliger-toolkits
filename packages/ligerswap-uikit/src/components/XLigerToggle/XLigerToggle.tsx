import React from "react";
import { XLigerStack, XLigerInput, XLigerLabel } from "./StyledXLigerToggle";
import { XLigerToggleProps, scales } from "./types";

const XLigerToggle: React.FC<XLigerToggleProps> = ({ checked, scale = scales.LG, ...props }) => (
  <XLigerStack scale={scale}>
    <XLigerInput id={props.id || "xliger-toggle"} scale={scale} type="checkbox" checked={checked} {...props} />
    <XLigerLabel scale={scale} checked={checked} htmlFor={props.id || "xliger-toggle"}>
      <div className="xligers">
        <div className="xliger" />
        <div className="xliger" />
        <div className="xliger" />
        <div className="butter" />
      </div>
    </XLigerLabel>
  </XLigerStack>
);

export default XLigerToggle;
