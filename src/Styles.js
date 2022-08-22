import * as React from "react";
import { Card, CardContent, CardMedia, Grid, Container } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

export const CustomizedContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(8, 0, 6),
}));

export const CustomizedPhotoCamera = styled(PhotoCamera)({
  marginRight: "20px",
});

export const CustomizedGrid = styled(Grid)({
  padding: "20px 0",
});

export const CustomizedCard = styled(Card)({
  height: "100%",
  display: "flex",
  flexDirection: "column",
});

export const CustomizedCardMedia = styled(CardMedia)({
  paddingTop: "56.25%",
});

export const CustomizedCardContent = styled(CardContent)({
  flexGrow: 1,
});
export const CustomizedFooter = styled("footer")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: "50px 0",
}));
