import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  View,
  Image,
  Share
} from 'react-native'

import { BaseModal } from './baseModal'
import { RoundedButton } from './roundedButton'
import { primaryColor, secondaryColor } from './../config/colors'

class GifModal extends React.Component {
  state = {
    gifImage : ''
  }

  setGifState() {
    const {gifs} = this.props
    if (gifs && gifs.length > 0 && this.state.gifImage === '') {

      const randomIndex = Math.floor( Math.random() * gifs.length )
      const gif = gifs[randomIndex]

      this.setState(() => {
        return { gifImage: gif.images.original.url}
      })
    }
  }

  changeCurrentGif() {
    const {gifs} = this.props
    if (gifs && gifs.length > 0 ) {
      const randomIndex = Math.floor( Math.random() * gifs.length )
      const gif = gifs[randomIndex]

      this.setState(() => {
        return { gifImage: gif.images.original.url}
      })
    }
  }

  shareCurrentGif() {
    Share.share({message: this.state.gifImage})
  }

  render() {
    const {
      style,
      ...restProps
    } = this.props

    this.setGifState()

    return(
      <BaseModal
        {...restProps}
        animationType='slide'
      >
        <View
          style={[styles.modal, style]}
        >
          <Image
            resizeMode='contain'
            style={styles.gif}
            source={{uri: this.state.gifImage}}
          />

          <View style={styles.buttonGroup}>

            <RoundedButton
              size={80}
              icon='debug-step-over'
              color={primaryColor}
              onPress={this.changeCurrentGif.bind(this)}
              style={{marginRight: 16}}/>

            <RoundedButton
              size={80}
              icon='share'
              color={primaryColor}
              onPress={this.shareCurrentGif.bind(this)} />

          </View>
        </View>
      </BaseModal>
    )
  }
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
  gifs: PropTypes.array,
}

export { GifModal }
