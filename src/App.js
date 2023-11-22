import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Spinner } from 'reactstrap';

function Boton(props){
  return (
    <Button color={props.color} onClick={props.cambia}>
      {props.nombre}
    </Button>
  )
}

const Circulo = (props) =>{
  return(
    <Spinner color={props.color}>
    </Spinner>
  )
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      letrero:"",
      color:""
    }
  }

  cambiaIngles(){
    this.setState({letrero:"Hello, how are you today?"});
    this.setState({color:"secondary"})
  }

  cambiaAleman(){
    this.setState({letrero:"Hallo, wie geht es dir?"});
    this.setState({color:"danger"})
  }

  cambiaEspañol(){
    this.setState({letrero:"Hola, ¿qué tal estas?"});
    this.setState({color:"primary"})
  }

  render() {
    return (
      <div className="App">
        <h1><Circulo color={this.state.color} type="grow"/>color:{this.state.color}</h1>
        <Boton color="secondary" nombre={"secondary"} cambia={()=>this.cambiaIngles()}/>
        <Boton color="danger" nombre={"danger"} cambia={()=>this.cambiaAleman()}/>
        <Boton color="primary" nombre={"primary"} cambia={()=>this.cambiaEspañol()}/>
      </div>
    );
  }
}

export default App;
