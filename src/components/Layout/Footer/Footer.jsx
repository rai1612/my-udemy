import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  TiSocialYoutubeCircular,
  TiSocialInstagramCircular,
} from 'react-icons/ti';
import { DiGithub } from 'react-icons/di';
const Footer = () => {
  return (
    <Box padding={'4'} bg={'blackAlpha.900'} minH={'10vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width={'full'}>
          <Heading children="All Rights Reserved" color={'white'} />
          <Heading
            children="@ArunKumarRai"
            color={'yellow.400'}
            fontFamily={'body'}
            size={'sm'}
          />
        </VStack>
        <HStack
          spacing={['2', '10']}
          justifyContent={'center'}
          color={'white'}
          fontSize={'50'}
        >
          <a
            href="https://www.youtube.com/@mechkb1612"
            target={'blank'}
            rel="noreferrer"
          >
            <TiSocialYoutubeCircular />
          </a>
          <a
            href="https://instagram.com/kulungrai__"
            target={'blank'}
            rel="noreferrer"
          >
            <TiSocialInstagramCircular />
          </a>
          <a
            href="https://github.com/rai1612"
            target={'blank'}
            rel="noreferrer"
          >
            <DiGithub />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
