import React from "react";
import { useGlobalContext } from "./context";
import {
  
  Link,
  Typography,
  Paper,
  Box,
 
} from "@mui/material";

const Stories = () => {
  const { hits, isLoading, removePost } = useGlobalContext();
  if (isLoading) {
    return (
      <Box
        width="100%"
        height="100%"
        sx={{
        display:"flex",
          margin: "auto",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3">Loading....</Typography>
      </Box>
    );
  }
  return (
    <>
        <Box
          sx={{
            width: {
              sm:"50%",
              xs:"80%"
            },
            display:"flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "auto",
          }}
        >
      {hits.map((value) => {
        const { title, author, url, num_comments, objectID } = value;
        return (
          <>
              <Paper
                elevation={10}
                //    sx={{padding:"2px", marginBottom:"7px", width:"100%", minHeight:"70px"}}
                sx={{
                  padding: "20px",
                  marginBottom: "20px",
                  width: "99%",
                  minHeight: "70px",
                  "&:hover": {
                    width: "100%",
                  },
                }}
              >
                <Box
                  key={objectID}
                  sx={{
                    mb: "20px",
                  }}
                >
                  <Typography variant="h5">{title}</Typography>
                  <Typography variant="subtitle1" sx={{ color: "gray" }}>
                    <bold>{author}</bold> | <span>{num_comments}</span> comments
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Link
                    href={url}
                    target="_blank"
                    sx={{ color: "blue", textDecoration: "none" }}
                  >
                    Read More
                  </Link>
                  <Link
                    href="#"
                    onClick={() => removePost(objectID)}
                    sx={{ color: "red", textDecoration: "none" }}
                  >
                    Remove
                  </Link>
                </Box>
              </Paper>
          </>
        );
      })}
      </Box>
    </>
  );
};

export default Stories;
