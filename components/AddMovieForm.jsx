import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { useState } from 'react'
import { useRouter } from 'expo-router'
import data from '../data/data.json'
import CategoriesDropDown from './CategoriesDropDown'

export default function AddMovieForm() {
  const router = useRouter()
  const categories = data.categories

  const [title, setTitle] = useState('')
  const [poster, setPoster] = useState('')
  const [description, setDescription] = useState('')
  const [duration, setDuration] = useState('')
  const [rating, setRating] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)

  const handleSubmit = async () => {
    const newMovie = {
      title,
      poster,
      description,
      category: selectedCategory,
      duration: parseInt(duration) || 0,
      rating: parseFloat(rating) || 0,
    }

    try {
      const response = await fetch('https:EL-ENDPOINT-DE-MIERDA-DE-NGROCK', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newMovie),
      })

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

      const result = await response.json()
      console.log('✅ Movie added:', result)

      // Navigate back to home and tell it to refetch
      router.replace({ pathname: '/', params: { refresh: 'true' } })

    } catch (err) {
      console.error('❌ Error submitting movie:', err)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Movie</Text>
      <TextInput placeholder="Title" style={styles.input} value={title} onChangeText={setTitle} />
      <TextInput placeholder="Poster URL" style={styles.input} value={poster} onChangeText={setPoster} />
      <TextInput placeholder="Description" style={styles.input} value={description} onChangeText={setDescription} />
      <TextInput placeholder="Duration (min)" style={styles.input} value={duration} onChangeText={setDuration} keyboardType="numeric" />
      <TextInput placeholder="Rating" style={styles.input} value={rating} onChangeText={setRating} keyboardType="numeric" />
      <CategoriesDropDown
        categories={categories}
        onSelectCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={handleSubmit}/>
        <Button title="Cancel" onPress={() => router.back()} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  buttonContainer: {
    marginTop: 20,
  },
})

