import React, { useEffect } from "react";
import { getAllNews, fetchNews, getLoading } from "../../features/news/newsSlice";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Link from "next/link";

const newsId = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { newsId } = router.query;
  const loading = useSelector(getLoading)
  useEffect(() => {
    dispatch(fetchNews("emailed"));
    dispatch(fetchNews("shared"));
    dispatch(fetchNews("viewed"));
  }, [dispatch]);
  const select = useSelector(getAllNews);
  const results = select.reduce((finalArray, current) => {
    let obj = finalArray.find((item) => item.id === current.id);
    if (obj) {
      return finalArray;
    }
    return finalArray.concat([current]);
  }, []);

  let detailArray = results.filter((item) => {
    return item.id == newsId;
  });

  return (
    <>
      <Box
        sx={{
          marginTop: "70px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          gutterBottom
          component="div"
          sx={{
            textAlign: "center",
            paddingTop: "20px",
            fontSize: { xl: "40px", md: "35px", xs: "20px" },
            fontWeight: "bold",
            marginX: "auto",
            maxWidth: { xl: "70%", xs: "95%" },
            lineHeight: 1,
          }}
        >
          {detailArray[0]?.title}
        </Typography>
        <Typography
          gutterBottom
          variant="p"
          component="p"
          sx={{
            color: "gray",
            textAlign: "start",
            fontSize: { xs: "14px", md: "20px" },
            marginBottom: "-5px",
          }}
        >
          Updated : {detailArray[0]?.updated}
        </Typography>
        <Typography
          gutterBottom
          variant="p"
          component="p"
          sx={{
            color: "gray",
            textAlign: "center",
            fontSize: { xs: "14px", md: "20px" },
            maxWidth: { xl: "70%", xs:'80%' },
            marginX: "auto",
            marginTop:'5px'
          }}
        >
          {detailArray[0]?.byline}
        </Typography>
        <Card
          sx={{
            maxWidth: { xl: "70%", xs: "95%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            margin: "10px",
            background: "black",
            border: "1px solid gray",
          }}
        >
          <CardMedia
            component="img"
            image={detailArray[0]?.media[0]["media-metadata"][2].url}
            alt={detailArray[0]?.title}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="p"
              component="p"
              sx={{
                color: "gray",
                textAlign: "center",
                marginTop: "-10px",
                fontSize: { xs: "14px", md: "20px" },
                maxWidth: { xl: "70%" },
                marginX: "auto",
                lineHeight: 1,
              }}
            >
              {detailArray[0]?.media[0].caption}
            </Typography>
            <Typography
              gutterBottom
              variant="p"
              component="p"
              sx={{
                color: "gray",
                textAlign: "center",
                fontSize: { xs: "14px", md: "20px" },
                marginTop: "-5px",
                marginBottom: "20px",
              }}
            >
              Source : {detailArray[0]?.source}
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                color: "white",
                fontSize: { xs: "18px", md: "24px" },
                textAlign: "justify",
              }}
            >
              {detailArray[0]?.abstract}
            </Typography>
          </CardContent>
          <CardActions sx={{ display:'flex', justifyContent:'space-between' }}>
            <Typography
              variant="p"
              sx={{
                color: "aqua",
                paddingX: "8px",
                ":hover": { color: "white" },
              }}
            >
              <a href={detailArray[0]?.url} target="_blank">
                Link news...
              </a>
            </Typography>
            <Typography
              variant="p"
              sx={{
                color: "aqua",
                paddingX: "8px",
                paddingY:'5px',
                ":hover": { color: "white" }, border:'1px solid aqua'
              }}
            >
            <Link href={'/'}>Back to Home</Link></Typography>
          </CardActions>
        </Card>
      </Box>
      {loading ? 
      <Box sx={{textAlign:'center', marginX:'auto'}}>
        <Typography variant="p" sx={{color:'aqua', paddingX:'8px'}}>
          Loading...
        </Typography>
      </Box> : null }
    </>
  );
};

export default newsId;
