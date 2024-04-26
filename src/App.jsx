import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Index from "./pages/Index.jsx";
import { Box, Flex, Text } from "@chakra-ui/react";

function App() {
  return (
    <Router>
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1rem" bg="blue.500" color="white">
        <Text fontSize="lg" fontWeight="bold">Todo App</Text>
        <Box>
          <Link to="/" style={{ marginRight: "15px", color: "white" }}>Home</Link>
          <Link to="/about" style={{ marginRight: "15px", color: "white" }}>About</Link>
          <Link to="/contact" style={{ color: "white" }}>Contact</Link>
        </Box>
      </Flex>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/about" element={<Box p={5}><Text fontSize="xl">About Page</Text></Box>} />
        <Route path="/contact" element={<Box p={5}><Text fontSize="xl">Contact Page</Text></Box>} />
      </Routes>
    </Router>
  );
}

export default App;