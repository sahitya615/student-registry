import React, { Component } from 'react'
import { NewMusicList } from './musicMock'
import './music.css'

class music extends Component {
    constructor() {
        super();
        this.state = {
            musicList: NewMusicList,
            play: false,
            name: "",
            index: 0
        }
    }
    toggleHandler = (ind) => {
        const { index, play } = this.state;
        (play && index === ind) ? this.pauseHandler(ind) : this.playHandler(ind)
    }
    playHandler = (ind) => {
        console.log(ind)
        this.audio && this.audio.pause()
        const { musicList } = this.state
        const songIndex = musicList.find((song, i) => i === ind)
        this.currentIndex = ind
        this.audio = new Audio(songIndex.song);
        this.setState({ play: true, pause: false, name: songIndex.name, index: ind })
        this.audio.play()

    }
    pauseHandler = (ind) => {
        const { index } = this.state;
        if (this.currentIndex && this.currentIndex === ind || index === ind) {
            this.setState({ play: false, pause: true })
            this.audio.pause()
        }
    }
    render() {
        return (
            <div>
                <h4 className="title-name">{this.state.name}</h4>

                <ul>
                    {this.state.musicList.map((song, index) => {
                        return <li>
                            <button className="music-btn" onClick={() => this.toggleHandler(index)}>
                                {this.state.play && this.state.index === index ? <i class="fas fa-pause-circle"></i> : <i class="fas fa-play-circle"></i>}
                            </button>
                            <span className="song-name">{song.name}</span>
                        </li>
                    })}
                    </ul>
            </div>

        )
    }
}
export default music;