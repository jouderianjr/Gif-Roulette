import React from 'react'
import PropTypes from 'prop-types'
import {
  Modal,
  StyleSheet,
  View,
  ActivityIndicator
} from 'react-native'

import { primaryColor, secondaryColor } from './../config/colors'

const LoadingModal = ({style, ...props}) => {
  return (
    <Modal
      style={{backgroundColor: 'transparent'}}
      {...props}
      animationType='fade'
      transparent={true}
    >
      <View style={[styles.modal, style]} >
        <ActivityIndicator color={primaryColor} size={80} />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modal : {
    backgroundColor : 'rgba(100,100,100, 0.8)',
    opacity: 1,
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  }
})

LoadingModal.propTypes = {
  style: PropTypes.object
}

export { LoadingModal }
