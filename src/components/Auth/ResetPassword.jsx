import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { resetPassword } from '../../redux/actions/profile';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const params = useParams();
  const { loading, message, error } = useSelector(state => state.profile);
  const dispatch = useDispatch();
  const submitHandler = e => {
    e.preventDefault();
    dispatch(resetPassword(params.token, password));
  };

  // const navigate = useNavigate();
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
      // navigate('/login');
    }
  }, [message, error, dispatch]);
  return (
    <Container py={'16'} height={'85vh'}>
      <form onSubmit={submitHandler}>
        <Heading
          children="Rest Password"
          my={'16'}
          textTransform={'uppercase'}
          textAlign={['center', 'left']}
        />
        <VStack spacing={'10'}>
          <Input
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="New Password"
            type="password"
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
          Reset Password
        </Button>
      </form>
    </Container>
  );
};

export default ResetPassword;
