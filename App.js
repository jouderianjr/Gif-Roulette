import React from 'react'
import { Font } from 'expo'
import MainScreen from './src/mainScreen'

export default class App extends React.Component {
  state = {
    fontLoaded : false
  }

  async componentDidMount() {
    await Font.loadAsync({
      'indieFlower' : require('./assets/fonts/IndieFlower.ttf')
    })

    this.setState({fontLoaded:true})
  }

  render() {
    if (this.state.fontLoaded) {
      return <MainScreen/>
    }

    return null
  }
}
