import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const ChatContainer = styled.div`
  ${tw`flex flex-col`}
  flex:0.65;
`

const Chat = () => {
    return (
        <ChatContainer>
            <h1>i am a chat pack</h1>
        </ChatContainer>
    )
}

export default Chat
