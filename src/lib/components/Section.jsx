import { Box } from '@mui/material';

export default function Section({ sectionRef, children }) {
  return (
    <Box
      display="flex"
      minHeight="100vh"
      flexDirection="column"
      alignItems="center"
      ref={sectionRef}
      py={3}
    >
      {children}
    </Box>
  );
}
