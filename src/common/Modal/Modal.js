import { useEffect } from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');

const Modal = (props) => {
    const el = document.createElement('div');

    useEffect(() => {
        modalRoot.appendChild(el);
        return () => {
            modalRoot.removeChild(el);
          };
    }, [el])

    return ReactDOM.createPortal(
        props.children,
        el
    );
}

export default Modal;