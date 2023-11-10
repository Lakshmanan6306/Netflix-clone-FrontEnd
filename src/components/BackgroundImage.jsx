import React from "react";
import styled from "styled-components";
import background from "../assest/login-1.jpg";

function BackgroundImage() {
  return (
    <Container>
      <img src={background} alt="background" />
    </Container>
  );
}

export default BackgroundImage;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  img {
    height: 100vh;
    width: 100vw;
  }
`;
