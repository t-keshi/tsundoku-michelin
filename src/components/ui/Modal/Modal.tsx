import clsx from "clsx";
import { forwardRef } from "react";
import { configs } from "../../system/configs/index.css";
import { SystemProps } from "../../system/configs/type";
import { Fade } from "../Fade/Fade";
import { modal, modalBackdrop } from "./modal.css";

type ModalProps = {
  children?: React.ReactNode;
  className?: string;
  invisible?: boolean;
  isOpen?: boolean;
  onClose: () => void;
} & { sx?: Partial<SystemProps> } & Omit<JSX.IntrinsicElements["div"], "ref">;

const modalClasses = {
  root: "Vanilla-Modal-root",
  backdrop: "Vanilla-Modal-backdrop",
};

export const Modal = forwardRef<HTMLDivElement, ModalProps>((props, ref) => {
  const {
    className,
    sx,
    children,
    invisible = false,
    isOpen = false,
    onClose,
    ...rest
  } = props;

  return (
    <Fade inProp={isOpen}>
      <div
        ref={ref}
        className={clsx(
          modalClasses.root,
          sx && configs(sx as object),
          modal(),
          className
        )}
        role="button"
        tabIndex={0}
        onKeyDown={onClose}
        onClick={onClose}
        {...rest}
      >
        <div
          className={clsx(
            modalClasses.backdrop,
            modalBackdrop({ invisible }),
            className
          )}
        />
        <div />
        {children}
      </div>
    </Fade>
  );
});
