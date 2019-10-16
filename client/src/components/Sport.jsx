import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import "./sport.css"

const change = {
    width:"204 px"
};



export default function Sport() {
return (
    <Grid item>
        <div><h3 class="header">Pick a Sport!</h3></div>
    <ButtonGroup
      color="secondary"
      size="large"
      aria-label="large secondary button group"
      class = "center"
     

    >
      <Button class="one">Football</Button>
      <Button class="two">Hockey</Button>
      <Button class ="three">Baseball</Button>
    </ButtonGroup>
  </Grid>
    
);
}