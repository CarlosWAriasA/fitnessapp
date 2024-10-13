import React from "react";
import { Box } from "@mui/material";
import HeroBanner from "../Components/HeroBanner.jsx";
import { SearchExercises } from "../Components/SearchExercises.jsx";
import Exercises from "../Components/Exercises.jsx";

function Home() {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  );
}

export default Home;
