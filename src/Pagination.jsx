import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useGlobalContext } from "./context";

const Pagination = () => {
  const { page, nbPages, prevPage, nextPage } = useGlobalContext();
  return (
    <>
      <Box
        width="400px"
        margin="auto"
        marginTop="20px"
        marginBottom="20px"
        sx={{ width: {
          md:"30%",
          xs:"90%"
        },
       display: "flex", 
       flexDirection: "row",
        justifyContent: "center" }}
      >
        <Button
          variant="contained"
          color="secondary"
          sx={{ margin: "5px", mr: "20px" }}
          onClick={() => prevPage()}
        >
          Prev
        </Button>
        <Typography variant="h6" sx={{ margin: "5px", mr: "20px" }}>
          {page + 1} of {nbPages}
        </Typography>

        <Button
          variant="contained"
          color="secondary"
          sx={{ margin: "5px" }}
          onClick={() => nextPage()}
        >
          Next
        </Button>
      </Box>
    </>
  );
};

export default Pagination;
