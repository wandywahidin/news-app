import React, { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsSpecific, getSpecificNews, getLoading} from "../features/news/newsSlice";

import { Box, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

export default function emailed() {
  const dispatch = useDispatch();

  const loading = useSelector(getLoading)
  const emailNews = useSelector(getSpecificNews);
  const results = emailNews.reduce((finalArray, current) => {
    let obj = finalArray.find((item) => item.id === current.id);
    if (obj) {
      return finalArray;
    }
    return finalArray.concat([current]);
  }, []);

  useEffect(() => {
    dispatch(fetchNewsSpecific('emailed'));
  }, [dispatch]);

  return (
    <>
      <Typography gutterBottom component="div" sx={{textAlign:'center', marginTop:'70px', padding:'20px', fontSize:{xl:'40px', lg:'35px', xs:'20px'}}}>
        Popular News by Emailed
      </Typography>
      <Box sx={{ display: "flex", flexWrap:'wrap', justifyContent:'center', gap:2} }>
        {results.map((item) => {
          return (
            <Card sx={{ maxWidth: 345, display:'flex', flexDirection:'column', justifyContent:'space-between', margin:'10px', background:'black', border:'1px solid gray' }} key={item.id}>
              <CardMedia
                component="img"
                image={item.media[0]["media-metadata"][1].url}
                alt={item.title}
                width='100%'
                sx={{objectFit:'cover'}}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{color:'white', fontSize:{xs:'16px', md:'24px'}}}>
                  <Link href={`detail/${item.id}`}>{item.title}</Link>
                </Typography>
              </CardContent>
              <CardActions sx={{marginTop:'-20px'}}>
                <Typography variant="p" sx={{color:'aqua', paddingX:'8px', ":hover":{color:'white'}}}>
                  <Link href={`detail/${item.id}`} >Read more...</Link>
                </Typography>
              </CardActions>
            </Card>
          );
        })}
      </Box>
      {loading ? 
      <Box sx={{textAlign:'center', marginX:'auto'}}>
        <Typography variant="p" sx={{color:'aqua', paddingX:'8px'}}>
          Loading...
        </Typography>
      </Box> : null }
    </>
  );
}

