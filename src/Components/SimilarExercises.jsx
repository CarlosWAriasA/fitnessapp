import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar.jsx";
import Loader from "./Loader.jsx";
import ExerciseCard from "./ExerciseCard.jsx";

const SimilarExercises = ({
  targetMuscleExercises,
  equipmentMuscleExercises,
}) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0px" } }} mb={10}>
      <Typography variant="h3" mb={5}>
        Exercises that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative", gap: "10px" }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar>
            {targetMuscleExercises.map((exercise, index) => {
              return (
                <div style={{ marginRight: "30px" }}>
                  <ExerciseCard key={index} exercise={exercise} />
                </div>
              );
            })}
          </HorizontalScrollbar>
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h3" mb={5} mt={5}>
        Exercises that use the same equipment
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative", gap: "10px" }}>
        {equipmentMuscleExercises.length ? (
          <HorizontalScrollbar>
            {equipmentMuscleExercises.map((exercise, index) => {
              return (
                <div style={{ marginRight: "30px" }}>
                  <ExerciseCard key={index} exercise={exercise} />
                </div>
              );
            })}
          </HorizontalScrollbar>
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};
export default SimilarExercises;
