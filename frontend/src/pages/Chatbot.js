import React, { useState } from 'react';
import { Box, Flex, Button, VStack, Image, Text } from '@chakra-ui/react';
import { BiAnalyse, BiBarChart } from 'react-icons/bi';
import { IoIosStats } from 'react-icons/io';
import { FiSettings } from 'react-icons/fi';
import sidebarLogo from '../images/optibuddy-logo-sidebar.png';
import ReportAnalysis from '../components/ReportAnalysis';
import FinancialAnalysis from '../components/FinancialAnalysis';
import PerformanceMetrics from '../components/PerformanceMetrics';
import Chat from '../components/Chat';

// Main Chatbot Page Component
const Chatbot = () => {
  const [activeSection, setActiveSection] = useState('chat');

  const renderSection = () => {
    switch (activeSection) {
      case 'reportAnalysis':
        return <ReportAnalysis />;
      case 'financialAnalysis':
        return <FinancialAnalysis />;
      case 'performanceMetrics':
        return <PerformanceMetrics />;
      case 'chat':
      default:
        return <Chat />;
    }
  };

  return (
    <Flex direction="row" w="100vw" h="100vh" bg="gray.900">
      {/* Sidebar */}
      <Box 
        w={{ base: "25%", md: "20%" }} 
        h="100%" 
        bg="gray.800" 
        p={4} 
        boxShadow="lg" 
        borderRight="1px" 
        borderColor="gray.700"
        display="flex"
        flexDirection="column"
      >
        {/* Sidebar Header */}
        <Box textAlign="center" mb={6} flexShrink={0}>
          <Image src={sidebarLogo} alt="Optibuddy Logo" boxSize="50px" mb={4} mx="auto" />
          <Text fontSize="2xl" fontWeight="bold" color="whiteAlpha.900">
            Optibuddy Dashboard
          </Text>
        </Box>

        {/* Sidebar Buttons */}
        <VStack spacing={4} align="stretch" flex="1">
          <Button
            leftIcon={<BiAnalyse />}
            colorScheme="teal"
            variant="solid"
            onClick={() => setActiveSection('reportAnalysis')}
            _hover={{ bg: 'teal.600' }}
            _active={{ bg: 'teal.700' }}
            borderRadius="md"
          >
            Report Analysis
          </Button>
          <Button
            leftIcon={<BiBarChart />}
            colorScheme="blue"
            variant="solid"
            onClick={() => setActiveSection('financialAnalysis')}
            _hover={{ bg: 'blue.600' }}
            _active={{ bg: 'blue.700' }}
            borderRadius="md"
          >
            Financial Analysis
          </Button>
          <Button
            leftIcon={<IoIosStats />}
            colorScheme="purple"
            variant="solid"
            onClick={() => setActiveSection('performanceMetrics')}
            _hover={{ bg: 'purple.600' }}
            _active={{ bg: 'purple.700' }}
            borderRadius="md"
          >
            Performance Metrics
          </Button>
          <Button
            leftIcon={<FiSettings />}
            colorScheme="gray"
            variant="solid"
            onClick={() => setActiveSection('chat')}
            _hover={{ bg: 'gray.600' }}
            _active={{ bg: 'gray.700' }}
            borderRadius="md"
          >
            Chat with Optibuddy
          </Button>
        </VStack>

        {/* Sidebar Footer */}
        <Box mt="auto" textAlign="center" color="gray.400" fontSize="sm" mb={2}>
          <Text>© 2024 Optibuddy. All Rights Reserved.</Text>
        </Box>
      </Box>

      {/* Main Section - Dynamic Content */}
      <Box w={{ base: "75%", md: "80%" }} h="100%" p={4}>
        {renderSection()}
      </Box>
    </Flex>
  );
};

export default Chatbot;
