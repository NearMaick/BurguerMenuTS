import React from 'react';

import { ToggleOpenModalProps } from '../index';
import { StyledMenu } from './styles';

const Menu: React.FC<ToggleOpenModalProps> = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        <span role="img" aria-label="about us">💁🏻‍♂️</span>
        About us
      </a>
      <a href="/">
        <span role="img" aria-label="price">💸</span>
        Pricing
        </a>
      <a href="/">
        <span role="img" aria-label="contact">📩</span>
        Contact
        </a>
    </StyledMenu>
  )
}

export default Menu;
