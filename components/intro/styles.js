import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden; /* To allow scrolling if the text overflows */
  background: black;
`;

export const Col = styled.div`
  height: 100vh;
  width: 3.5vw;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  mix-blend-mode: difference;
`;

export const Text = styled.div`
  color: white;
  mix-blend-mode: difference;
`;
