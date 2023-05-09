import { Flex } from '@chakra-ui/react';
import React from 'react';

const Error = () => {
  // create error page
  return (
    <Flex direction="column" align="center" justify="center" w="100%" h="100%" p={4}>
      <h1>404 Error</h1>
      <h2>Page not found</h2>
    </Flex>
  );
};

export default Error;
