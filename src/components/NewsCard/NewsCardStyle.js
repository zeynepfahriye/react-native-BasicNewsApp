import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 13,
        borderRadius: 11,
    },
    image: {
        height: Dimensions.get('window').height / 4,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    inner_container: {
        padding: 5,
    },
    title: {
        fontWeight: "bold",
        fontSize: 18
    },
    description: {
        marginTop: 3,
    },
    author: {
        fontStyle: 'italic',
        textAlign: 'right',
    }
})