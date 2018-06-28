import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyB2seYRLnl7LvDOHcIy0MX_cRu9sm7NcrQ';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ 
        videos,
        selectedVideo: videos[0]
       });
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch} />
        <VideoList videos={this.state.videos} />
        <VideoDetail video={this.state.videos[0]}/>
      </div>
    );
  }
}
  

// Take this component's generated HTML and put it
// in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
