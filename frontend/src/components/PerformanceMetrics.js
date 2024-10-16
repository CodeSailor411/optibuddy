import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const PerformanceMetrics = () => {
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
      <Text fontSize="2xl" color="white" fontWeight="bold">Performance Metrics</Text>
      <Text color="gray.300" mt={4}>
        This section will display key performance metrics for Optibuddy's system.
      </Text>
    </Box>
  );
};

export default PerformanceMetrics;
