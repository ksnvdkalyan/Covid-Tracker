import { StyleSheet, Dimensions  } from "react-native";

export default StyleSheet.create({
    wrapper: {
        paddingHorizontal: 15,
        marginBottom: 55,
    },
    title: {
        textAlign: "center",
        fontFamily: "Montserrat-Bold",
        fontSize: 25,
        paddingVertical: 10,
    },
    card: {
        padding: 5,
        marginTop: 10,
        backgroundColor: "#fff",
        borderColor: "#000",
        borderWidth: 0.5,
        borderRadius: 10
    },
    cardWrapper: {
        padding: 10,
    },
    imageContainer: {
        alignSelf: "stretch",
        alignItems : "center",
        justifyContent: "center",
    },
    image: {
        height: 200,
        width: 300,
        borderRadius: 5
    },
    articleTitle: {
        fontSize: 18,
        fontFamily: "Montserrat-Bold",
        textAlign: "justify",
        padding: 5
    },
    descriptionText: {
        fontFamily: "Montserrat-Medium",
        textAlign: "justify",
    }
})