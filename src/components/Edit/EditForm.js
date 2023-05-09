import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContact } from '../../redux/contactSlice';
import { useNavigate } from 'react-router-dom';
import { Box } from '@chakra-ui/layout';
import { FormControl } from '@chakra-ui/form-control';
import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';

const EditForm = ({ contact }) => {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.phone_number);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !number) return alert('Please fill in all fields');

    dispatch(
      updateContact({
        id: contact.id,
        changes: {
          name,
          phone_number: number,
        },
      })
    );

    navigate('/');
  };

  return (
    <Box as="form" w="100%" maxW="md" bg="white" boxShadow="md" rounded="lg" p={4} mb={4}>
      <FormControl
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        onSubmit={handleSubmit}
      >
        <Input
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          mb={2}
          autoFocus
        />

        <Input
          placeholder="phone number"
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <Button type="submit" colorScheme="teal" size="sm" w="100%" mt={2} onClick={handleSubmit}>
          Add
        </Button>
      </FormControl>
    </Box>
  );
};

export default EditForm;
