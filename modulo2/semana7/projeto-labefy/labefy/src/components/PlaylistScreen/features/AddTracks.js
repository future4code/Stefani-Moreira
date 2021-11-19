import React from 'react';
import axios from 'axios';
import { urlApi, headers } from "../../api";

export default class AddTrack extends React.Component {
    state = {
        name: "",
        artist: "",
        urlTrack: ""
    } 

    onChangeName = (event) => {
        this.setState({ name: event.target.value })
    } 

    onChangeArtist = (event) => {
        this.setState({ artist: event.target.value })
    } 
    onChangeURL = (event) => {
        this.setState({ urlTrack: event.target.value })
    } 

    addTrackToPlaylist = async (id) => {
        const body = {
            name: this.state.name,
            artist: this.state.artist,
            url: this.state.urlTrack
        }
        try {
            const res = await axios.post(`${urlApi}/${id}/tracks`, body, headers)

            alert("Musica adicionada");
            console.log(res.data);
            this.setState({ name: "", artist:"", urlTrack:"" });
            this.props.getPlaylistTracks()
        }catch (err) {
            alert(err.message)
            console.log(err.message)
        }
        
    }

    render() {
        return (
            <div>
                <input 
                    placeholder={"Informe o nome da música"}
                    value={this.state.name}
                    onChange={this.onChangeName}
                />
                <input 
                    placeholder={"Informe o artista da música"}
                    value={this.state.artist}
                    onChange={this.onChangeArtist}
                />
                <input 
                    placeholder={"Informe a url da música"}
                    value={this.state.urlTrack}
                    onChange={this.onChangeURL}
                />
                <button onClick={this.addTrackToPlaylist}>Adicionar</button>
            </div>
        )
    }
}