import React, { FunctionComponent, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal: FunctionComponent = ({ children }) => {
  // create a single reference of the passed object
  const elRef = useRef(document.createElement('div'));

  useEffect(() => {
    const modalRoot = document.getElementById('modal');

    if (!modalRoot) {
      return;

    }
    modalRoot.appendChild(elRef.current);

    // this is the cleanup function
    // this is run when the component is unmount
    return () => {
      modalRoot.removeChild(elRef.current)
    };
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
