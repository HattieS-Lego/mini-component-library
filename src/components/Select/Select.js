import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const ChevronDown = styled(Icon).attrs({
  id: 'chevron-down',
  size: 24,
  strokeWidth: 2,
})`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;

  /**
   * Because both NativeSelect and ChevronDown are in the same Wrapper with position absolute, 
   * the icon overlays the select element in the DOM order, blocking pointer events.
   * By setting pointer-events: none on the icon, we ensure that mouse events pass through it to the underlying select element.
   */
  pointer-events: none;
`;

const Wrapper = styled.div`
  position: relative;
  width: max-content;
    
`;

const NativeSelect = styled.select`
  // Make sure select fills the whole of the container
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  // Hide the native select from the UI
  opacity: 0;
  appearance: none;
`;

const Presentation = styled.div`
  background-color: ${COLORS.transparentGray15};
  padding: 12px 16px;
  padding-right: 52px;
  border-radius: 8px;
  font-size: 1rem;


  color: ${COLORS.gray700};

  // Sibling selector to style when NativeSelect is focused or hovered
  ${NativeSelect}:focus + & {  
    // Fallback in case webkit outline styles are not supported
    outline: 1px dotted black;
    // Use browser default focus ring
    outline: 2px auto -webkit-focus-ring-color;
  }

  // Adjacent sibling selector for hover state
   ${NativeSelect}:hover + & {
     color: ${COLORS.black};
   }    
`;



const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  
  return (
    <Wrapper label={`"${displayedValue}"`}>
      <NativeSelect id="select" value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      
      <Presentation>
        {displayedValue}
        <ChevronDown />
      </Presentation>
    </Wrapper>
    
  );
};

export default Select;
