import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      cowName: '',
      description: ''
    }
  }

  cowNameHandler (input) {
    this.setState({cowName: input})
  }

  cowDescHandler (input) {
    this.setState({description: input})
  }

  render() {
    return (
      <form>
        <div>Cow Name: </div>
        <input type='text' onChange={(e)=>{
          this.cowNameHandler(e.target.value)
        }}></input>
        <div>Cow Description: </div>
        <textarea rows = "5" cols = "60" onChange={(e)=>{
          this.cowDescHandler(e.target.value)
        }}></textarea>
        <input type="submit" onClick={(event)=>{
          this.props.insertCow({name: this.state.cowName, description: this.state.description});
          event.preventDefault();
          }}/>
      </form>
    )
  }
}

export default Input;