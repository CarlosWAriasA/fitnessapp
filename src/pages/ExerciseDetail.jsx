import { Box } from "@mui/material";
import Detail from "../Components/Detail.jsx";
import ExerciseVideos from "../Components/ExerciseVideos.jsx";
import SimilarExercises from "../Components/SimilarExercises.jsx";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  exerciseOptions,
  fetchData,
  youtubeOptions,
} from "../utils/fetchData.js";
import { EXERCISES_URL, YOUTUBE_SEARCH_URL } from "../utils/constants.js";

function ExerciseDetail() {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentMuscleExercises, setEquipmentMuscleExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseDetails = async () => {
      try {
        const exerciseData = await fetchData(
          `${EXERCISES_URL}/exercise/${id}`,
          exerciseOptions,
        );
        setExerciseDetail(exerciseData);

        const exerciseVideosData = await fetchData(
          `${YOUTUBE_SEARCH_URL}/search?query=${exerciseData.name}`,
          youtubeOptions,
        );
        setExerciseVideos(exerciseVideosData.contents);

        const targetMuscleExercisesData = await fetchData(
          `${EXERCISES_URL}/target/${exerciseData.target}`,
          exerciseOptions,
        );
        setTargetMuscleExercises(targetMuscleExercisesData);

        const equipmentMuscleExercisesData = await fetchData(
          `${EXERCISES_URL}/equipment/${exerciseData.equipment}`,
          exerciseOptions,
        );
        setEquipmentMuscleExercises(equipmentMuscleExercisesData);
      } catch (e) {
        console.error(`Error searching exercise detail ${e}`);
      }
    };

    fetchExerciseDetails();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentMuscleExercises={equipmentMuscleExercises}
      />
    </Box>
  );
}

export default ExerciseDetail;
