import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import EditForm from './EditForm';
import { useSelector } from 'react-redux';
import { contactSelectors } from '../../redux/contactSlice';
import { Box, Flex, Text } from '@chakra-ui/layout';

const Edit = () => {
  const { id } = useParams();
  const contact = useSelector((state) => contactSelectors.selectById(state, id));

  if (!contact) {
    return <Navigate to={'/'} />;
  }

  return (
    <Flex direction="column" align="center" justify="center" w="100%" h="100%" p={4}>
      <Text as="h1" fontSize="2xl" fontWeight="bold" textAlign="center" color="gray.700" mb={4}>
        Edit Contact
      </Text>
      <EditForm contact={contact} />
    </Flex>
  );
};

export default Edit;
