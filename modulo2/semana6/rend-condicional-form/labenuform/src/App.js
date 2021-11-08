import React from 'react';
import Page1 from './components/FormPages/Page1'
import Page2 from './components/FormPages/Page2'
import Page3 from './components/FormPages/Page3'
import Page4 from './components/FormPages/Page4'
import { GlobalStyle, MainContainer } from './StyledApp';

class App extends React.Component {
  state = {
    form: 1,
  }

  renderPageForms = () => {
    switch(this.state.form) {
      case 1: 
        return <Page1/>
      case 2: 
        return <Page2/>
      case 3: 
        return <Page3/>
      case 4: 
        return <Page4/>
      default:  
    }
  }

  nextPage = () => {
    const nextForm = this.state.form + 1
    this.setState({ form: nextForm })
  }

  prevPage =  () => {
    const prevForm = this.state.form - 1
    if(this.state.form !== 1) {
      return this.setState({ form: prevForm })
    }
  }

  showButtons = () => {
    if(this.state.form === 1) {
      return <button onClick={ this.nextPage }>Próximo</button> 
    } else if (this.state.form > 1 && this.state.form < 4) {
      return <div>
        <button onClick={ this.prevPage }>Anterior</button>
        <button onClick={ this.nextPage }>Próximo</button>
      </div>
    } 
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <MainContainer>
          { this.renderPageForms() }
          { this.showButtons() }
        </MainContainer>
      </div>
    )
  }
}

export default App;
