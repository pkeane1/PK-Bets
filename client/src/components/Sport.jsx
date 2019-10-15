import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export default function Sport() {
return (
    <Grid item>
    <ButtonGroup
      color="secondary"
      size="large"
      aria-label="large outlined secondary button group"
    >
      <Button>Football</Button>
      <Button>Hockey</Button>
      <Button>Baseball</Button>
    </ButtonGroup>
  </Grid>
    
);
}