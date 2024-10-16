import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const FinancialAnalysis = () => {
  return (
    <Box
      w="100%"
      h="100%"
      bg="rgba(0, 0, 0, 0.7)"
      borderRadius="lg"
      boxShadow="2xl"
      p={4}
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Text fontSize="2xl" color="white" fontWeight="bold">Financial Analysis</Text>
      <Text color="gray.300" mt={4}>
        This section will provide an in-depth financial analysis based on available data.
      </Text>
    </Box>
  );
};

export default FinancialAnalysis;
