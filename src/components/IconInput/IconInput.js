import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';


const InputContainer = styled.div`
  position: relative;
    display: block;
  color: ${COLORS.gray700};

   &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper =styled.div`
  position: absolute;
  height: var(--size);

  // center vertically
  top: 0;
  bottom: 0;
  margin: auto 0;
  
`;

const Input = styled.input`
  width: var(--width); 
  height: var(--height);
  border-style: none;
  padding-left: var(--height);
  padding-top: var(--padding-top);

  border-bottom: var(--border-width) solid ${COLORS.black};

  font-size: var(--font-size);
  font-weight: 700;
  color: inherit;

  outline-offset: 2px;
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 500;
  }
`;

const SIZES = {
  small: {
    "--height": `${24 / 16}rem`, // height is responsive to font size of input
    "--padding-top": `${4 / 16}rem`,
    "--font-size":  `${14 / 16}rem`,
    "--border-width": "1px",
    "--icon-size": "16",
  },
  large: {
    "--height": `${36 / 16}rem`,
    "--padding-top": `${8 / 16}rem`,
    "--font-size": "18px",
    "--border-width": "2px",
    "--icon-size": "24",
  },
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = SIZES[size];

  return (
    // wrapping the input in a label allows clicking anywhere on the label to focus the input
    // Including the icon
  <label>
    <VisuallyHidden>
      {label}
    </VisuallyHidden>

    <InputContainer>
    <IconWrapper style={{ '--size': styles['--icon-size'] + 'px' }}>
      <Icon id={icon} size={styles["--icon-size"]} />
      </IconWrapper>
      <Input id="icon-input" name="icon-input" type="text" placeholder={placeholder} style={{...styles, '--width': width + 'px'}} /> 
    </InputContainer>
  </label>
  );
};

export default IconInput;
