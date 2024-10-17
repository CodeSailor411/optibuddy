import React, { useEffect } from 'react';
import { Box, Text, SimpleGrid, Stat, StatLabel, StatNumber, Flex } from '@chakra-ui/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, AreaChart, Area } from 'recharts';

const dataUptime = [
  { name: 'Jan', uptime: 99.9 },
  { name: 'Feb', uptime: 99.8 },
  { name: 'Mar', uptime: 99.9 },
  { name: 'Apr', uptime: 99.95 },
  { name: 'May', uptime: 100 },
  { name: 'Jun', uptime: 99.9 },
];

const dataLatency = [
  { name: 'Jan', latency: 120 },
  { name: 'Feb', latency: 130 },
  { name: 'Mar', latency: 110 },
  { name: 'Apr', latency: 150 },
  { name: 'May', latency: 100 },
  { name: 'Jun', latency: 90 },
];

const dataThroughput = [
  { name: 'Week 1', requests: 1200 },
  { name: 'Week 2', requests: 1500 },
  { name: 'Week 3', requests: 1800 },
  { name: 'Week 4', requests: 2000 },
];

const PerformanceMetrics = () => {
  useEffect(() => {
    const originalConsoleError = console.error;
    console.error = (...args) => {
      if (!args[0].includes('ResizeObserver loop')) {
        originalConsoleError(...args);
      }
    };

    return () => {
      console.error = originalConsoleError; // Restore original console.error
    };
  }, []);

  return (
    <Box
      w="100%"
      h="100%"
      bg="rgba(0, 0, 0, 0.7)"
      borderRadius="lg"
      boxShadow="2xl"
      p={6}
      display="flex"
      flexDirection="column"
    >
      <Text fontSize="2xl" color="white" fontWeight="bold" mb={4}>
        Performance Metrics
      </Text>
      <Text color="gray.300" mb={6}>
        This section provides an overview of key performance metrics for Optibuddy’s system, including system uptime, latency, and request throughput.
      </Text>

      {/* Summary Stats */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mb={8}>
        <Stat bg="gray.800" p={4} borderRadius="md">
          <StatLabel color="gray.400">System Uptime</StatLabel>
          <StatNumber color="green.400">99.95%</StatNumber>
        </Stat>
        <Stat bg="gray.800" p={4} borderRadius="md">
          <StatLabel color="gray.400">Average Latency</StatLabel>
          <StatNumber color="red.400">120ms</StatNumber>
        </Stat>
        <Stat bg="gray.800" p={4} borderRadius="md">
          <StatLabel color="gray.400">Requests Per Minute</StatLabel>
          <StatNumber color="white">1800</StatNumber>
        </Stat>
      </SimpleGrid>

      {/* Graphs */}
      <Flex direction={{ base: 'column', lg: 'row' }} justifyContent="space-between" mb={8}>
        {/* Uptime Graph */}
        <Box w={{ base: '100%', lg: '48%' }} h="300px" bg="gray.800" p={4} borderRadius="md">
          <Text color="white" mb={4} fontWeight="bold">System Uptime</Text>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={dataUptime}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="white" />
              <YAxis stroke="white" />
              <Tooltip />
              <Line type="monotone" dataKey="uptime" stroke="#82ca9d" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Box>

        {/* Latency Graph */}
        <Box w={{ base: '100%', lg: '48%' }} h="300px" bg="gray.800" p={4} borderRadius="md" mt={{ base: 6, lg: 0 }}>
          <Text color="white" mb={4} fontWeight="bold">System Latency</Text>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={dataLatency}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="white" />
              <YAxis stroke="white" />
              <Tooltip />
              <Area type="monotone" dataKey="latency" stroke="#ff6361" fill="#ff6361" />
            </AreaChart>
          </ResponsiveContainer>
        </Box>
      </Flex>

      {/* Throughput Graph */}
      <Box w="100%" h="300px" bg="gray.800" p={4} borderRadius="md">
        <Text color="white" mb={4} fontWeight="bold">Requests Throughput</Text>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={dataThroughput}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="white" />
            <YAxis stroke="white" />
            <Tooltip />
            <Bar dataKey="requests" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default PerformanceMetrics;
