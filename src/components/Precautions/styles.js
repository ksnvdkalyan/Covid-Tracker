import { StyleSheet } from "react-native";

export default StyleSheet.create({
    scrollView: {
        marginBottom: 55
    },
    title: {
        paddingVertical: 10,
        fontFamily: "Montserrat-Bold",
        fontSize: 25,
        marginHorizontal: 10,
        textAlign: "center"
    },
    card: {
        margin: 10,
        padding: 10,
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#fff",
        backgroundColor: "#fff"
    },
    imageContainer: {
        paddingTop: 10
    },
    textContainer: {
        alignItems: "center"
    },
    image: {
        height: 100,
        width: 100,
    },
    circleImage: {
        borderRadius: 50
    },
    cardTitle: {
        paddingVertical: 10,
        fontFamily: "Montserrat-Bold",
        fontSize: 18,
    },
    cardText: {
        paddingHorizontal: 10,
        textAlign: "justify",
        fontFamily: "Montserrat-Medium",
        fontSize: 15,
    }
})