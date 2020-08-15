import React, { AnchorHTMLAttributes } from 'react';
import styled from 'styled-components';

import Burguer from './components/Burguer';

type ToggleOpenModalProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  open?: boolean;
  setOpen?: (open: true | false) => void;
}

const StyledMenu = styled.nav<ToggleOpenModalProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #EFFFFA;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
      width: 100%;
    }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`

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





const App : React.FC<ToggleOpenModalProps> = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const useOnClickOutside =  React.useCallback(( ref, handler ) => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, []);

  const node = React.useRef(null);
  useOnClickOutside(node, () => setIsOpen(false));
  
  return (
    <div>
      <div>
        <h1>Hello. This is burger menu tutorial</h1>
        <img src="https://image.flaticon.com/icons/svg/2016/2016012.svg" alt="burger icon" />
        <small>Icon made by <a href="https://www.freepik.com/home">Freepik</a> from <a href="https://www.flaticon.com">www.flaticon.com</a></small>
       </div>
      <div ref={node}>
        <Burguer open={isOpen} setOpen={setIsOpen} />
        <Menu open={isOpen} setOpen={setIsOpen} />
      </div>
    </div>
  )  
}

export default App;
