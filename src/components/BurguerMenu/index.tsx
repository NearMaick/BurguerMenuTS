import React, { AnchorHTMLAttributes, useCallback, useRef, useState } from 'react';

import Burguer from './Burguer';
import Menu from './Menu';

export type ToggleOpenModalProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  open?: boolean;
  setOpen?: (open: true | false) => void;
}

const MenuBurguer : React.FC<ToggleOpenModalProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const useOnClickOutside =  useCallback(( ref, handler ) => {
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

  const node = useRef(null);
  useOnClickOutside(node, () => setIsOpen(false));
  
  return (         
      <div ref={node}>
        <Burguer open={isOpen} setOpen={setIsOpen} />
        <Menu open={isOpen} setOpen={setIsOpen} />
      </div>    
  )  
}

export default MenuBurguer;
