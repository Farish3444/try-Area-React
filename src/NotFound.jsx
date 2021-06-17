import React, { Component } from 'react';
import morpheus_meme from '/Users/apple/Desktop/REACTING/reactProjects/project1/try-area/src/morpheus_meme.jpeg';

class NotFound extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <h2>404 Error Page</h2>
                <img  src={morpheus_meme}/>
            </div>
          );
    }
}
 
export default NotFound;