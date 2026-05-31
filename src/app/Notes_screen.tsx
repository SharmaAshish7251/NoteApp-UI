import {
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,SafeAreaView,
} from "react-native";
import Colors from "./colorScheme/Colors";
import { DataListArray } from "./data/DataArray";

export default function Notes_screen() {
  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return (
      date.toLocaleDateString() +
      " " +
      date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      })
    );
  };

  return (
    
      <KeyboardAvoidingView>
        <ScrollView>
          {/* Main Container */}
          <View style={styles.main}>
            {/* Title */}
            <Text style={styles.apptitle}>Notes_screen</Text>
            <View>
              <FlatList
                data={DataListArray}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => {
                  const coloritem = Object.values(Colors);

                  return (
                    <View
                      style={[
                        styles.container,
                        { backgroundColor: coloritem[index] },
                      ]}
                    >
                      {/* Left */}
                      <View>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.description}>
                          {item.Description}
                        </Text>
                      </View>

                      {/* Right */}
                      <View style={styles.right}>
                        <Text style={styles.timestamp}>
                          {formatTimestamp(item.timestamp)}
                        </Text>
                      </View>
                    </View>
                  );
                }}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
  },
  container: {
    padding: 12,
    margin: 9,
    borderRadius: 12,
  },
  apptitle: {
    fontSize: 24,
    fontWeight: 700,
    marginBottom: 12,
    alignSelf: "center",
  },

  timestamp: {
    alignContent: "flex-end",
    marginTop: 3,
    textTransform: "uppercase",
    fontSize: 12,
    fontWeight: 500,
    color: "grey",
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
  },
  description: {
    fontSize: 15,
    fontWeight: 400,
  },
  right: {
    alignItems: "flex-end",
  },
});
