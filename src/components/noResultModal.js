import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

import { BaseModal } from './baseModal'
import { primaryColor, secondaryColor } from './../config/colors'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'

const NoResultModal = props => {
  const {
    ...restProps
  } = props

  return(
    <BaseModal
      {...restProps}
      animationType='slide'
    >
      <View style={styles.modal}>
        <Icon
          name='emoticon-sad'
          size={200}
          color={primaryColor}
        />
        <Text style={styles.title}>No Gifs for you</Text>
      </View>
    </BaseModal>
  )
}

const styles = StyleSheet.create({
  modal : {
    backgroundColor : secondaryColor,
    flex : 1,
    marginTop: 100,
    alignItems : 'center'
  },
  title : {
    fontFamily : 'indieFlower',
    fontSize : 40,
    color: primaryColor
  }
})

NoResultModal.propTypes = {
  style: PropTypes.object,
}

export { NoResultModal }
