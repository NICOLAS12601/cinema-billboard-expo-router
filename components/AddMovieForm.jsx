import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { useState } from 'react'
import data from '../data/data.json'
import CategoriesDropDown from './CategoriesDropDown'

export default function AddMovieForm({ onSubmit }) {
  const categories = data.categories
  const [selectedCategory, setSelectedCategory] = useState(null)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Movie</Text>
      <TextInput placeholder="Title" style={styles.input} />
      <TextInput placeholder="Poster URL" style={styles.input} />
      <CategoriesDropDown
        categories={categories}
        onSelectCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Submit"
          onPress={() => {
            if (onSubmit) onSubmit()
          }}
        />
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

