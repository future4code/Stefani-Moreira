import React from 'react'
import axios from 'axios'
import HomePlaylists from './HomePlaylists'
import UserPlaylists from './UserPlaylists'
import PlaylistsDetails from './PlaylistsDetails'
import CreatePlaylists from './CreatePlaylists'
import Sidebar from './Sidebar'
import { HomePage, MainContainer} from './styles/StyledHome'

const urlApi = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

const headers = {
    headers: {
            Authorization: "stefani-moreira-carver"
    }
}

export default class Home extends React.Component {
    state = {
        playlists: [],
        playlistName: "",
        playlistId: "",
        tracks: [],
        page: "home"
    }

    componentDidMount() {
        this.getAllPlaylists()
    }

    getAllPlaylists = async () => {
        try {
          const res = await axios.get(urlApi, headers);
          this.setState({ playlists: res.data.result.list });
        } catch (err) {
          console.log(err.message);
        }
    };

    deletePlaylist = async (id) => {
        const question = window.confirm(
          "Tem certeza que deseja deletar esta playlist?"
        );
        if (question) {
          try {
            const res = await axios.delete(`${urlApi}/${id}`, headers);
            alert("Playlist deletada");
            this.getAllPlaylists();
            this.pagePlaylists()
            console.log(res.data);
          } catch (err) {
            console.log(err.message);
          }
        }
    };

    getPlaylistTracks = async (id, name) => {
        try {
          const res = await axios.get(`${urlApi}/${id}/tracks`, headers);
          this.setState({
            tracks: res.data.result.tracks,
            playlistName: name,
            playlistId: id,
            page: this.state.page,
          });
          console.log(this.state.tracks);
        } catch (err) {
          console.log(err.response.data.message);
        }
    };


    renderPages = () => {
        switch (this.state.page) {
            case "home":
                return <HomePlaylists 
                    pagePlaylists={this.pagePlaylists}
                    pageDetails={this.pagePlaylistsDetails}
                    pageCreate={this.pageCreatePlaylists}
                    pageAdd={this.pageAddTracks}
                    playlistName={this.state.playlistName}
                    playlistId={this.state.playlistId}
                    tracks={this.state.tracks}
                    getPlaylistTracks={this.getPlaylistTracks}
                    getAllPlaylists={this.getAllPlaylists}
                    playlists={this.state.playlists}
                    deletePlaylist={this.deletePlaylist}
                />
            case "playlists":
                return <UserPlaylists 
                    pagePlaylists={this.pagePlaylists}
                    pageDetails={this.pagePlaylistsDetails}
                    pageCreate={this.pageCreatePlaylists}
                    pageAdd={this.pageAddTracks}
                    playlistName={this.state.playlistName}
                    playlistId={this.state.playlistId}
                    tracks={this.state.tracks}
                    getPlaylistTracks={this.getPlaylistTracks}
                    getAllPlaylists={this.getAllPlaylists}
                    playlists={this.state.playlists}
                    deletePlaylist={this.deletePlaylist}
                />
            case "details":
                return <PlaylistsDetails 
                    pagePlaylists={this.pagePlaylists}
                    pageDetails={this.pagePlaylistsDetails}
                    pageCreate={this.pageCreatePlaylists}
                    pageAdd={this.pageAddTracks}
                    playlistName={this.state.playlistName}
                    playlistId={this.state.playlistId}
                    tracks={this.state.tracks}
                    getPlaylistTracks={this.getPlaylistTracks}
                    getAllPlaylists={this.getAllPlaylists}
                    deletePlaylist={this.deletePlaylist}
                />
            case "create":
                return <CreatePlaylists 
                    pagePlaylists={this.pagePlaylists}
                    pageDetails={this.pagePlaylistsDetails}
                    pageCreate={this.pageCreatePlaylists}
                    pageAdd={this.pageAddTracks}
                    playlistName={this.state.playlistName}
                    playlistId={this.state.playlistId}
                    tracks={this.state.tracks}
                    getPlaylistTracks={this.getPlaylistTracks}
                    getAllPlaylists={this.getAllPlaylists}
                    deletePlaylist={this.deletePlaylist}
                />
            default:
                return    
        }
    }

    pageHome = () =>{
        this.setState({ page: "home" })
    }

    pagePlaylists = () =>{
        this.setState({ page: "playlists" })
    }

    pagePlaylistsDetails = () =>{
        this.setState({ page: "details" })
    }

    pageCreatePlaylists = () =>{
        this.setState({ page: "create" })
    }

    pageAddTracks = () => {
        this.setState({ page: "add" })
    }


    render() {
        return (
            <HomePage>
                <Sidebar 
                    pagePlaylists={this.pagePlaylists}
                    pageDetails={this.pagePlaylistsDetails}
                    pageCreate={this.pageCreatePlaylists}
                    playlistName={this.state.playlistName}
                    playlistId={this.state.playlistId}
                    tracks={this.state.tracks}
                    getPlaylistTracks={this.getPlaylistTracks}
                    getAllPlaylists={this.getAllPlaylists}
                    playlists={this.state.playlists}
                    deletePlaylist={this.deletePlaylist}
                    pageHome={this.pageHome}
                />
                <MainContainer>
                {this.renderPages()}
                </MainContainer>
                
            </HomePage>
        )
    }
}