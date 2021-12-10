import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { Avatar } from '@mui/material';


const SidebarChatContainer = styled.div`
  ${tw`flex p-5 cursor-pointer`}
  border-bottom: 1px solid #f2f2f2;
  &:hover{
    background-color:#ebebeb;
  }
`
const SidebarChatInfo = styled.div`
  ${tw`ml-4`}
  h2{
      ${tw`font-bold text-base mb-2`}
  }
  
`

const SidebarChat = ({ name, message }) => {
    return (
        <SidebarChatContainer>
            <Avatar />
            <SidebarChatInfo>
                <h2>{name}</h2>
                <p>{message}</p>
            </SidebarChatInfo>
        </SidebarChatContainer>
    )
}

export default SidebarChat
