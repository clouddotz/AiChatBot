import React from 'react'
import {chatbot} from 'react-chatbot-kit'
import ActionProvider from '../../ActionProvider'
import MessageParser from '../../MessageParser'
import Config from '../../Config'


const ChatInterface = () => {
  return (
    <div>
        <chatbot Config={Config}
         messageParser={MessageParser}
         actionProvider={ActionProvider}
        />
      
    </div>
  )
}

export default ChatInterface
