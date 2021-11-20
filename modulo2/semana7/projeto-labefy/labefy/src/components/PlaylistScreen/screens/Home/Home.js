import React from "react";
import SideBar from '../Sidebar/Sidebar';
import CreatePlaylist from "../../features/CreatePlaylist"
import AddTracks from "../../features/AddTracks"
import GeneralFeaturesPlaylists from "../../features/GeneralFeaturesPlaylists"
import { HomePage, MainContainer} from "./StyledHome";
export default class Home extends React.Component {
    state = {
        page: "playlists",
    }

    renderPages = () => {
        switch(this.state.page) {
            case "playlists": 
                return <GeneralFeaturesPlaylists 
                    pageCreatePlaylists={this.pageCreatePlaylists}
                    pageAddTracks = {this.pageAddTracks}
                    playlists={this.state.playlists}
                    getAllPlaylists={this.getAllPlaylists}
                    deletePlaylist={this.deletePlaylist}
   
                />
            case "createPlaylists":
                return <CreatePlaylist 
                    pagePlaylists={this.pagePlaylists}
                    pageAddTracks = {this.pageAddTracks}
                />
            case "addTrack": 
                return <AddTracks />
            default:
                return    
        }
    }

    pagePlaylists = () =>{
        this.setState({ page: "playlists" })
    }

    pageCreatePlaylists = () =>{
        this.setState({ page: "createPlaylists" })
    }

    pageAddTracks = () => {
        this.setState({ page: "addTrack" })
    }

    render() {
        return (
            <HomePage>
            <SideBar 
                pageCreatePlaylists={this.pageCreatePlaylists}
                pagePlaylists={this.pagePlaylists}               
            />
                <MainContainer>
                {this.renderPages()}
                </MainContainer>
               
            </HomePage>
        )
    }
}