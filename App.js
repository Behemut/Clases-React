import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import CustomButton from './components/button';

class App extends Component {
  //DECLARACION DE STATE

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
    //practica para los state para que no se pierda el contexto del componente
    this.handleAumentar = this.handleAumentar.bind(this);
    this.handleDisminuir = this.handleDisminuir.bind(this);
  }

  handleAumentar() {
    //Obteniendo el valor del objecto actualmente
    const {counter: ct} = this.state;

    //Configurando el valor de counter con el alias 'ct'
    this.setState({counter: ct + 1});
  }
  handleDisminuir() {
    //Obteniendo el valor del objecto actualmente
    const {counter: ct} = this.state;

    //Configurando el valor de counter con el alias 'ct'
    this.setState(
      {
        counter: ct - 1,
      },
      //Seteando a cero con un callback
      () => this.setState({counter: 0}),
    );
  }

  render() {
    //Tomando la propiedad counter
    const {counter} = this.state;

    //Funcion se ejecuta con cada toque this.handle
    //Funcion se ejecuta desde que inicia el run  this.handle()
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <CustomButton label="-" action={this.handleDisminuir} />

          <View style={styles.counterContainer}>
            <Text style={styles.counter}>{counter}</Text>
          </View>

          <CustomButton label="+" action={this.handleAumentar} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
    justifyContent: 'center',
  },
  subContainer: {
    height: 50,
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  btn: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  btnTxt: {
    fontSize: 25,
    color: '#bdc3c7',
    fontWeight: 'bold',
  },
  counterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    fontSize: 25,
    color: '#ecf0f1',
    fontWeight: 'bold',
  },
});

export default App;
