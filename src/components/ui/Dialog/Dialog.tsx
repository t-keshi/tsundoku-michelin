import clsx from "clsx";
import { forwardRef, useRef } from "react";
import { configs } from "../../system/configs/index.css";
import { SystemProps } from "../../system/configs/type";
import { Fade } from "../Fade/Fade";
import { Modal } from "../Modal/Modal";
import { dialogContainer, dialogPaper } from "./dialog.css";

type DialogProps = {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  maxWidth?: "sm" | "md" | "lg" | "xl";
  disablePadding?: boolean;
} & { sx?: Partial<SystemProps> } & Omit<JSX.IntrinsicElements["div"], "ref">;

const dialogClasses = {
  root: "Vanilla-Dialog-root",
  container: "Vanilla-Dialog-container",
  paper: "Vanilla-Dialog-paper",
};

export const Dialog = forwardRef<HTMLDivElement, DialogProps>((props, ref) => {
  const {
    className,
    sx,
    children,
    isOpen,
    onClose,
    maxWidth = "sm",
    disablePadding = false,
    ...rest
  } = props;

  const backdropClick = useRef<boolean>();
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    backdropClick.current = e.target === e.currentTarget;
  };
  const handleBackdropClick = () => {
    if (!backdropClick.current) {
      return;
    }

    backdropClick.current = undefined;
    onClose();
  };

  return (
    <Modal
      ref={ref}
      className={clsx(
        dialogClasses.root,
        sx && configs(sx as object),
        className
      )}
      isOpen={isOpen}
      onClose={handleBackdropClick}
      {...rest}
    >
      <Fade inProp={isOpen} style={{ height: "100%" }}>
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/no-static-element-interactions, react/jsx-no-comment-textnodes */}
        <div
          className={clsx(dialogClasses.container, dialogContainer())}
          onMouseDown={handleMouseDown}
        >
          <div
            className={clsx(
              dialogClasses.paper,
              dialogPaper({ maxWidth, disablePadding })
            )}
            role="dialog"
          >
            {children}
          </div>
        </div>
      </Fade>
    </Modal>
  );
});
