import React, {Component} from 'react'
import { CommentContainer, InputComentario } from './StyledSecaoComentario'


export class SecaoComentario extends Component {
	state = {
		novoComentario: ' '
	}

	onChangeComentario = (event) => {
		this.setState({novoComentario: event.target.value})
		console.log(event.target.value)
	}

	render() {
		return <CommentContainer>
			<InputComentario
				placeholder={'Comentário'}
				value={this.state.novoComentario}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</CommentContainer>
	}
}
