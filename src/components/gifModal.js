import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  View,
  Image,
} from 'react-native'

import { BaseModal } from './baseModal'
import { RoundedButton } from './roundedButton'
import { primaryColor, secondaryColor } from './../config/colors'

const GifModal = props => {
  const {
    style,
    gif,
    onChangeImagePress,
    onSharePress,
    ...restProps
  } = props

  return(
    <BaseModal
      {...restProps}
      animationType='slide'
    >
      {gif !== '' &&
        <View
          style={[styles.modal, style]}
        >
          <Image
            resizeMode='contain'
            style={styles.gif}
            source={{uri: gif}}
          />
          <View style={styles.buttonGroup}>

            <RoundedButton
              size={80}
              icon='debug-step-over'
              color={primaryColor}
              onPress={onChangeImagePress}
              style={{marginRight: 16}}/>

            <RoundedButton
              size={80}
              icon='share'
              color={primaryColor}
              onPress={onSharePress} />
          </View>
        </View>}
    </BaseModal>
  )
}

const styles = StyleSheet.create({
  modal : {
    backgroundColor : secondaryColor,
    flex : 1,
    justifyContent : 'center',
  },
  gif : {
    marginLeft: 32,
    marginRight: 32,
    height: 300,
  },
  buttonGroup : {
    marginTop: 16,
    flexDirection : 'row',
    justifyContent : 'center'
  }
})

GifModal.propTypes = {
  style: PropTypes.object,
  gif: PropTypes.string.isRequired,
  onChangeImagePress: PropTypes.func,
  onSharePress: PropTypes.func,
  onLoad: PropTypes.func
}

export { GifModal }
