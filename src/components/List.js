import React from 'react';
import { contactSelectors, deleteAllContacts } from '../redux/contactSlice';
import { useDispatch, useSelector } from 'react-redux';
import Item from './Item';
import { Box, Text } from '@chakra-ui/layout';

const List = () => {
  const contacts = useSelector(contactSelectors.selectAll);
  const total = useSelector(contactSelectors.selectTotal);
  const dispatch = useDispatch();
  const handleDeleteAll = () => {
    if (window.confirm('Are you sure you want to delete all contacts?')) {
      dispatch(deleteAllContacts());
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
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box display="flex" flexDirection="row" alignItems="center" w="100%" mb={4} ml={7}>
        <Text as="h3" fontSize="lg" fontWeight="bold" color="gray.700" mr={10}>
          Name
        </Text>
        <Text fontSize="sm">Phone Number</Text>
      </Box>
      {total === 0 && (
        <Text
          as="p"
          fontSize="sm"
          color="gray.700"
          w="100%"
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          ml={7}
        >
          No contacts found
        </Text>
      )}
      {contacts.map((contact) => (
        <Item key={contact.id} item={contact} />
      ))}
      {total > 1 && (
        <Box
          as="button"
          color="red.500"
          fontWeight="bold"
          fontSize="sm"
          alignSelf="center"
          onClick={handleDeleteAll}
        >
          Delete All
        </Box>
      )}
    </Box>
  );
};

export default List;
