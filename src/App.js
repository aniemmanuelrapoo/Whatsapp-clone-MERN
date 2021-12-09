import './App.css';
import styled from 'styled-components'
import tw from 'twin.macro'
import Sidebar from './component/Sidebar';
import Chat from './component/Chat';
import { useEffect } from 'react';
import Pusher from 'pusher-js';
import axios from 'axios';

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

  // useEffect(() => {
  //   axios.get('/messages/sync')
  //     .then(response => {
  //       console.log(re)
  //     })
  // }, [])

  useEffect(() => {
    const pusher = new Pusher('1210b3fbb4810fdd4c7c', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      alert(JSON.stringify(data));
    });
  }, [])

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
