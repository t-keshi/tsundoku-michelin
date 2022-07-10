import { render, RenderOptions, RenderResult } from "@testing-library/react";
import { AuthModalProvider } from "./containers/authModal";
import { Layout } from "./components/layout/Layout";
import { AuthModal } from "./components/ui-group/AuthModal";
import "@vanilla-extract/css/disableRuntimeStyles";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { SnackbarProvider } from "./containers/snackbar";
import { Snackbar } from "./components/ui/Snackbar/Snackbar";

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <SnackbarProvider>
    <AuthModalProvider>
      <Layout>{children}</Layout>
      <Snackbar />
      <AuthModal />
    </AuthModalProvider>
  </SnackbarProvider>
);

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">
): RenderResult => render(ui, { wrapper: Wrapper, ...options });

export * from "@testing-library/react";
export { customRender as render };
