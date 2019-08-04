/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import './style.styl';

const Modal = ({ children, isOpen, onClose }) => (
  <CSSTransition in={isOpen} unmountOnExit timeout={400} classNames="modal-transition">
    <div className="modal" onClick={onClose}>
      <div className="modal__content" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  </CSSTransition>
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
