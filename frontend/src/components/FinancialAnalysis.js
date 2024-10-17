import React from 'react';
import { Box, Text, Flex, SimpleGrid, Stat, StatLabel, StatNumber, Link, VStack } from '@chakra-ui/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

// Sample data for the charts
const dataLineChart = [
  { name: 'Jan', revenue: 4000, expenses: 2400 },
  { name: 'Feb', revenue: 3000, expenses: 1398 },
  { name: 'Mar', revenue: 2000, expenses: 9800 },
  { name: 'Apr', revenue: 2780, expenses: 3908 },
  { name: 'May', revenue: 1890, expenses: 4800 },
  { name: 'Jun', revenue: 2390, expenses: 3800 },
  { name: 'Jul', revenue: 3490, expenses: 4300 },
];

const dataBarChart = [
  { name: 'Q1', profit: 2400, loss: 2400 },
  { name: 'Q2', profit: 1398, loss: 2210 },
  { name: 'Q3', profit: 9800, loss: 2290 },
  { name: 'Q4', profit: 3908, loss: 2000 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const dataPieChart = [
  { name: 'Investments', value: 400 },
  { name: 'Savings', value: 300 },
  { name: 'Debt', value: 300 },
  { name: 'Other', value: 200 },
];

const FinancialAnalysis = () => {
  return (
    <Flex w="100%" h="100vh" bg="gray.900" color="white" p={6}>
      {/* Sidebar */}
      <Box
        w="20%"
        h="100%"
        bg="gray.800"
        p={4}
        borderRadius="lg"
        position="sticky"
        top={0}
        boxShadow="lg"
      >
        <VStack spacing={4} align="start">
          <Text fontSize="xl" fontWeight="bold">Navigate</Text>
          <Link href="#revenue-expenses" color="teal.400">Revenue vs Expenses</Link>
          <Link href="#profit-loss" color="teal.400">Profit & Loss by Quarter</Link>
          <Link href="#asset-distribution" color="teal.400">Asset Distribution</Link>
        </VStack>
      </Box>

      {/* Main Content */}
      <Box w="80%" pl={6}>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Financial Analysis
        </Text>
        <Text color="gray.300" mb={6}>
          This section provides an in-depth financial analysis, visualizing revenue, expenses, and profit trends over time.
        </Text>

        {/* Summary Stats */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mb={8}>
          <Stat bg="gray.800" p={4} borderRadius="md">
            <StatLabel color="gray.400">Total Revenue</StatLabel>
            <StatNumber color="white">$53,900</StatNumber>
          </Stat>
          <Stat bg="gray.800" p={4} borderRadius="md">
            <StatLabel color="gray.400">Total Expenses</StatLabel>
            <StatNumber color="white">$38,600</StatNumber>
          </Stat>
          <Stat bg="gray.800" p={4} borderRadius="md">
            <StatLabel color="gray.400">Net Profit</StatLabel>
            <StatNumber color="green.400">$15,300</StatNumber>
          </Stat>
        </SimpleGrid>

        {/* Graphs */}
        <Flex direction={{ base: 'column', lg: 'row' }} justifyContent="space-between" mb={8}>
          <Box
            id="revenue-expenses"
            w={{ base: '100%', lg: '48%' }}
            h="300px"
            bg="gray.800"
            p={4}
            borderRadius="md"
          >
            <Text color="white" mb={4} fontWeight="bold">Revenue vs Expenses</Text>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dataLineChart}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="white" />
                <YAxis stroke="white" />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="#8884d8" strokeWidth={2} />
                <Line type="monotone" dataKey="expenses" stroke="#82ca9d" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Box>

          <Box
            id="profit-loss"
            w={{ base: '100%', lg: '48%' }}
            h="300px"
            bg="gray.800"
            p={4}
            borderRadius="md"
            mt={{ base: 6, lg: 0 }}
          >
            <Text color="white" mb={4} fontWeight="bold">Profit and Loss by Quarter</Text>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dataBarChart}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="white" />
                <YAxis stroke="white" />
                <Tooltip />
                <Bar dataKey="profit" fill="#82ca9d" />
                <Bar dataKey="loss" fill="#ff6361" />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </Flex>

        {/* Asset Distribution */}
        <Box
          id="asset-distribution"
          w="100%"
          h="300px"
          bg="gray.800"
          p={4}
          borderRadius="md"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Text color="white" mb={4} fontWeight="bold">Asset Distribution</Text>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={dataPieChart}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                fill="#8884d8"
                dataKey="value"
              >
                {dataPieChart.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </Flex>
  );
};

export default FinancialAnalysis;
