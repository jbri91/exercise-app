import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { fetchData, exerciseOptions } from '../utils/fetchData'
import { HorizontalScrollBar } from "./HorizontalScrollBar";

export const SearchExercises = ({ setExercises, bodyPart, setBodPart }) => {
    const [search, setSearch] = useState('')
    const [bodyParts, setBodyParts] = useState([])

    useEffect(() => {
        const fetchExercisesData = async () => {
                const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)

                setBodyParts(['all', ...bodyPartsData]);
        
            }   
    }, [])


    const handleSearch = async () => {
        if(search) {
          console.log('Testing...')
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            
            const searchedExercises = exercisesData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
            );

            setSearch('')
            setExercises(searchedExercises)
        }
    }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: {
            lg: "44px",
            xs: "30px",
          },
        }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700px",
              border: "none",
              borderRadiues: "4px",
            },
            width: {lg: '800px', xs: '350px'},
            backgroundColor: '#fff',
            borderRadiues: '40px'
          }}
          height="76px"
          value={search}
          onChange={(e) => {setSearch(e.target.value.toLowerCase())}}
          placeholder="Search Exercises"
          type="text"
        />
        <Button className='search-btn'
            sx={{
                bgcolor: '#FF2625', 
                color: '#fff',
                textTransform: 'none',
                width: {lg : '175px', xs: '12px'},
                height: '56px',
                position: 'absolute',
                right: 0
            }}
            onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', P: '20PX'}}>
        <HorizontalScrollBar 
        data={bodyParts}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
         />
      </Box>
    </Stack>
  );
};
