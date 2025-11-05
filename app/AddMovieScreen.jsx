import { View, StyleSheet, ScrollView } from 'react-native'
import AddMovieForm from './AddMovieModal' // Import renamed component

export default function AddMovieScreen() {
  const handleSubmit = () => {
    console.log("Movie submitted!")
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <AddMovieForm onSubmit={handleSubmit} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
  },
})
