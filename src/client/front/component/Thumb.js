import React, { Component } from 'react';

class Thumb extends Component {
  render() {
    return (
      <div className="thumbnail">
      <img src="./src/client/front/component/Etna.jpg" />
        <div className="caption">
          <h3>Thumbnail label</h3>
          <p>Contenuto thumbnail</p>
        </div>
      </div>
    );
  }
}
export default Thumb;
