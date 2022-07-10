import { Box } from "../ui/Box/Box";
import { Container } from "../ui/Container/Container";
import { LayoutHeader } from "./LayoutHeader";

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Box sx={{ bgColor: "primary-light", minHeight: "100vh" }}>
      <LayoutHeader />
      <Container as="main" maxWidth="tablet" sx={{ p: 2, pt: 7 }}>
        {children}
      </Container>
    </Box>
  );
};
