import React from 'react';

import { StyledBurger } from './styles';

import { ToggleOpenModalProps } from '../index';

const Burger: React.FC<ToggleOpenModalProps> = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen && setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger;
