/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types'

class Button extends Component {
    static PropTypes = {
        label: PropTypes.string.isRequired,
        action: PropTypes.func,
    }

    render() {
    const {label, action} = this.props;
    return (
      <TouchableOpacity style={styles.btn} onPress={this.props.action}>
        <Text style={styles.btnTxt}>{this.props.label}</Text>
      </TouchableOpacity>
    );
  }
}
/*Function ButtonCustom (props){
const {label, action } = props;
    return (
      <TouchableOpacity style={styles.btn} onPress={this.props.action}>
        <Text style={styles.btnTxt}>{this.props.label}</Text>
      </TouchableOpacity>
    );
}


segunda forma de utilizar los prop types
ButtonCustom.propTypes = {
     label: PropTypes.string,
        action: PropTypes.func,
}

*/
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
export default Button;
