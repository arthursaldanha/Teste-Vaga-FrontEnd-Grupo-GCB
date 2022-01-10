import { ReactNode } from "react";

import "./styles.scss";

interface FlexContainer {
  children: ReactNode;
  justify: string;
  align: string;
}

export const Column = ({
  children,
  justify = "flex-start",
  align = "normal",
}: FlexContainer) => {
  return (
    <div
      className="wrapper-column"
      style={{ justifyContent: justify, alignItems: align }}
    >
      {children}
    </div>
  );
};

export const Row = ({
  children,
  justify = "flex-start",
  align = "normal",
}: FlexContainer) => {
  return (
    <div
      className="wrapper-row"
      style={{ justifyContent: justify, alignItems: align }}
    >
      {children}
    </div>
  );
};
