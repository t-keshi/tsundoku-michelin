import clsx from "clsx";
import React, { useEffect, useRef } from "react";
import { forwardRef } from "react";
import { MdErrorOutline, MdTaskAlt } from "react-icons/md";
import { useSnackbar } from "../../../containers/contexts/snackbar";
import { useEventCallback } from "../../../helpers/hooks/useEventCallback";
import { configs } from "../../system/configs/index.css";
import { SystemProps } from "../../system/configs/type";
import { Fade } from "../Fade/Fade";
import {
  snackbar,
  snackbarButton,
  snackbarContent,
  snackbarIcon,
} from "./snackbar.css";

type SnackbarProps = {
  className?: string;
} & { sx?: Partial<SystemProps> } & JSX.IntrinsicElements["div"];

const snackbarClasses = {
  root: "Vanilla-Snackbar-root",
  content: "Vanilla-Snackbar-content",
  icon: "Vanilla-Snackbar-icon",
};

const defaultAnimationTimeout = 195;
const defaultAutoHideTimeout = 2000;

export const Snackbar = forwardRef<HTMLDivElement, SnackbarProps>(
  (props, ref) => {
    const { className, sx, children, ...rest } = props;
    const { isOpen, message, status, onClose } = useSnackbar();
    const timerAutoHide = useRef<ReturnType<typeof setTimeout>>();

    useEffect(() => {
      if (!isOpen) {
        return;
      }

      const handleKeyDown = (nativeEvent: KeyboardEvent) => {
        if (!nativeEvent.defaultPrevented) {
          if (nativeEvent.key === "Escape" || nativeEvent.key === "Esc") {
            onClose();
          }
        }
      };

      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [isOpen, onClose]);

    const setAutoHideTimer = useEventCallback((autoHideDurationParam) => {
      if (!onClose || autoHideDurationParam == null) {
        return;
      }

      clearTimeout(timerAutoHide.current);
      timerAutoHide.current = setTimeout(() => {
        onClose();
      }, autoHideDurationParam);
    });

    useEffect(() => {
      if (isOpen) {
        setAutoHideTimer(defaultAutoHideTimeout);
      }

      return () => {
        clearTimeout(timerAutoHide.current);
      };
    }, [setAutoHideTimer, isOpen]);

    if (!isOpen) {
      return null;
    }

    return (
      <button className={snackbarButton()} onClick={onClose}>
        <div
          ref={ref}
          className={clsx(
            snackbarClasses.root,
            sx && configs(sx as object),
            snackbar(),
            className
          )}
          role="presentation"
          {...rest}
        >
          <Fade inProp={isOpen} timeout={defaultAnimationTimeout}>
            <div className={clsx(snackbarClasses.content, snackbarContent())}>
              {status === "success" && (
                <MdTaskAlt
                  className={clsx(
                    snackbarClasses.icon,
                    snackbarIcon({ status })
                  )}
                />
              )}
              {status === "error" && (
                <MdErrorOutline
                  className={clsx(
                    snackbarClasses.icon,
                    snackbarIcon({ status })
                  )}
                />
              )}
              {message}
            </div>
          </Fade>
        </div>
      </button>
    );
  }
);
