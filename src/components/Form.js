import React, { useState } from 'react';
import { addContact, addContacts } from '../redux/contactSlice';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { Box } from '@chakra-ui/layout';
import { FormControl } from '@chakra-ui/form-control';
import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !number) {
      return false;
    }
    dispatch(addContact({ id: nanoid(), name, phone_number: number }));

    // const names = name.split(',');
    // const data = names.map((name) => ({ id: nanoid(), name }));
    // dispatch(addContacts(data));

    setName('');
    setNumber('');
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
        <Input placeholder="name" value={name} onChange={(e) => setName(e.target.value)} mb={2} />

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

export default Form;
