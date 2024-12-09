import styled, { keyframes } from "styled-components";
import "./App.css";

const Father = styled.div`
  display: flex;
`;

// const Btn = styled.button`
//   color: white;
//   background-color: tomato;
//   border: 0;
//   border-radius: 15px;
// `;

// const Input = styled.input.attrs({ required: true })`
//   background-color: tomato;
// `;

const rotationAnimation = keyframes`
  /* from{
    transform: rotate(0deg);
  }to{
    transform: rotate(360deg);
  } */
  0%{
    transform: rotate(0deg);
    border-radius: 0;
  }
  50%{
    transform: rotate(360deg);
    border-radius: 100px;
  }
  100%{
    transform: rotate(0deg);
    border-radius: 0;
  }
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 5s linear infinite;

  span {
    font-size: 36px;
    transition: 0.3s ease;

    &:hover {
      font-size: 72px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Father>
      {/* <Btn>Login</Btn>
      <Btn as="a" href="/">w
        Login
      </Btn>
      <Input /> */}
      <Box>
        <span>🌎</span>
      </Box>
    </Father>
  );
}

export default App;
