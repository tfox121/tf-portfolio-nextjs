import Head from 'next/head';
import Image from 'next/image';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { EmailOutlined, LinkedIn, ExpandMore } from '@mui/icons-material';
import { useRef } from 'react';

import { ContactForm, Section, WorkItem } from '@/src/lib/components';
import theme from '@/src/theme';
import work from '../work.json';
import tools from '../tools.json';

export default function Home() {
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  const handleScroll = (ref) => {
    ref.current.scrollIntoView();
  };
  return (
    <>
      <Head>Tom Fox - JavaScript Developer</Head>
      <Section>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flexGrow={1}
          width="100%"
        >
          <Typography variant="h1" textAlign="left">
            Tom Fox
          </Typography>
          <Typography variant="h2" textAlign="left">
            Full-stack Developer
          </Typography>
          <Box my={2}>
            <Typography variant="subtitle">
              Some blurb about how I make stuff.
            </Typography>
          </Box>
        </Box>
        <Box py={1}>
          <IconButton onClick={() => handleScroll(aboutRef)}>
            <ExpandMore sx={{ fontSize: 60 }} />
          </IconButton>
        </Box>
      </Section>
      <Section sectionRef={aboutRef}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flexGrow={1}
          width="100%"
        >
          <Typography variant="h2" textAlign="left">
            About me
          </Typography>
          <Box my={2}>
            <Typography variant="subtitle">
              I am a junior full-stack developer looking for a new challenge!
              I&apos;ve always had a passion for building/fixing things and
              solving problems, and I&apos;ve been studying, coding and
              freelancing for just over a year now. I&apos;m excited to put my
              hard-earned skills to work in a full-time role.
            </Typography>
          </Box>
          <Box
            py={2}
            position="relative"
            width="95vw"
            marginLeft={!matches && theme.spacing(-15)}
            left={!matches && '3vw'}
          >
            <swiper-container
              slides-per-view="4"
              loop="true"
              speed="1200"
              space-between={theme.spacing(matches ? 1 : 5)}
              resistance
              resistance-ratio="100%"
              autoplay="true"
            >
              {tools.map((tool) => (
                <swiper-slide key={tool.title}>
                  <Card sx={{ margin: '2px' }}>
                    <CardMedia
                      sx={{ height: matches ? 70 : 140 }}
                      image={tool.imgSrc}
                      title={`${tool.title} icon`}
                    />
                    <CardContent sx={{ '&&': { padding: 1 } }}>
                      {/* <Image
                    src={tool.imgSrc}
                    alt={`${tool.title} icon`}
                    width="100"
                    height="100"
                  /> */}
                      {/* <Box mt={1}> */}
                      <Typography variant="h6" textAlign="center">
                        {tool.title}
                      </Typography>
                      {/* </Box> */}
                    </CardContent>
                  </Card>
                </swiper-slide>
              ))}
            </swiper-container>
          </Box>
        </Box>
        <Box py={1}>
          <IconButton onClick={() => handleScroll(workRef)}>
            <ExpandMore sx={{ fontSize: 60 }} />
          </IconButton>
        </Box>
      </Section>
      <Section sectionRef={workRef}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flexGrow={1}
          width="100%"
          py={5}
        >
          <Typography variant="h2" textAlign="left">
            My work
          </Typography>
          <Box mt={1}>
            {work.map((workItem, index) => (
              <WorkItem
                key={workItem.title}
                index={index}
                title={workItem.title}
                description={workItem.description}
                imgSrc={workItem.imgSrc}
                appLink={workItem.appLink}
                srcLink={workItem.srcLink}
              />
            ))}
          </Box>
        </Box>
        <Box py={1}>
          <IconButton onClick={() => handleScroll(contactRef)}>
            <ExpandMore sx={{ fontSize: 60 }} />
          </IconButton>
        </Box>
      </Section>
      <Section sectionRef={contactRef}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flexGrow={1}
          width="100%"
          height="100%"
        >
          <Typography variant="h2" textAlign="left">
            Contact me
          </Typography>
          <Box my={4} display="flex" alignItems="center" height="100%">
            <ContactForm />
          </Box>
        </Box>
        <Box>
          <IconButton
            href="https://www.linkedin.com/in/tfox121/"
            target="_blank"
          >
            <LinkedIn />
          </IconButton>
          <IconButton href="mailto:tfox121+portfolio@gmail.com" target="_blank">
            <EmailOutlined />
          </IconButton>
        </Box>
      </Section>
    </>
  );
}
