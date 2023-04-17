import React from 'react';
import Cow from './Cow.jsx';

class CowList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      this.props.cows.map((cow)=>(
        <Cow cow={cow} key={cow.id}/>
      ))
    )
  }
}

export default CowList