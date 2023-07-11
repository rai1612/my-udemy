import {
  Button,
  Container,
  Grid,
  Heading,
  Image,
  Input,
  Select,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import cursor from '../../../assets/images/cursor.png';
import Sidebar from '../Sidebar';
import { fileUploadCSS } from '../../Auth/Register';
import { useDispatch, useSelector } from 'react-redux';
import { createCourse } from '../../../redux/actions/admin';
import toast from 'react-hot-toast';

const categories = [
  'Web Development',
  'Artificial Intelligence',
  'Data Structures and Algorithms',
  'App Development',
  'Data Science',
  'Game Development',
];
const CreateCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [imagePrev, setImagePrev] = useState('');
  const dispatch = useDispatch();

  const { loading, error, message } = useSelector(state => state.admin);

  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const submitHandler = e => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.append('title', title);
    myForm.append('description', description);
    myForm.append('category', category);
    myForm.append('createdBy', createdBy);
    myForm.append('file', image);

    dispatch(createCourse(myForm));
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
  }, [dispatch, error, message]);
  return (
    <Grid
      css={{
        cursor: `url(${cursor}), default`,
      }}
      minH={'100vh'}
      gridTemplateColumns={['1fr', '5fr 1fr']}
    >
      <Container py={'16'}>
        <form onSubmit={submitHandler}>
          <Heading
            textTransform={'uppercase'}
            children={'Create Course'}
            my={'16'}
            textAlign={['center', 'left']}
          />
          <VStack m={'auto'} spacing={'8'}>
            <Input
              focusBorderColor="purple.300"
              placeholder="Title"
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <Input
              focusBorderColor="purple.300"
              placeholder="Description"
              type="text"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            <Input
              focusBorderColor="purple.300"
              placeholder="Creator Name"
              type="text"
              value={createdBy}
              onChange={e => setCreatedBy(e.target.value)}
            />
            <Select
              focusBorderColor="purple.300"
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              {categories.map(item => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Select>
            <Input
              accept="image/*"
              required
              type="file"
              focusBorderColor="purple.300"
              css={{
                '&::file-selector-button': {
                  ...fileUploadCSS,
                  color: 'purple',
                },
              }}
              onChange={changeImageHandler}
            />

            {imagePrev && (
              <Image src={imagePrev} boxSize={'64'} objectFit={'contain'} />
            )}
            <Button
              isLoading={loading}
              w={'full'}
              colorScheme="purple"
              type="submit"
            >
              Create
            </Button>
          </VStack>
        </form>
      </Container>
      <Sidebar />
    </Grid>
  );
};

export default CreateCourse;
