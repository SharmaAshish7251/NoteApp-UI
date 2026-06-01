import { View, StyleSheet } from "react-native";
import Notes_screen from "./Notes_screen";
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Index() {
  return (
    <SafeAreaView>
      
    <View style={styles.container}>
      <Notes_screen />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
