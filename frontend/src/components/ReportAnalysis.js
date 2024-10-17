import React, { useState } from 'react';
import {
  Box,
  Text,
  Button,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Flex,
  Select,
  useToast,
} from '@chakra-ui/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Sample data for different report periods
const dataTraction = {
  days: [
    { name: 'Mon', traction: 800 },
    { name: 'Tue', traction: 1200 },
    { name: 'Wed', traction: 1600 },
    { name: 'Thu', traction: 1800 },
    { name: 'Fri', traction: 2100 },
    { name: 'Sat', traction: 2500 },
    { name: 'Sun', traction: 2600 },
  ],
  months: [
    { name: 'Jan', traction: 800 },
    { name: 'Feb', traction: 1200 },
    { name: 'Mar', traction: 1600 },
    { name: 'Apr', traction: 1800 },
    { name: 'May', traction: 2100 },
    { name: 'Jun', traction: 2500 },
  ],
};

const dataAccidents = {
  days: [
    { name: 'Mon', accidents: 1 },
    { name: 'Tue', accidents: 2 },
    { name: 'Wed', accidents: 1 },
    { name: 'Thu', accidents: 3 },
    { name: 'Fri', accidents: 0 },
    { name: 'Sat', accidents: 1 },
    { name: 'Sun', accidents: 2 },
  ],
  months: [
    { name: 'Jan', accidents: 2 },
    { name: 'Feb', accidents: 3 },
    { name: 'Mar', accidents: 1 },
    { name: 'Apr', accidents: 5 },
    { name: 'May', accidents: 0 },
    { name: 'Jun', accidents: 4 },
  ],
};

const ReportAnalysis = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [reportType, setReportType] = useState('days');
  const toast = useToast();

  const handleReportGeneration = () => {
    // Placeholder for report generation logic
    toast({
      title: `Generating report for the last X ${reportType}`,
      description: `Starting from: ${startDate.toLocaleDateString()}`,
      status: 'info',
      duration: 3000,
      isClosable: true,
    });
  };

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
        Report Analysis
      </Text>
      <Text color="gray.300" mb={6}>
        Generate detailed analysis reports for traction, production incidents, and other important metrics.
      </Text>

      {/* Date Picker and Report Type */}
      <Flex align="center" mb={6}>
        <Text color="white" mr={4}>Select Report Period:</Text>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="MM/dd/yyyy"
          className="date-picker"
        />
        <Select
          value={reportType}
          onChange={(e) => setReportType(e.target.value)}
          ml={4}
          w="200px"
          bg="gray.800"
          color="white"
        >
          <option value="hours">Last X Hours</option>
          <option value="days">Last X Days</option>
          <option value="months">Last X Months</option>
        </Select>
        <Button
          ml={4}
          colorScheme="green"
          onClick={handleReportGeneration}
        >
          Generate Report
        </Button>
      </Flex>

      {/* Summary Stats */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} mb={8}>
        <Stat bg="gray.800" p={4} borderRadius="md">
          <StatLabel color="gray.400">Company Traction</StatLabel>
          <StatNumber color="green.400">2500</StatNumber>
          <Text color="gray.500">Last Month</Text>
        </Stat>
        <Stat bg="gray.800" p={4} borderRadius="md">
          <StatLabel color="gray.400">Production Accidents</StatLabel>
          <StatNumber color="red.400">4</StatNumber>
          <Text color="gray.500">Last Month</Text>
        </Stat>
        <Stat bg="gray.800" p={4} borderRadius="md">
          <StatLabel color="gray.400">Revenue Generated</StatLabel>
          <StatNumber color="blue.400">$1.5M</StatNumber>
          <Text color="gray.500">Last Quarter</Text>
        </Stat>
        <Stat bg="gray.800" p={4} borderRadius="md">
          <StatLabel color="gray.400">Active Users</StatLabel>
          <StatNumber color="yellow.400">34,000</StatNumber>
          <Text color="gray.500">Last Week</Text>
        </Stat>
      </SimpleGrid>

      {/* Graphs */}
      <Flex direction={{ base: 'column', lg: 'row' }} justifyContent="space-between" mb={8}>
        {/* Traction Graph */}
        <Box w={{ base: '100%', lg: '48%' }} h="300px" bg="gray.800" p={4} borderRadius="md">
          <Text color="white" mb={4} fontWeight="bold">Company Traction</Text>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={dataTraction[reportType]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="white" />
              <YAxis stroke="white" />
              <Tooltip />
              <Line type="monotone" dataKey="traction" stroke="#82ca9d" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Box>

        {/* Accidents Graph */}
        <Box w={{ base: '100%', lg: '48%' }} h="300px" bg="gray.800" p={4} borderRadius="md" mt={{ base: 6, lg: 0 }}>
          <Text color="white" mb={4} fontWeight="bold">Production Accidents</Text>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={dataAccidents[reportType]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="white" />
              <YAxis stroke="white" />
              <Tooltip />
              <Line type="monotone" dataKey="accidents" stroke="#ff6361" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </Flex>
    </Box>
  );
};

export default ReportAnalysis;
