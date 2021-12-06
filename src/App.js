import './App.css';
import styled from 'styled-components'
import tw from 'twin.macro'
import Sidebar from './component/Sidebar';
import Chat from './component/Chat';

const AppContainer = styled.div`
   ${tw`grid place-items-center h-screen`}
   background-color:#dadbd3;
`
const AppBody = styled.div`
  ${tw`flex`}
  background-color: #ededed;
  margin-top:-50px;
  height: 90vh;
  width: 90vw;
  box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.75);
`

function App() {
  return (
      <AppContainer>
        <AppBody>
          <Sidebar />
          <Chat />
        </AppBody>
      </AppContainer>
  );
}

export default App;
