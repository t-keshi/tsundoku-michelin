import { Box } from '../ui/Box/Box';
import { Container } from '../ui/Container/Container';
import { LayoutHeader } from './LayoutHeader';

type Props = {
  children: React.ReactNode;
  disablePadding?: boolean;
};

export const Layout: React.FC<Props> = ({ children, disablePadding = false }) => (
  <Box sx={{ bgColor: 'default', minHeight: '100vh' }}>
    <LayoutHeader />
    <Container as="main" maxWidth="tablet" sx={{ p: 2, py: disablePadding ? 0 : 7 }}>
      {children}
    </Container>
  </Box>
);
