import { View, StyleSheet } from "react-native";
import Notes_screen from "./Notes_screen";


export default function Index() {
  return (
    <View style={styles.container}>
      <Notes_screen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
