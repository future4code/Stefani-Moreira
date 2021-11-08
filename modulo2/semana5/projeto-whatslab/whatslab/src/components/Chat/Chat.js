import React from 'react';
import { MessageContainer, MessageContainerMe, UserName, MessageArea, InputName, InputMessage, ButtonChat  } from './StyledChat'
import SendIcon from '../../image/send_black_24dp.svg'

class  Chat extends React.Component {
  state = {
    chat: [],
    inputUserName: "",
    inputUserMessage: "",
  }

  sendMessage = () => { 
    const newMessage = {
      userName: this.state.inputUserName,
      userMessage: this.state.inputUserMessage,
      id: Math.random()
    }
    const showNewMessage = [ ...this.state.chat, newMessage]

    this.setState({ chat: showNewMessage });
    this.setState({ inputUserName:"", inputUserMessage:""});
  };

  keyEnter = (event) => {
    if(event.key === "Enter") {
      this.sendMessage()
    } 
  }

  deleteMessage = (indextoDelete) => {
      const chatArea = [...this.state.chat];
      const textUser = chatArea.filter((text) => {
          return text.id !== indextoDelete;
      })
      this.setState({ chat: textUser})
  }

  onChangeUserName = (event) => {
    this.setState({ inputUserName: event.target.value })
  }

  onChangeUserMessage = (event) => {
    this.setState({ inputUserMessage: event.target.value })
  }

  render() {
    const showMessages = this.state.chat.map((item, index) => {
        if(item.userName.toLowerCase() === "eu") {
            return (
                <MessageContainerMe onDoubleClick={() => this.deleteMessage(item.id)} key={ index }>
                    { item.userMessage }
                </MessageContainerMe>
            )
        } else {
            return (
                <MessageContainer onDoubleClick={() => this.deleteMessage(item.id)} key={ index }>
                    <UserName>{ item.userName }</UserName>
                    { item.userMessage }
                </MessageContainer>
            )
        }
    });

    const usersMessages = 
    <MessageArea>
      <InputName 
        value={ this.state.inputUserName}
        onChange={ this.onChangeUserName }
        placeholder={"Usuário"}
      />
      <InputMessage 
        value={ this.state.inputUserMessage}
        onChange={ this.onChangeUserMessage }
        placeholder={"Digite sua mensagem"}
        onKeyPress={this.keyEnter}
      />
      <ButtonChat onClick={this.sendMessage} src={ SendIcon } alt="Ícone de enviar mensagem"/>
    </MessageArea>

    return (
      <div>
          {showMessages}
          {usersMessages}
      </div>
      
    )
  }
}

export default Chat