import Icon from "../assets/icons/gym.png";
import { Stack, Typography } from "@mui/material";

const BodyPart = ({ item, setBodyPart, bodyPart, setSearchType }) => {
  return (
    <Stack
      type={"button"}
      alignItems={"center"}
      justifyContent={"center"}
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #FF2625" : "",
        backgroundColor: "#FFFFFF",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        setSearchType("bodyPart");
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img
        src={Icon}
        alt={"dumbbell"}
        style={{ width: "40px", height: "40px" }}
      />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#381212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};
export default BodyPart;
