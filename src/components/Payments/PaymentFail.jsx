import { Button, Container, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
const PaymentFail = () => {
  return (
    <Container h={'90vh'}>
      <VStack justifyContent={'center'} h={'full'} spacing={'4'}>
        <RiErrorWarningFill size={'5rem'} />
        <Heading textTransform={'uppercase'}>Payment Failed</Heading>
        <Link to={'/subscribe'}>
          <Button variant={'ghost'}>Try Again</Button>
        </Link>
        <Heading size={'xs'}>Reference : rfasdlfkajs3412jk2132</Heading>
      </VStack>
    </Container>
  );
};

export default PaymentFail;