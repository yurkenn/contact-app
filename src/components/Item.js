import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactSlice';
import { Link } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/layout';

const Item = ({ item }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      dispatch(deleteContact(item.id));
    }
  };

  return (
    <Box
      w="100%"
      maxW="md"
      bg="white"
      boxShadow="md"
      rounded="lg"
      p={4}
      mb={4}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
        <Text as="h3" fontSize="lg" fontWeight="bold" color="gray.700">
          {item.name}
        </Text>
        <Text ml={3} as="p" fontSize="sm" color="gray.700">
          {item.phone_number}
        </Text>
      </Box>
      <Box>
        <Box as="button" color="red.500" fontWeight="bold" fontSize="sm" onClick={handleDelete}>
          Delete
        </Box>
        <Box as="button" color="blue.500" fontWeight="bold" fontSize="sm" ml={2}>
          <Link to={`/edit/${item.id}`}>Edit</Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Item;
