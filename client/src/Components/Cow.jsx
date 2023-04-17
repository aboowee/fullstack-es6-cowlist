import React from 'react';

class Cow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
  }

  render() {
    return (
      <div>
        <div>Cow Name: {this.props.cow.name} </div>
        <button onClick={()=>{this.setState({clicked: !this.state.clicked})}}>Learn More!</button>

        {this.state.clicked ? <div class='modal'>
          <div class='popup'>
            <div>Cow Name: {this.props.cow.name} </div>
            <div>Cow Description {this.props.cow.description} </div>
            <button onClick={()=>{this.setState({clicked: !this.state.clicked})}}>Exit</button>
          </div>
        </div> : null}
      </div>
    )
  }
}

export default Cow