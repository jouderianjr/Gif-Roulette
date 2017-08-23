import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const Input = ({ color = '#ccc', onChange, style, fontSize = 48, ...restInput }) => {
  return (
    <TextInput
      {...restInput}
      placeholder={restInput.placeholder}
      onChangeText={onChange}
      placeholderTextColor={color}
      style={[styles.input, {color, fontSize}, style]}
      underlineColorAndroid={color}
    />
  )
}

const styles = StyleSheet.create({
  input : {
    padding : 8,
    marginLeft  : 16,
    marginRight : 16,
    alignSelf: 'stretch',
    fontFamily : 'indieFlower',
    textAlign: 'center'
  },
})

Input.propTypes = {
  onChange    : PropTypes.func,
  placeholder : PropTypes.string,
  value       : PropTypes.string,
  color       : PropTypes.string,
  style       : PropTypes.object,
  fontSize    : PropTypes.number
}

export { Input }
