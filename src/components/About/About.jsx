import {
  Avatar,
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import introVideo from '../../assets/videos/intro.mp4';
import { RiSecurePaymentFill } from 'react-icons/ri';
import termsAndCondition from '../../assets/docs/termsAndCondition';
const Founder = () => {
  return (
    <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
      <VStack>
        <Avatar boxSize={['40', '40']} />
        <Text children="Co-Founder" opacity={'0.8'} />
      </VStack>
      <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
        <Heading children="Arun Kumar Rai" size={['md', 'xl']} />
        <Text
          children="Hi, I made this project to learn MERN Stack."
          textAlign={['center', 'left']}
        />
      </VStack>
    </Stack>
  );
};

const VideoPlayer = () => {
  return (
    <Box>
      <video
        muted
        loop
        autoPlay
        controls
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        src={introVideo}
      ></video>
    </Box>
  );
};
const TandC = ({ termsAndConditions }) => {
  return (
    <Box>
      <Heading
        children="Terms and Conditions"
        textAlign={['center', 'left']}
        my={'4'}
        size={'md'}
      />
      <Box h={'sm'} p={'4'} overflowY={'scroll'}>
        <Text
          textAlign={['center', 'left']}
          letterSpacing={'widest'}
          fontFamily={'heading'}
        >
          {termsAndConditions}
        </Text>
        <Heading
          m={'4'}
          size={'xs'}
          children="Refund only applicable for cancellation within 7 days."
        />
      </Box>
    </Box>
  );
};
const About = () => {
  return (
    <Container maxW={'container.lg'} p={'16'} boxShadow={'lg'}>
      <Heading children="About Us" textAlign={['center', 'left']} />
      <Founder />
      <Stack m={'8'} direction={['column', 'row']} alignItems={'center'}>
        <Text fontFamily={'cursive'} m={'8'} textAlign={['center', 'left']}>
          This is a free video streaming platform similar to Udemy.
        </Text>
        <Link to={'/subscribe'}>
          <Button variant={'ghost'} colorScheme="yellow">
            {' '}
            Checkout different plans.
          </Button>
        </Link>
      </Stack>
      <VideoPlayer />
      <TandC termsAndConditions={termsAndCondition} />
      <HStack marginY={'4'} p={'4'}>
        <RiSecurePaymentFill />
        <Heading
          children="payment is secured by razorpay"
          size={'xs'}
          fontFamily={'sans-serif'}
          textTransform={'uppercase'}
        />
      </HStack>
    </Container>
  );
};

export default About;
