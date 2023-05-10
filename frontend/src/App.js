import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
}));

export default function App() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid container spacing={1} item xs={12} md={4} lg={3}>
          <Grid item xs={12}>
            <Box sx={{ bgcolor: "primary.main" }}>검색창</Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ bgcolor: "primary.main" }}>롤티어 창</Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ bgcolor: "primary.main" }}>롤토체스 티어 창</Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ bgcolor: "primary.main" }}>개발자 창</Box>
          </Grid>
        </Grid>
        <Grid item lg={9} md={8} xs={12}>
          <Box sx={{ bgcolor: "primary.main" }}>롤 롤토체스 데시보드</Box>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          b
        </Grid>
      </Grid>
    </Box>
  );
}
