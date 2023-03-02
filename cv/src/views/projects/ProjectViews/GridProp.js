import { Container, Grid, Paper } from '@mui/material'
import React from 'react'

function GridProp({paragraph,label}) {
  return (
    <Container>
    <Grid>
        <Grid item xs={12} sm={6}lg={4}><Paper>{label}</Paper></Grid>
        <Grid item xs={12} sm={6}lg={4}><Paper>{paragraph}</Paper></Grid>
        <Grid item xs={12} sm={6}lg={4}><Paper>{label}</Paper></Grid>
        <Grid item xs={12} sm={6}lg={4}><Paper>{paragraph}</Paper></Grid>
    </Grid>
    </Container>
  )
}

export default GridProp