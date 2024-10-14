import { Box, Stack, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard.jsx";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { useEffect } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData.js";
import { EXERCISES_URL } from "../utils/constants.js";

const Exercises = ({
  setExercises,
  bodyPart,
  exercises,
  setPage,
  page,
  searchType,
  setSearchType,
}) => {
  useEffect(() => {
    const fetchExercises = async () => {
      setSearchType("bodyPart");
      let exercises = [];
      if (bodyPart !== "all") {
        exercises = await fetchData(
          `${EXERCISES_URL}/bodyPart/${bodyPart}?offset=${page}&limit=12`,
          exerciseOptions,
        );
      } else {
        exercises = await fetchData(
          `${EXERCISES_URL}?offset=${page}&limit=12`,
          exerciseOptions,
        );
      }
      setExercises(exercises);
    };
    if (searchType === "bodyPart") {
      fetchExercises();
    }
  }, [bodyPart, page]);

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt={"50px"} p="20px">
      <Typography variant="h4" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      {exercises.length > 0 && (
        <Stack
          mt="100px"
          alignItems={"center"}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "right",
          }}
        >
          {page > 0 && (
            <div
              onClick={() => {
                setPage((prev) => prev - 1);
              }}
            >
              <ArrowCircleLeftIcon sx={{ fontSize: 40, cursor: "pointer" }} />
            </div>
          )}
          {exercises.length > 11 && (
            <div
              onClick={() => {
                setPage((prev) => prev + 1);
              }}
            >
              <ArrowCircleRightIcon sx={{ fontSize: 40, cursor: "pointer" }} />
            </div>
          )}
        </Stack>
      )}
    </Box>
  );
};
export default Exercises;
