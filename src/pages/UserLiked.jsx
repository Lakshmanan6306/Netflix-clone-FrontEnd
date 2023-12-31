import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserLikedMovies } from '../store';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utlis/firebase-config';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import Card from '../components/Card';

function UserLiked() {
    const [isScrolled, setIsScrolled] = useState(false);

    const navigate = useNavigate();

    const movies = useSelector((state)=>state.netflix.movies);
    console.log(movies)
    const dispatch = useDispatch();
  
    const [email, setEmail] = useState(undefined);

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) {
      setEmail(currentUser.email);
    } else {
      navigate("/login");
    }
  });

   useEffect(() => {
    if(email) {
       dispatch(getUserLikedMovies(email));
    }  
    }, [email,dispatch]);

    
      window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
      };
  return (
    <Container>
         <Navbar isScrolled={isScrolled} />
      <div className="content flex column">
        <h1>My List</h1>
        <div className="grid flex">
          {movies ? (movies.map((movie, index) => {
            return (
              <Card
                movieData={movie}
                index={index}
                key={movie.id}
                isliked={true}
              />
            );
          })) : <h3>No movies in your visitlist</h3>}
        </div>
      </div>
    </Container>
  )
}

export default UserLiked;

const Container = styled.div`
  .content {
    margin: 2.3rem;
    margin-top: 8rem;
    gap: 3rem;
    h1 {
      margin-left: 3rem;
    }
    .grid {
      flex-wrap: wrap;
      gap: 1rem;
    }
  }
`;