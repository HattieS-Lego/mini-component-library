/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const Progress = styled.progress`
  appearance: none;
  width: 370px;

  ::-webkit-progress-inner-element {
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    height: var(--height);
    border-radius: var(--border-radius);
}

  &::-webkit-progress-bar {
    background-color: ${COLORS.transparentGray15};
    padding: var(--padding);
    border-radius: inherit;
  }

  &::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-top-left-radius: var(--border-radius);
    border-bottom-left-radius: var(--border-radius);

    ${(props) =>
      props.value === 100 &&
      `
      border-radius: var(--border-radius);
    `}
  }
`;

const SIZES = {
  small: {
    "--height": "8px",
    "---padding": "0",
    "--border-radius": "4px",
  },
  medium: {
    "--height": "12px",
    "---padding": "0",
    "--border-radius": "4px",
  },
  large: {
    "--height": "24px",
    "--padding": "4px",
    "--border-radius": "8px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  return (
    <>
      <VisuallyHidden>
        <label for="progress-bar"> Progress: </label>
      </VisuallyHidden>
      <Progress style={styles} id="progress-bar" max={100} value={value}>
        {value}
      </Progress>
    </>
  );
};

export default ProgressBar;
