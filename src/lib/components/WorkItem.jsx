import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';

export default function WorkItem({
  index,
  title,
  description,
  imgSrc,
  appLink,
  srcLink,
}) {
  return (
    <Grid
      container
      my={5}
      spacing={2}
      direction={index % 2 === 0 ? 'row' : 'row-reverse'}
    >
      <Grid item xs={12} md={6}>
        <Image
          src={imgSrc}
          alt="portfolio work screenshot"
          width="400"
          height="200"
        />
      </Grid>
      <Grid item xs={12} md={6}>
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
      </Grid>
    </Grid>
  );
}
