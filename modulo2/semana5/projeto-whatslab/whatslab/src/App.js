import React from 'react';
import Chat from './components/Chat/Chat'
import { GlobalStyle, ChatContainer} from './StyledApp'

function App () {
    return (
      <div>
        <GlobalStyle />
        <ChatContainer>
          <Chat/>
        </ChatContainer>
      </div>
    )
}
export default App