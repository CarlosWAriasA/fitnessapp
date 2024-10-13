import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData.js";
import { EXERCISES_URL } from "../utils/constants.js";
import HorizontalScrollbar from "./HorizontalScrollbar.jsx";
import BodyPart from "./BodyPart.jsx";

export const SearchExercises = ({
  setExercises,
  bodyPart,
  setBodyPart,
  page,
}) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    fetchExercisesData();
  }, []);

  useEffect(() => {
    handleSearch();
  }, [page]);

  const fetchExercisesData = async () => {
    try {
      const bodyPartsData = await fetchData(
        `${EXERCISES_URL}/bodyPartList`,
        exerciseOptions,
      );

      setBodyParts(["all", ...bodyPartsData]);
    } catch (e) {
      console.error(`Error searching body part list: ${e}`);
    }
  };

  const handleSearch = async () => {
    try {
      if (search) {
        const exercisesData = await fetchData(
          `${EXERCISES_URL}/name/${search}?offset=${page}&limit=12`,
          exerciseOptions,
        );

        setTimeout(() => {
          window.scrollTo({ top: 1800, behavior: "smooth" });
        }, 200);

        setExercises(exercisesData);
      }
    } catch (e) {
      console.error(`Error searching exercises ${e}`);
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
          onClick={() => handleSearch()}
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
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        >
          {bodyParts.map((item) => {
            return (
              <Box
                key={item.id || item}
                itemId={item.id || item}
                title={item.id || item}
                m="0 40px"
              >
                <BodyPart
                  item={item}
                  bodyPart={bodyPart}
                  setBodyPart={setBodyPart}
                />
              </Box>
            );
          })}
        </HorizontalScrollbar>
      </Box>
    </Stack>
  );
};
