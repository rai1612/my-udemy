import React from 'react';
import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import './home.css';
import { Link } from 'react-router-dom';
import vg from '../../assets/images/bg.png';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
import introVideo from '../../assets/videos/intro.mp4';

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height={'100%'}
          justifyContent={['center', 'space-between']}
          alignItems={'center'}
          spacing={['16', '56']}
        >
          <VStack
            width={'full'}
            alignItems={['center', 'flex-end']}
            spacing={'8'}
          >
            <Heading children="LEARN FROM THE" size={'2xl'} />
            <Heading children="EXPERTS" size={'4xl'} color={'yellow.200'} />
            <Text
              textAlign={['center', 'left']}
              children="Find valuable content at reasonable price"
            />
            <Link to={'/courses'}>
              <Button size={'lg'} colorScheme="yellow">
                Explore
              </Button>
            </Link>
          </VStack>

          <Image
            className="vector-graphics"
            boxSize={'sm'}
            src={vg}
            objectFit={'contain'}
          />
        </Stack>
      </div>

      <Box padding={'8'} bg={'blackAlpha.800'}>
        <Heading
          textAlign={'center'}
          children="OUR BRANDS"
          fontFamily={'body'}
          color={'yellow.400'}
        />
        <HStack
          className="brandsBanner"
          justifyContent={'space-evenly'}
          marginTop={'4'}
        >
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>
      </Box>

      <div className="container2">
        <video
          autoPlay={false}
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={introVideo}
        ></video>
      </div>
    </section>
  );
};

export default Home;
