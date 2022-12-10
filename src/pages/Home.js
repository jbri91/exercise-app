import React, { useState } from 'react'
import { Box } from '@mui/material';
import { HeroBanner } from '../components/HeroBanner';
import { SearchExercises } from '../components/SearchExercises';
import { Exercises } from '../components/Exercises';


export const Home = () => {
    const [bodyPart, setBodyPart] = useState('all');
    const [exercises, setExercises] = useState([]);
    
    console.log(bodyPart)
    return (
        <Box>
            <HeroBanner />
            <SearchExercises 
                setExercises={setExercises}
                setBodyPart={setBodyPart}
                bodyPart={bodyPart}/>
            <Exercises 
            setExercises={setExercises}
            exercises={exercises}
            bodyPart={bodyPart}/>
        </Box>
    )
}

