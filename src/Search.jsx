
import { Box, Input, Typography } from "@mui/material";
import React from "react";
import { useGlobalContext } from "./context";


const Search = () => {

  const {query,searchPost}= useGlobalContext();
  return (
    <Box
      sx={{
        margin: "auto",
        width: {
          sm:"50%",
          xs:"90%"
        },
      
        display:"flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
    
      <Typography variant="h3" marginBottom="20px">
        <strong>News Website</strong>
      </Typography>
      <form>
        <div>
       
        <Input placeholder="Search Here…" variant="contained"  type="text"
      
            value={query}
            onChange={(e) => searchPost(e.target.value)}/>
      
        </div>
      </form>
    </Box>
  );
};

export default Search;
