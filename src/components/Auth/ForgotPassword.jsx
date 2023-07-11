import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { forgetPassword } from '../../redux/actions/profile';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const { loading, message, error } = useSelector(state => state.profile);

  const dispatch = useDispatch();
  const submitHandler = e => {
    e.preventDefault();
    dispatch(forgetPassword(email));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, message, error]);
  return (
    <Container py={'16'} height={'85vh'}>
      <form onSubmit={submitHandler}>
        <Heading
          children="Forgot Password"
          my={'16'}
          textTransform={'uppercase'}
          textAlign={['center', 'left']}
        />
        <VStack spacing={'10'}>
          <Input
            required
            onChange={e => setEmail(e.target.value)}
            value={email}
            placeholder="abc@gmail.com"
            type="email"
            focusBorderColor="yellow.500"
          />
        </VStack>
        <Button
          isLoading={loading}
          my={'8'}
          type="submit"
          width={'full'}
          colorScheme="yellow"
        >
          Send Rest Link
        </Button>
      </form>
    </Container>
  );
};

export default ForgotPassword;
