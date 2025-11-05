import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import SegmentControl from "./SegmentControl";
import { getRatingStars, formatDuration } from "../utils/formatters";

const Movie = ({ title, poster, description, rating, duration }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image source={{ uri: poster }} style={styles.poster} />
      <Text style={styles.description}>{description}</Text>

      {/* aca mostramos las estrellas si hay rating */}
      {rating && <Text style={styles.rating}>{getRatingStars(rating)}</Text>}

      {/* aca mostramos la duracion formateada */}
      {duration && (
        <Text style={styles.duration}>{formatDuration(duration)}</Text>
      )}
    </View>
  );
};

export default Movie;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  poster: {
    height: 200,
    borderRadius: 8,
    marginVertical: 10,
  },
  description: {
    fontSize: 14,
    color: "#555",
  },
  rating: {
    fontSize: 20,
    marginTop: 5,
  },
  duration: {
    fontSize: 14,
    color: "#888",
    marginTop: 5,
  },
});
