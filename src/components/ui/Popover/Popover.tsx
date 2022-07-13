import clsx from "clsx";
import { forwardRef, useEffect, useState } from "react";
import { configs } from "../../system/configs/index.css";
import { SystemProps } from "../../system/configs/type";
import { Fade } from "../Fade/Fade";
import { Modal } from "../Modal/Modal";
import { popoverPaper } from "./popover.css";

type PopoverProps = {
  children?: React.ReactNode;
  className?: string;
  elevation?: 0 | 1 | 2 | 3;
  offsetMargin?: { top: number; right: number };
  anchorEl?: HTMLElement;
  onClose: () => void;
} & { sx?: Partial<SystemProps> } & Omit<JSX.IntrinsicElements["div"], "ref">;

const popOverClasses = {
  root: "Vanilla-Popover-root",
  paper: "Vanilla-Popover-paper",
};

const defaultTimeout = 225;

const ownerDocument = (node: Node | null | undefined): Document => {
  return (node && node.ownerDocument) || document;
};

const ownerWindow = (node: Node | undefined): Window => {
  const doc = ownerDocument(node);
  return doc.defaultView || window;
};

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  (props, ref) => {
    const {
      className,
      sx,
      children,
      offsetMargin = { top: 0, right: 0 },
      elevation = 1,
      anchorEl,
      onClose,
      ...rest
    } = props;
    const anchorRect = anchorEl?.getBoundingClientRect();
    const containerWindow = ownerWindow(anchorEl);
    const widthThreshold = containerWindow.innerWidth;
    const [offsetState, setOffsetState] = useState({ top: 0, right: 0 });
    const offset = {
      top:
        (anchorRect?.top ?? 0) + (anchorRect?.height ?? 0) + offsetMargin.top,
      right:
        widthThreshold -
        (anchorRect?.left ?? 0) -
        (anchorRect?.height ?? 0) +
        offsetMargin.right,
    };
    useEffect(() => {
      if (anchorEl) {
        setOffsetState(offset);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [anchorEl]);

    return (
      <Modal
        ref={ref}
        className={clsx(
          popOverClasses.root,
          sx && configs(sx as object),
          className
        )}
        isOpen={!!anchorEl}
        onClose={onClose}
        invisible
        {...rest}
      >
        <Fade inProp={!!anchorEl} timeout={defaultTimeout} style={offsetState}>
          <div
            className={clsx(
              popOverClasses.paper,
              sx && configs(sx as object),
              popoverPaper({ elevation })
            )}
          >
            {children}
          </div>
        </Fade>
      </Modal>
    );
  }
);
