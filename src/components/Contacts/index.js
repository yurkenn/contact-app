import React from 'react';
import Form from '../Form';
import List from '../List';

import { useSelector } from 'react-redux';
import { contactSelectors } from '../../redux/contactSlice';
import { Box, Flex, Text } from '@chakra-ui/layout';
const Contacts = () => {
  const totalContacts = useSelector(contactSelectors.selectTotal);
  return (
    <Flex direction="column" align="center" justify="center" w="100%" h="100%" p={4}>
      <Text as="h1" fontSize="2xl" fontWeight="bold" textAlign="center" color="gray.700" mb={4}>
        Contacts ({totalContacts})
      </Text>
      <Form />
      <List />
    </Flex>
  );
};

export default Contacts;
