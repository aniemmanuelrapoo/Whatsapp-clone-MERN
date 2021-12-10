import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { SearchOutlined } from '@mui/icons-material';
import { IconButton, Avatar } from '@mui/material';
import './style.css'
import SidebarChat from './SidebarChat';

const SidebarContainer = styled.div`
  ${tw`flex flex-col`}
  flex:0.35;
`
const SidebarHeader = styled.div`
  ${tw`flex justify-between p-5 border-r border-gray-300`}
`
const SidebarHeaderRight = styled.div`
  ${tw`flex items-center justify-between`}
  min-width:10vw;
`
const SidebarSearch = styled.div`
  ${tw`flex items-center p-3 mb-2`}
  background-color: #f6f6f6;
  height: 39px;
`
const SidebarSearchContainer = styled.div`
  ${tw`flex items-center bg-white w-full rounded-2xl h-9`}
  input{
    ${tw`border-none outline-none ml-3`}
  }
`
const SidebarChatContainer = styled.div`
  ${tw`flex-1 bg-white overflow-auto`}
  
`

const Sidebar = () => {
    return (
        <SidebarContainer>
            <SidebarHeader>
                <Avatar src="https://avatars.githubusercontent.com/u/68423036?v=4" />
                <SidebarHeaderRight className="sideright">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </SidebarHeaderRight>
            </SidebarHeader>

            <SidebarSearch>
              <SidebarSearchContainer className="search__container">
                <SearchOutlined />
                <input type="text" placeholder="Search or start new chat" />
              </SidebarSearchContainer>
            </SidebarSearch>

            <SidebarChatContainer>
              <SidebarChat name='Kelvin' message="Yo, whats up bro" />
              <SidebarChat name="Mark" message="How are you doing" />
              <SidebarChat name="Rapoo" message="I know you are working" />
            </SidebarChatContainer>
        </SidebarContainer>
    )
}

export default Sidebar
