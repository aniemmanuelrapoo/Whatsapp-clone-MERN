import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { SearchOutlined } from '@mui/icons-material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ChatContainer = styled.div`
  ${tw`flex flex-col`}
  flex:0.65;
`
const ChatHeader = styled.div`
  ${tw`flex items-center p-5 border-b border-gray-300`}
`
const ChatHeaderInfo = styled.div`
  ${tw`flex-1 pl-5`}
  h3{
      ${tw`font-medium mb-1`}
  }
  p{
      ${tw`text-gray-500`}
  }
`
const ChatHeaderRight = styled.div`
  ${tw``}
`
const ChatBody = styled.div`
  ${tw`flex-1 p-8 overflow-auto`}
  background-image: url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png");
  background-repeat: repeat;
  background-position: center;
`
const ChatBodyMessage = styled.p`
  ${tw`relative text-base p-3 rounded-xl bg-white mb-8`}
  width: fit-content;
`
const ChatReciverMessage = styled.p`
  ${tw`relative text-base p-3 rounded-xl bg-white mb-8 ml-auto`}
  width: fit-content;
  background-color:#dcf8c6;
`
const ChatBodyUser = styled.span`
  ${tw`absolute font-extrabold`}
  top: -20px;
  font-size: xx-small;
`
const ChatBodyTime = styled.span`
  ${tw`ml-2.5`}
  font-size: xx-small;
`

const Chat = () => {
    return (
        <ChatContainer>
            <ChatHeader>
                <Avatar />

                <ChatHeaderInfo>
                    <h3>Room name</h3>
                    <p>last seen at...</p>
                </ChatHeaderInfo>

                <ChatHeaderRight>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </ChatHeaderRight>
            </ChatHeader>

            <ChatBody>
                <ChatBodyMessage>
                    <ChatBodyUser>
                        Rapoo
                    </ChatBodyUser>
                    this is a message
                    <ChatBodyTime>
                        {new Date().toUTCString()}
                    </ChatBodyTime>
                </ChatBodyMessage>

                <ChatReciverMessage>
                    <ChatBodyUser>
                        Rapoo
                    </ChatBodyUser>
                    this is a message
                    <ChatBodyTime>
                        {new Date().toUTCString()}
                    </ChatBodyTime>
                </ChatReciverMessage>

                <ChatBodyMessage>
                    <ChatBodyUser>
                        Rapoo
                    </ChatBodyUser>
                    this is a message
                    <ChatBodyTime>
                        {new Date().toUTCString()}
                    </ChatBodyTime>
                </ChatBodyMessage>
                
            </ChatBody>
        </ChatContainer>
    )
}

export default Chat
