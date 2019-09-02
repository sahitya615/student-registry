import React, { Component } from 'react';
import Student from './component/Students/student'
import PostList from './component/postList/postList'
import ClickIncrement from './component/hoccomponent/clickcounter'
import MouseIcncrement from './component/hoccomponent/hovercounter'
import Music from './component/musicApp/music'

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }


  render() {

    return (
      <div>
        <Student />
        <hr/>
        <PostList />
        <hr />
        <ClickIncrement />
        <MouseIcncrement />
        <hr />
        <Music />
      </div>

    )
  }
}

export default App;
