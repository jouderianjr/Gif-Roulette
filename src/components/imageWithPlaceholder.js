import React from 'react'
import {
  View,
  Image,
  ActivityIndicator,
  StyleSheet
} from 'react-native'
import { primaryColor } from './../config/colors'

const ImageWithPlaceholder = ({isLoading, style, src}) => {
  if (isLoading) {
    return (
      <View style={style}>
        <ActivityIndicator color={primaryColor} size={80} />
      </View>
    )
  }

  return (
    <Image
      resizeMode='contain'
      style={style}
      source={{uri: src}}
    />
  )
}

const style = {

}

export { ImageWithPlaceholder }
