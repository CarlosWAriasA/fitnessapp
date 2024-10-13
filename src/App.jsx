import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./Components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import ExerciseDetail from "./pages/ExerciseDetail.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <Box width="400px" sx={{width: {xl: "1488px"}}} m={"auto"} >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
