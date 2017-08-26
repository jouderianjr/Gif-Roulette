import React, { Component } from 'react'
import { StyleSheet, View, Text, Share } from 'react-native'
import { searchGif } from './api'
import { primaryColor, secondaryColor } from './config/colors'

import {
  RoundedButton,
  Input,
  GifModal,
  LoadingModal,
  NoResultModal
} from './components'

class MainScreen extends Component {
  state = {
    isLoading           : false,
    isGifModalOpen      : false,
    isNoResultModalOpen : false,
    searchText          : '',
    gifs                : [],
    currentGif          : ''
  }

  searchGif () {
    this.setState({isLoading:true})
    searchGif(this.state.searchText)
      .then((result) => {

        if(result.length === 0) {

          this.setState({
            isNoResultModalOpen:true,
            isLoading:false
          })

        } else {
          this.setState({
            gifs: result,
            isLoading: false,
            isGifModalOpen:true
          })

          this.setCurrentGifRandomically()

        }
      })
  }

  setCurrentGifRandomically() {
    const {gifs} = this.state
    if (gifs && gifs.length > 0 ) {
      const randomIndex = Math.floor( Math.random() * gifs.length )
      const gif = gifs[randomIndex]

      this.setState(() => {
        return { currentGif: gif.images.original.url}
      })
    }
  }

  onSharePress() {
    Share.share({message: this.state.currentGif})
  }

  closeGifModal() {
    this.setState(() => {
      return {isGifModalOpen:false}
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <GifModal
          visible={this.state.isGifModalOpen}
          onCloseClickBtn={this.closeGifModal.bind(this)}
          onChangeImagePress={this.setCurrentGifRandomically.bind(this)}
          onSharePress={this.onSharePress.bind(this)}
          gif={this.state.currentGif}
        />

        <NoResultModal
          onCloseClickBtn={() => this.setState({isNoResultModalOpen: false})}
          visible={this.state.isNoResultModalOpen}
        />

        <LoadingModal
          visible={this.state.isLoading}
          onRequestClose={() => {}}
        />

        <Text style={styles.header}>Gif Roulette</Text>
        <View style={styles.form}>
          <Input
            color={primaryColor}
            style={{marginBottom: 80}}
            placeholder='Type your search here!'
            fontSize={36}
            onChange={(searchText) => this.setState({searchText})}/>
          <RoundedButton
            size={120}
            text={'GO!'}
            color={primaryColor}
            isDisabled={this.state.isLoading || this.state.searchText === ''}
            onPress={this.searchGif.bind(this)} />

          <Text style={styles.poweredBy}>{'Powered by Giphy <3'}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: secondaryColor,
  },
  header: {
    marginTop: 32,
    textAlign: 'center',
    color: primaryColor,
    fontFamily : 'indieFlower',
    fontSize : 70
  },
  form : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  },
  input : {
    flex: 0.5
  },
  poweredBy : {
    position: 'absolute',
    bottom: 10,
    fontFamily: 'indieFlower',
    fontSize: 20,
    color: primaryColor
  }
})

export default MainScreen
