import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link to={`/exercise/${exercise.id}`} className={"exercise-card"}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>{" "}
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#000000"
        mt={"11px"}
        pb={"10px"}
        fontWeight="bold"
        textTransform={"capitalize"}
        fontSize={"22px"}
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};
export default ExerciseCard;
