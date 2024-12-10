import styled from "styled-components";
import "./App.css";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

// const rotationAnimation = keyframes`
//   0%{
//     transform: rotate(0deg);
//     border-radius: 0;
//   }
//   50%{
//     transform: rotate(360deg);
//     border-radius: 100px;
//   }
//   100%{
//     transform: rotate(0deg);
//     border-radius: 0;
//   }
// `;

// const Emoji = styled.span`
//   font-size: 36px;
// `;

// const Box = styled.div`
//   width: 200px;
//   height: 200px;
//   background-color: tomato;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   animation: ${rotationAnimation} 5s linear infinite;

//   ${Emoji} {
//     transition: 0.3s ease;
//     &:hover {
//       font-size: 98px;
//     }
//     &:active {
//       opacity: 0;
//     }
//   }
// `;

function App() {
  return (
    <Wrapper>
      <Title>Hello</Title>
    </Wrapper>
  );
}

export default App;
