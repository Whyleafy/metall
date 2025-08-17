import React, { ReactNode } from 'react';
import styles from "./Modal.module.scss"
import { cn } from '@/lib/utils';

interface Props {
  isActive: boolean;
  setActive: (value: boolean) => void;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}

export const Modal: React.FC<Props> = ({ isActive, setActive, children, className, contentClassName }) => {
  return (
      <div className={cn(styles.modal,
          {[styles.active]: isActive},
          className
      )}
           onClick={() => setActive(false)}>
        <div className={cn(styles.modal__content, contentClassName)} onClick={e => e.stopPropagation()}>
          {children}
        </div>
      </div>
  );
};

export default Modal;