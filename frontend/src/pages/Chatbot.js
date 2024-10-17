import React, { useState, useEffect } from 'react';
import { Box, Flex, Button, VStack, Image, Text } from '@chakra-ui/react';
import { BiAnalyse, BiBarChart } from 'react-icons/bi';
import { IoIosStats } from 'react-icons/io';
import { FiSettings } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion'; // Added AnimatePresence
import { ClipLoader } from 'react-spinners';
import sidebarLogo from '../images/optibuddy-logo-sidebar.png';
import ReportAnalysis from '../components/ReportAnalysis';
import FinancialAnalysis from '../components/FinancialAnalysis';
import PerformanceMetrics from '../components/PerformanceMetrics';
import Chat from '../components/Chat';

const Chatbot = () => {
  const [activeSection, setActiveSection] = useState('chat');
  const [loading, setLoading] = useState(true);
  const [demoLoading, setDemoLoading] = useState(false);

  // Simulate initial loading effect for 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds
    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  // Simulate a 2-3 second loading when "Demo Our Product" is clicked
  const handleDemoClick = () => {
    setDemoLoading(true);
    setTimeout(() => {
      setDemoLoading(false);
    }, 2500); // 2.5 seconds
  };

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

  if (loading || demoLoading) {
    return (
      <AnimatePresence>
        <motion.div
          key="loader"
          initial={{ opacity: 0 }} // Start with 0 opacity for smooth fade-in
          animate={{ opacity: 1 }} // Fade in to full opacity
          exit={{ opacity: 0 }} // Smooth fade-out
          transition={{ duration: 0.5 }} // Duration of the fade-in/out
        >
          <Flex
            w="100vw"
            h="100vh"
            justifyContent="center"
            alignItems="center"
            bg="gray.900"
          >
            {/* Loading Spinner */}
            <ClipLoader color="#4FD1C5" size={150} />
          </Flex>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        key="content"
        initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and slide in from below
        animate={{ opacity: 1, y: 0 }} // Animate to full opacity and normal position
        exit={{ opacity: 0, y: -20 }} // Slide out and fade when exiting
        transition={{ duration: 0.5 }} // Smooth transition effect
      >
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
              <Image
                src={sidebarLogo}
                alt="Optibuddy Logo"
                boxSize="50px"
                mb={4}
                mx="auto"
              />
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
              {/* Demo Button */}
              <Button
                colorScheme="yellow"
                variant="solid"
                onClick={handleDemoClick}
                _hover={{ bg: 'yellow.600' }}
                _active={{ bg: 'yellow.700' }}
                borderRadius="md"
              >
                Demo Our Product
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
      </motion.div>
    </AnimatePresence>
  );
};

export default Chatbot;
