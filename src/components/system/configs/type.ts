export type Flex =
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'normal'
  | 'baseline'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export type Size =
  | 100
  | 150
  | 200
  | 250
  | 300
  | 350
  | 400
  | 450
  | 500
  | '100%'
  | 'auto'
  | 'fit-content'
  | 'max-content'
  | 'min-content';

export type SpaceVariants = 0.5 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 'auto';

export type DisplayVariants = 'none' | 'flex' | 'inine-flex' | 'block' | 'inline-block' | 'inline';

export type ColorVariants =
  | 'primary-light'
  | 'primary-main'
  | 'primary-dark'
  | 'primary-contrastText'
  | 'secondary-light'
  | 'secondary-main'
  | 'secondary-dark'
  | 'secondary-contrastText'
  | 'text-primary'
  | 'text-secondary';

export type TypographyVariants =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'button'
  | 'caption'
  | 'overline';

export type BreakPoint<T extends Record<string, unknown>> = {
  [P in keyof T]:
    | T[keyof T]
    | {
        mobile: T[keyof T];
        tablet: T[keyof T];
        desktop: T[keyof T];
      };
};

export type SystemProps = BreakPoint<{
  display: DisplayVariants;
  width: Size | '100vw';
  maxWidth: Size | '100vw';
  minWidth: Size | '100vw';
  height: Size | '100vh';
  maxHeight: Size | '100vh';
  minHeight: Size | '100vh';
  p: SpaceVariants;
  pt: SpaceVariants;
  pr: SpaceVariants;
  pb: SpaceVariants;
  pl: SpaceVariants;
  px: SpaceVariants;
  py: SpaceVariants;
  m: SpaceVariants;
  mt: SpaceVariants;
  mr: SpaceVariants;
  mb: SpaceVariants;
  ml: SpaceVariants;
  mx: SpaceVariants;
  my: SpaceVariants;
  flexDirection: 'row' | 'column';
  justifyContent: Flex;
  justifyItems: Flex;
  justifySelf: Flex;
  alignContent: Flex;
  alignItems: Flex;
  alignSelf: Flex;
  flexGrow: 0 | 1;
  flexShrink: 0 | 1;
  flexWrap: 'wrap';
  gap: SpaceVariants;
  rowGap: SpaceVariants;
  columnGap: SpaceVariants;
  color: ColorVariants;
  bgColor: ColorVariants | 'default';
  position: 'relative' | 'absolute' | 'fixed';
  top: SpaceVariants;
  right: SpaceVariants;
  bottom: SpaceVariants;
  left: SpaceVariants;
  borderRadius: '100%';
  border: 1;
  borderTop: 1;
  borderRight: 1;
  borderBottom: 1;
  borderLeft: 1;
  borderColor: ColorVariants;
  textDecoration: ColorVariants;
  textAlign: 'right' | 'left' | 'center';
  fontWeight: 'bold' | 'bolder';
  fontSize: TypographyVariants;
  lineHeight: TypographyVariants;
  letterSpacing: TypographyVariants;
  cursor: 'pointer' | 'default';
  overflowX: 'scroll' | 'hidden';
  overflowY: 'scroll' | 'hidden';
  overflow: 'scroll' | 'hidden';
  gridGap: SpaceVariants;
  gridColumnGap: SpaceVariants;
  gridRowGap: SpaceVariants;
  gridColumn: 1 | 2 | 3 | 4 | 5;
  gridRow: 1 | 2 | 3 | 4 | 5;
  gridAutoFlow: 'row' | 'column' | 'dense' | 'row dense' | 'column dense';
  gridAutoColumns: 'min-content' | 'max-content' | 'auto';
  gridAutoRows: 'min-content' | 'max-content' | 'auto';
  gridTemplateColumns: 1 | 2 | 3 | 4 | 5;
  gridTemplateRows: 1 | 2 | 3 | 4 | 5;
  boxShadow: 0 | 1 | 2 | 3 | 'neumorphism';
  listStyle: 'none' | 'inside';
  wordBreak: 'break-all';
  wordWrap: 'break-word';
  whiteSpace: 'pre-wrap';
  visibility: 'hidden';
}>;
