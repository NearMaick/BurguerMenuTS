import React, { AnchorHTMLAttributes } from 'react';

import { StyledBurger } from './styles';

export type ToggleOpenModalProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  open?: boolean;
  setOpen?: (open: true | false) => void;
}

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
