import { useRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';

import Button from './Button';

const Modal = ({children, ref, buttonCaption = 'Close'}) => {
  const dialog = useRef();

  useImperativeHandle((ref), () => {
    return {
      open() {
        dialog.current.showModal();
      }
    }
  })

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  );
}

export default Modal;