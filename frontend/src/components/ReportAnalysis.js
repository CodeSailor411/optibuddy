import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const ReportAnalysis = () => {
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
      <Text fontSize="2xl" color="white" fontWeight="bold">Report Analysis</Text>
      <Text color="gray.300" mt={4}>
        This section will provide detailed analysis on various reports generated from IoT data and other sources.
      </Text>
    </Box>
  );
};

export default ReportAnalysis;
