import React from 'react';
import ReactDOM from 'react-dom/client';
import Input from './Components/Input.jsx';
import CowList from './Components/CowList.jsx';
import Axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cows: [],
    }
  }


  getCow () {
    Axios.get('/api/cows')
    .then((data)=>{
      this.setState({cows: data.data});
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  insertCow (cowInfo) {
   Axios.post('/api/cows', {
    cow: cowInfo.name,
    description: cowInfo.description
   })
   .then((data)=>{
    this.getCow();
   })
  }

  componentDidMount() {
    this.getCow();
  }

  render() {
    return (
      <div>
        <h1> COW LIST MOOOOOOO </h1>
        <Input insertCow={this.insertCow.bind(this)}/>
        <CowList cows={this.state.cows}/>
      </div>
    )
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);