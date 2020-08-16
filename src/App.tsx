import React, { AnchorHTMLAttributes } from 'react';

import Burguer from './components/Burguer';
import Menu from './components/Menu';

type ToggleOpenModalProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  open?: boolean;
  setOpen?: (open: true | false) => void;
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
