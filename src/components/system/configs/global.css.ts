import { globalStyle } from "@vanilla-extract/css";

globalStyle("html", {
  lineHeight: 1.5,
  textRendering: "optimizeLegibility",
  touchAction: "manipulation",
  margin: 0,
  padding: 0,
});

globalStyle("body", {
  position: "relative",
  minHeight: "100%",
  fontFeatureSettings: "'palt'",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Helvetica Neue"',
    '"Segoe UI"',
    '"Hiragino Kaku Gothic ProN"',
    '"Hiragino Sans"',
    '"Segoe UI"',
    "Meiryo",
    "sans-serif",
  ].join(","),
  margin: 0,
  padding: 0,
});

globalStyle("*, *::before, *::after", {
  borderWidth: 0,
  borderStyle: "solid",
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

globalStyle("main", {
  display: "block",
});

globalStyle("hr", {
  borderTopWidth: 1,
  boxSizing: "content-box",
  height: 0,
  overflow: "visible",
});

globalStyle("pre, code, kbd, samp", {
  fontFamily: "SFMono-Regular, Menlo, Monaco, Consolas, monospace",
  fontSize: "1em",
});

globalStyle("a", {
  backgroundColor: "transparent",
  color: "inherit",
  textDecoration: "inherit",
});

globalStyle("abbr[title]", {
  borderBottom: "none",
  textDecoration: "underline dotted",
});

globalStyle("b, strong", {
  fontWeight: "bold",
});

globalStyle("small", {
  fontSize: "80%",
});

globalStyle("sub, sup", {
  fontSize: "75%",
  lineHeight: 0,
  position: "relative",
  verticalAlign: "baseline",
});

globalStyle("sub", {
  bottom: "-0.25em",
});

globalStyle("sup", {
  top: "-0.5em",
});

globalStyle("img", {
  borderStyle: "none",
});

globalStyle("button, input, optgroup, select, textarea", {
  fontFamily: "inherit",
  fontSize: "100%",
  lineHeight: 1.15,
  margin: 0,
});
