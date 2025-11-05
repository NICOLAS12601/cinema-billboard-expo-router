import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const AddMovieFloatingButton = ({ style }) => {
  const router = useRouter()

  const handlePress = () => {
    router.push('/AddMovieScreen') // navigate to AddMovieScreen
  }

  return (
    <Pressable onPress={handlePress} style={[styles.container, style]}>
      <Text style={styles.buttonText}>+</Text>
    </Pressable>
  )
}

export default AddMovieFloatingButton

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    borderRadius: 50,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 32,
    lineHeight: 36,
  },
})
