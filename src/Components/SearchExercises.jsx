import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData.js";
import { EXERCISES_URL } from "../utils/constants.js";
import HorizontalScrollbar from "./HorizontalScrollbar.jsx";

export const SearchExercises = () => {
  const [search, setSearch] = useState("");
  const [exercises, setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    fetchExercisesData();
  }, []);

  const fetchExercisesData = async () => {
    const bodyPartsData = await fetchData(
      `${EXERCISES_URL}/exercises/bodyPartList`,
      exerciseOptions,
    );

    setBodyParts(["all", ...bodyPartsData]);
  };

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        `${EXERCISES_URL}/exercises`,
        exerciseOptions,
      );

      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search),
      );

      console.log(exercisesData);
      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt={"37px"} justifyContent={"center"} p={"20px"}>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb={"50px"}
        textAlign="center"
      >
        Awesome Exercises You <br />
        Should Know
      </Typography>
      <Box position="relative" mb={"72px"}>
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "white",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder={"Search Exercises"}
          type={"text"}
        />
        <Button
          className={"search-btn"}
          onClick={handleSearch}
          sx={{
            backgroundColor: "#FF2625",
            color: "#FFF",
            textTransform: "none",
            width: { lg: "175px", xs: "8px" },
            fontSize: { lg: "20px", xs: "12px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar data={bodyParts} />
      </Box>
    </Stack>
  );
};
