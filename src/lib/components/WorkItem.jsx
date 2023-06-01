import { Box, Button, Stack, Typography } from '@mui/material';
import Image from 'next/image';

export default function WorkItem({
  index,
  title,
  description,
  imgSrc,
  appLink,
  srcLink,
}) {
  console.log('he');
  return (
    <Box
      display="flex"
      alignItems="center"
      my={5}
      flexDirection={index % 2 === 0 ? 'row' : 'row-reverse'}
    >
      <Image
        src={imgSrc}
        alt="portfolio work screenshot"
        width="400"
        height="200"
      />
      <Box display="flex" flexDirection="column" pl={2}>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="p">{description}</Typography>
        <Stack direction="row" spacing={2} mt={2}>
          {appLink && (
            <Button variant="outlined" m={1} href={appLink} target="_blank">
              Live App
            </Button>
          )}
          {/* TODO: Allow for a popup with FE/BE links */}
          <Button variant="outlined" m={1} href={srcLink} target="_blank">
            Learn More
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
