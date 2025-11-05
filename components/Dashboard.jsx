import { Dimensions, StyleSheet } from "react-native";
import Movie from "./Movie";
import data from "../data/data.json";
import AddMovieFloatingButton from "./AddMovieFloatingButton";
import SegmentControl from "./SegmentControl";
import AddMovieModal from "./AddMovieModal";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Dashboard() {
  const firstMovie = data.movies[0];
  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <SafeAreaView style={styles.container}>
    
      <Movie
        title={firstMovie.title}
        poster={firstMovie.poster}
        description={firstMovie.description}
      />
      <AddMovieFloatingButton
        style={{
          position: "absolute",
          bottom: 20,
          right: 20,
        }}
        onPress={() => {
          console.log("Add Movie Pressed");

          setModalVisible(true);
        }}
      />

      <AddMovieModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={() => {
          // Handle form submission
          console.log("Movie submitted");
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
