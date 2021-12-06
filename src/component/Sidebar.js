import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton, Avatar } from '@mui/material';

const SidebarContainer = styled.div`
  ${tw`flex flex-col`}
  flex:0.35;
`
const SidebarHeader = styled.div`
  ${tw`flex`}
`
const SidebarHeaderRight = styled.div`
  ${tw``}
`
const SidebarHeaderLeft = styled.div`
  ${tw``}
`

const Sidebar = () => {
    return (
        <SidebarContainer>
            <SidebarHeader>
                <Avatar src="https://avatars.githubusercontent.com/u/68423036?v=4" />
                <SidebarHeaderRight>
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

                <SidebarHeaderLeft>

                </SidebarHeaderLeft>
            </SidebarHeader>
        </SidebarContainer>
    )
}

export default Sidebar
