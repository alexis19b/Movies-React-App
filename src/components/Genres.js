import { Chip } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect } from 'react';

export const Genres = ({type, selectedGenres, setSelectedGenres, genres,setGenres, setPage}) => {
  
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g)=> g.id !== genre.id));
    setPage(1);
  }

  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected)=> selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  const fetchGenres = async()=>{
    const { data } = await axios(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    setGenres(data.genres)
    
  }

  useEffect(() => {
   fetchGenres();
  
   //desmontar el componente y limpiarlo
  //  return ()=> {
  //    setGenres({});
  //  };
  //eslint-disable-next-line
  }, [])

  return (
    <div style={{ padding: "6px 0"}}>
      {
        selectedGenres &&
        selectedGenres.map((genre) => (
          <Chip 
            key={genre.id} 
            label={genre.name}
            color='primary' 
            style={{margin: 3}} 
            clickable
            onDelete={()=>handleRemove(genre)}
            
          />
        ))
      }
       {
        genres &&
        genres.map((genre) => (
          <Chip 
            key={genre.id} 
            label={genre.name} 
            style={{margin: 3}} 
            clickable
            onClick={()=> handleAdd(genre)}
          />
        ))
      }
        </div>
  )
}
