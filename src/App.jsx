import React from "react";
import {
  Typography,
  AppBar,
  CardActions,
  CssBaseline,
  Button,
  Grid,
  Toolbar,
  Container,
} from "@mui/material";
import {
  CustomizedPhotoCamera,
  CustomizedGrid,
  CustomizedCard,
  CustomizedCardMedia,
  CustomizedCardContent,
  CustomizedContainer,
  CustomizedFooter
} from "./Styles";

const App = () => {

  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9,]

  return (
    <div>
      <>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <CustomizedPhotoCamera />
            <Typography variant="h6">Photo</Typography>
          </Toolbar>
        </AppBar>
        <main>
          <div>
            <CustomizedContainer maxWidth="sm">
              <Typography
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Photo Album
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Hello everyone, I'm learning MUI for the first time and it's
                quite interesting to work with
              </Typography>

              <div>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      See my photos
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      See my photos
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </CustomizedContainer>
          </div>
          <Container maxWidth="md">
            <Grid container spacing={4}>
              {cards.map((card) => (

                <CustomizedGrid item key={card} xs={12} sm={6} md={4}>
                  <CustomizedCard>
                    <CustomizedCardMedia
                      image="https://source.unsplash.com/random"
                      title="Image title"
                    />
                    <CustomizedCardContent>
                      <Typography variant="h5" gutterBottom>
                        Heading
                      </Typography>
                    </CustomizedCardContent>
                    <CardActions>
                      <Button size="small" color="primary">View</Button>
                      <Button size="small" color="primary">Edit</Button>
                    </CardActions>
                  </CustomizedCard>
                </CustomizedGrid>
              ))}
            </Grid>
          </Container>
        </main>
        <CustomizedFooter>
          <Typography variant="h6" align="center" gutterBottom>Footer</Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" gutterBottom>Something to get the footer a purpose</Typography>
        </CustomizedFooter>
      </>
    </div>
  );
};

export default App;
