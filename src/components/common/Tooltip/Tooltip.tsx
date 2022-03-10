import React, { ReactNode, useState } from "react";
import "./Tooltip.css";

type TProps = {
  content: string;
  children: ReactNode
}

export const Tooltip = ({content, children}: TProps) => {
  let timeout: ReturnType<typeof setTimeout>;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, 300);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {children}
      {active && <div className="tooltip right">{content}</div>}
    </div>
  );
};
