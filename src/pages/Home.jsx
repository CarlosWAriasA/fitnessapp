import { Box } from "@mui/material";
import HeroBanner from "../Components/HeroBanner.jsx";
import { SearchExercises } from "../Components/SearchExercises.jsx";
import Exercises from "../Components/Exercises.jsx";
import { useState } from "react";

function Home() {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  const [page, setPage] = useState(0);
  const [searchType, setSearchType] = useState("bodyPart");

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        page={page}
        setPage={setPage}
        setSearchType={setSearchType}
        searchType={searchType}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
        page={page}
        setPage={setPage}
        setSearchType={setSearchType}
        searchType={searchType}
      />
    </Box>
  );
}

export default Home;
