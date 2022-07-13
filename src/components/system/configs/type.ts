type Flex =
  | "start"
  | "end"
  | "flex-start"
  | "flex-end"
  | "center"
  | "normal"
  | "baseline"
  | "space-between"
  | "space-around"
  | "space-evenly";

type Size = 100 | 200 | 300 | 400 | 500 | "100%" | "auto";

type Space = 0.5 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | "auto";

type Display =
  | "none"
  | "flex"
  | "inine-flex"
  | "block"
  | "inline-block"
  | "inline";

type Color =
  | "primary-light"
  | "primary-main"
  | "primary-dark"
  | "primary-contrastText"
  | "secondary-light"
  | "secondary-main"
  | "secondary-dark"
  | "secondary-contrastText"
  | "text-primary"
  | "text-secondary";

type Typography =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "button"
  | "caption"
  | "overline";

type BreakPoint<T extends Record<string, any>> = {
  [P in keyof T]:
    | T[keyof T]
    | {
        mobile: T[keyof T];
        tablet: T[keyof T];
        desktop: T[keyof T];
      };
};

export type SystemProps = BreakPoint<{
  display: Display;
  width: Size | "100vw";
  maxWidth: Size | "100vw";
  minWidth: Size | "100vw";
  height: Size | "100vh";
  maxHeight: Size | "100vh";
  minHeight: Size | "100vh";
  p: Space;
  pt: Space;
  pr: Space;
  pb: Space;
  pl: Space;
  px: Space;
  py: Space;
  m: Space;
  mt: Space;
  mr: Space;
  mb: Space;
  ml: Space;
  mx: Space;
  my: Space;
  flexDirection: "row" | "column";
  justifyContent: Flex;
  justifyItems: Flex;
  justifySelf: Flex;
  alignContent: Flex;
  alignItems: Flex;
  alignSelf: Flex;
  flexGrow: 0 | 1;
  flexShrink: 0 | 1;
  flexWrap: true;
  gap: Space;
  rowGap: Space;
  columnGap: Space;
  color: Color;
  bgColor: Color;
  position: "relative" | "absolute" | "fixed";
  top: Space;
  right: Space;
  bottom: Space;
  left: Space;
  borderRadius: "100%";
  border: 1;
  borderTop: 1;
  borderRight: 1;
  borderBottom: 1;
  borderLeft: 1;
  borderColor: Color;
  textDecoration: Color;
  textAlign: "right" | "left" | "center";
  fontWeight: "bold" | "bolder";
  fontSize: Typography;
  lineHeight: Typography;
  letterSpacing: Typography;
  cursor: "pointer" | "default";
  overflowX: "scroll" | "hidden";
  overflowY: "scroll" | "hidden";
  overflow: "scroll" | "hidden";
  gridGap: Space;
  gridColumnGap: Space;
  gridRowGap: Space;
  gridColumn: 1 | 2 | 3 | 4 | 5;
  gridRow: 1 | 2 | 3 | 4 | 5;
  gridAutoFlow: "row" | "column" | "dense" | "row dense" | "column dense";
  gridAutoColumns: "min-content" | "max-content" | "auto";
  gridAutoRows: "min-content" | "max-content" | "auto";
  gridTemplateColumns: 1 | 2 | 3 | 4 | 5;
  gridTemplateRows: 1 | 2 | 3 | 4 | 5;
  boxShadow: 0 | 1 | 2 | 3 | "neumorphism";
}>;
