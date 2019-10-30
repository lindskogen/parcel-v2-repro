import * as React from "react";

export interface Props {
  text: string;
}

export const Header: React.FC<Props> = () => <h1>Header</h1>;
