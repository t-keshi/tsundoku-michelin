import * as React from "react";
import { useEventCallback } from "../../../hooks/useEventCallback";
import { useForkRef } from "../../../hooks/useForkRef";

function ownerDocument(node: Node | null | undefined): Document {
  return (node && node.ownerDocument) || document;
}

function mapEventPropToEvent(
  eventProp: ClickAwayMouseEventHandler | ClickAwayTouchEventHandler
):
  | "click"
  | "mousedown"
  | "mouseup"
  | "touchstart"
  | "touchend"
  | "pointerdown"
  | "pointerup" {
  return eventProp.substring(2).toLowerCase() as any;
}

function clickedRootScrollbar(event: MouseEvent, doc: Document) {
  return (
    doc.documentElement.clientWidth < event.clientX ||
    doc.documentElement.clientHeight < event.clientY
  );
}

type ClickAwayMouseEventHandler =
  | "onClick"
  | "onMouseDown"
  | "onMouseUp"
  | "onPointerDown"
  | "onPointerUp";
type ClickAwayTouchEventHandler = "onTouchStart" | "onTouchEnd";

export interface ClickAwayListenerProps {
  children: React.ReactElement;
  disableReactTree?: boolean;
  mouseEvent?: ClickAwayMouseEventHandler | false;
  onClickAway: (event: MouseEvent | TouchEvent) => void;
  touchEvent?: ClickAwayTouchEventHandler | false;
}

export function ClickAwayListener(props: ClickAwayListenerProps): JSX.Element {
  const {
    children,
    disableReactTree = false,
    mouseEvent = "onClick",
    onClickAway,
    touchEvent = "onTouchEnd",
  } = props;
  const movedRef = React.useRef(false);
  const nodeRef = React.useRef<Element>(null);
  const activatedRef = React.useRef(false);
  const syntheticEventRef = React.useRef(false);

  React.useEffect(() => {
    // Ensure that this component is not "activated" synchronously.
    // https://github.com/facebook/react/issues/20074
    setTimeout(() => {
      activatedRef.current = true;
    }, 0);
    return () => {
      activatedRef.current = false;
    };
  }, []);

  const handleRef = useForkRef(
    // @ts-expect-error TODO upstream fix
    children.ref,
    nodeRef
  );

  // The handler doesn't take event.defaultPrevented into account:
  //
  // event.preventDefault() is meant to stop default behaviors like
  // clicking a checkbox to check it, hitting a button to submit a form,
  // and hitting left arrow to move the cursor in a text input etc.
  // Only special HTML elements have these default behaviors.
  const handleClickAway = useEventCallback((event: MouseEvent | TouchEvent) => {
    const insideReactTree = syntheticEventRef.current;
    syntheticEventRef.current = false;

    const doc = ownerDocument(nodeRef.current);

    if (
      !activatedRef.current ||
      !nodeRef.current ||
      ("clientX" in event && clickedRootScrollbar(event, doc))
    ) {
      return;
    }

    if (movedRef.current) {
      movedRef.current = false;
      return;
    }

    let insideDOM;

    if (event.composedPath) {
      insideDOM = event.composedPath().indexOf(nodeRef.current) > -1;
    } else {
      insideDOM =
        !doc.documentElement.contains(event.target as Node | null) ||
        nodeRef.current.contains(event.target as Node | null);
    }
  });

  const createHandleSynthetic =
    (handlerName: string) => (event: React.SyntheticEvent) => {
      syntheticEventRef.current = true;

      const childrenPropsHandler = children.props[handlerName];
      if (childrenPropsHandler) {
        childrenPropsHandler(event);
      }
    };

  const childrenProps: { ref: React.Ref<Element> } & Pick<
    React.DOMAttributes<Element>,
    ClickAwayMouseEventHandler | ClickAwayTouchEventHandler
  > = { ref: handleRef };

  if (touchEvent !== false) {
    childrenProps[touchEvent] = createHandleSynthetic(touchEvent);
  }

  React.useEffect(() => {
    if (touchEvent !== false) {
      const mappedTouchEvent = mapEventPropToEvent(touchEvent);
      const doc = ownerDocument(nodeRef.current);

      const handleTouchMove = () => {
        movedRef.current = true;
      };

      doc.addEventListener(mappedTouchEvent, handleClickAway);
      doc.addEventListener("touchmove", handleTouchMove);

      return () => {
        doc.removeEventListener(mappedTouchEvent, handleClickAway);
        doc.removeEventListener("touchmove", handleTouchMove);
      };
    }

    return undefined;
  }, [handleClickAway, touchEvent]);

  if (mouseEvent !== false) {
    childrenProps[mouseEvent] = createHandleSynthetic(mouseEvent);
  }

  React.useEffect(() => {
    if (mouseEvent !== false) {
      const mappedMouseEvent = mapEventPropToEvent(mouseEvent);
      const doc = ownerDocument(nodeRef.current);

      doc.addEventListener(mappedMouseEvent, handleClickAway);

      return () => {
        doc.removeEventListener(mappedMouseEvent, handleClickAway);
      };
    }

    return undefined;
  }, [handleClickAway, mouseEvent]);

  return (
    <React.Fragment>
      {React.cloneElement(children, childrenProps)}
    </React.Fragment>
  );
}
