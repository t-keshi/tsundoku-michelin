import { cloneElement, forwardRef } from "react";
import { Transition, TransitionStatus } from "react-transition-group";
import { TransitionProps } from "react-transition-group/Transition";

type GrowProps = {
  children: React.ReactElement;
  inProp?: boolean;
  timeout?:
    | {
        enter: number;
        exit: number;
      }
    | number;
  style?: TransitionProps["style"];
};

const defaultTimeout = 300;

const getScale = (value: number) => {
  return `scale(${value}, ${value ** 2})`;
};

const styles = {
  entering: {
    opacity: 1,
    transform: getScale(1),
  },
  entered: {
    opacity: 1,
    transform: "none",
  },
};

export const Grow: React.FC<GrowProps> = (props) => {
  const {
    children,
    inProp = false,
    timeout = defaultTimeout,
    style,
    ...rest
  } = props;

  return (
    <Transition
      appear
      in={inProp}
      timeout={timeout}
      role="presentation"
      {...rest}
    >
      {(status: TransitionStatus) => {
        return cloneElement(children, {
          style: {
            opacity: 0,
            transform: getScale(0.75),
            ...((status === "exited" || !inProp) && {
              display: "none",
            }),
            ...((status === "entering" || status === "entered") && {
              ...styles[status],
            }),
            ...style,
            ...children.props.style,
          },
        });
      }}
    </Transition>
  );
};
