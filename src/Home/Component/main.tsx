import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Home from "../Container/home";
import MediaQuery from "react-responsive";

const useStyle = makeStyles(() =>
  createStyles({
    rootPC: {
      display: "grid",
      gridTemplateRows: "3% 7% 3% 84% 3%",
      gridTemplateColumns: "10% 80% 10%",
      height: "calc(100vh - 70px)",
    },
    rootPhone: {
      display: "grid",
      gridTemplateRows: "3% 7% 3% 71% 3% 10% 3%",
      gridTemplateColumns: "10% 80% 10%",
      height: "calc(100vh - 70px)",
    },
  })
);

const Main: React.FC = () => {
  const styles = useStyle();
  return (
    <>
      <MediaQuery query="(min-width:767px)">
        <Box className={styles.rootPC}>
          <Home />
        </Box>
      </MediaQuery>
      <MediaQuery query="(max-width:767px)">
        <Box className={styles.rootPhone}>
          <Home />
        </Box>
      </MediaQuery>
    </>
  );
};

export default Main;
