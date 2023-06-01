import { Box } from '@mui/material';
import parser from 'ua-parser-js';

export default function Section({ sectionRef, children }) {
  const ua = parser();
  const isMobile = ua.device.type === 'mobile';

  return (
    <Box
      display="flex"
      minHeight="100vh"
      flexDirection="column"
      alignItems="center"
      ref={sectionRef}
      py={isMobile ? 3 : 0}
    >
      {children}
    </Box>
  );
}
