import {View, TextInput, StyleSheet, Dimensions} from "react-native"

var width = Dimensions.get("window").width;
export default function SearchInput()
{
    return(
        <View>
            <TextInput style={styles.input}
            placeholder="search"/>
            
        </View>
    );
}

const styles = StyleSheet.create({
    input : {
     
        width : width * 0.92,
        backgroundColor : "white",

  
        padding : 10,
        height : 40,
        borderRadius: 5,
    }
});