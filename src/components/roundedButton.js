import React from 'react'
import PropTypes from 'prop-types'
import {
  TouchableWithoutFeedback,
  View,
  Animated,
  StyleSheet,
  Easing,
  Text
} from 'react-native'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'

const clickAnimation = (val, onPress) => {
  Animated.timing(
    val,
    {
      toValue: 1,
      duration: 150,
      easing: Easing.easeOutBounce
    }
  ).start( () => {
    val.setValue(0)
    onPress()
  })
}

const RoundedButton = props => {
  const {
    icon,
    color = '#ccc',
    size = 60,
    onPress,
    style,
    text,
    isDisabled,
    disabledColor = '#ccc'
  } = props

  const scaleValue = new Animated.Value(0)

  let scaleAnimation = scaleValue.interpolate({
    inputRange : [ 0, 0.5, 1 ],
    outputRange : [ 1, 1.2, 1 ]
  })

  const onClick = () => {
    if ( isDisabled ) {
      return
    }

    clickAnimation(scaleValue, onPress)
  }

  const currentColor = () => isDisabled ? disabledColor : color

  return (
    <Animated.View style={
      [
        style,
        styles.view,
        { transform: [ {scale: scaleAnimation} ]},
        { borderColor: currentColor() },
        { width : size , height: size },
        { borderRadius : size / 2 }
      ]
    }>

      <TouchableWithoutFeedback onPress={onClick}>
        <View style={styles.icon}>
          {text &&
            <Text style={[styles.text, {color: currentColor(), fontSize: size*0.35}]}>
              {text}
            </Text>
          }
          {icon &&
            <Icon
              size={size/2}
              name={icon}
              color={ currentColor() }
            />
          }
        </View>
      </TouchableWithoutFeedback>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  view : {
    width : 60,
    height : 60,
    borderWidth : 2,
    borderRadius : 30,
  },
  icon : {
    alignItems : 'center',
    flex : 1,
    justifyContent : 'center',
  },
  text : {
    fontFamily : 'indieFlower'
  }
})

RoundedButton.propTypes = {
  color         : PropTypes.string,
  icon          : PropTypes.string,
  text          : PropTypes.string,
  size          : PropTypes.number,
  onPress       : PropTypes.func,
  style         : PropTypes.object,
  isDisabled    : PropTypes.bool,
  disabledColor : PropTypes.string
}

export { RoundedButton }
