import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button } from 'reactstrap';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {' '}
        <Button color="success">
          Inglés
        </Button>
        {' '}
        <Button color="primary">
          Alemán
        </Button>
        {' '}
        <Button color='danger'>
          Sueco
        </Button>
        {' '}
        <Button color="success">
        Español
        </Button>
      </div>
    );
  }
}

export default App;
