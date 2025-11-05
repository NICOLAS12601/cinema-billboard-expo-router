import { Image, StyleSheet, Text, View } from "react-native";




export default function allMovies () {
  const {data:movies,
    loading:loadingMovies,
    fetchData:fetchMovies,
  } = useFetch("http://");
  return (
    <View style={styles.container}>
    </View>
  );
}


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
