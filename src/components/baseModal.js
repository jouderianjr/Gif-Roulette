import React from 'react'
import PropTypes from 'prop-types'
import {
  Modal,
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback
} from 'react-native'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'


import { primaryColor, secondaryColor } from './../config/colors'

const BaseModal = props => {
  const {
    children,
    animationType = 'slide',
    style,
    hasCloseBtn = true,
    onCloseClickBtn,
    ...restProps
  } = props

  return (
    <Modal
      {...props}
      animationType={animationType}
    >
      <View style={[styles.modal, style]} >
        {hasCloseBtn &&
          <TouchableWithoutFeedback onPress={() => onCloseClickBtn && onCloseClickBtn()}>
            <Icon color={primaryColor} style={styles.closeBtn} size={40} name='close'/>
          </TouchableWithoutFeedback>}
        {children}
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modal : {
    backgroundColor : secondaryColor,
    flex : 1,
    justifyContent : 'center',
  },
  closeBtn : {
    marginTop : 8,
    marginRight: 8,
    alignSelf: 'flex-end'
  }
})

BaseModal.propTypes = {
  style: PropTypes.object
}

export { BaseModal }
