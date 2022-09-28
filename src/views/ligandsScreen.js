import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import LigandsArr from "../ligandsArray";
export default function LigandsList() {
  return (
    <View style={styles.ItemContainer}>
      <FlatList
        data={LigandsArr}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Text style={styles.ItemText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  ItemText: {
    color: "#DB8080",
    //color: "black",
    fontSize: 20,
    // fontFamily: "Poppins-Regular",
    backgroundColor: "#E5E5E5",
    padding: 20,
    marginTop: 24,
    borderRadius: 8,
  },
  ItemContainer: {
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  noLigandText: {
    //   fontFamily: "Poppins-Regular",
    fontSize: 20,
    alignSelf: "center",
  },
});
