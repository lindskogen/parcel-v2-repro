import * as React from "react";
import { faCircle as farCircle } from "@fortawesome/free-regular-svg-icons/faCircle";
import { faCircle as fasCircle } from "@fortawesome/free-solid-svg-icons/faCircle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface Props {
  text: string;
}

export const Header: React.FC<Props> = () => (
  <h1>
    <FontAwesomeIcon icon={farCircle} />
    <FontAwesomeIcon icon={fasCircle} />
  </h1>
);
