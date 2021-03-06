import React, { useState } from 'react'
import {CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select} from '@material-ui/core'
import useStyle from './style'

import PlaceDetails from '../placeDetails/PlaceDetails'

const List = () => {
  const classes=useStyle();
  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState('')

  const places = [
    {name: "Cool place"},
    {name: "Best Beer"},
    {name: "Cool place"},
    {name: "Best Beer"},
    {name: "Cool place"},
    {name: "Best Beer"},
    {name: "Best Steak"}
  ]


  return (
    <div className={classes.container}>
        <Typography> Restaurants, Hotels & Attractions around you</Typography>
        <FormControl className={classes.formControl}>
            <InputLabel>Type</InputLabel>
            <Select value={type} onChange={(e) => setType(e.target.value)}>
                <MenuItem value={0}>All</MenuItem>
                <MenuItem value={3}>above 3.0</MenuItem>
                <MenuItem value={4}>above 4.0</MenuItem>
                <MenuItem value={4.5}>above 4.5</MenuItem>
            </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
            <InputLabel>Rating</InputLabel>
            <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                <MenuItem value='restaurants'>Restaurants</MenuItem>
                <MenuItem value='hotels'>Hotels</MenuItem>
                <MenuItem value='attractions'>Attraction</MenuItem>
            </Select>
        </FormControl>
        <Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => (
              <Grid item key={i} xs={12}>
                  <PlaceDetails place={place} />
              </Grid>
            ))}
        </Grid>
    </div>
  )
}

export default List