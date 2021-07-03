import { StyleSheet } from "react-native";

export default StyleSheet.create({
    wrapper: {
        marginTop: 10
    },
    scrollView: {
        marginBottom: 45
    },
    card: {
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#fff",
        backgroundColor: "#fff"
    },
    title: {
        paddingBottom: 10,
        fontFamily: "Montserrat-Bold",
        fontSize: 25,
        marginHorizontal: 10,
        textAlign: "center"
    },
    infoText: {
        paddingVertical: 5
    },
    infoTextTitle: {
        paddingVertical: 5,
        fontFamily: "Montserrat-Bold",
        fontSize: 18,
    },
    infoTextSubtitle: {
        paddingVertical: 5,
        fontFamily: "Montserrat-Bold",
    },
    text: {
        fontFamily: "Montserrat-Medium",
        textAlign: "justify"
    },
    linksTitle: {
        padding: 5,
        fontFamily: "Montserrat-Bold",
        fontSize: 18
    },
    helpfulLinks: {
        flexDirection: "row"
    },
    imageContainer: {
        padding: 10
    },
    image: {
        height: 20,
        width: 20,
    },
    textContainer: {
        justifyContent: "center"
    },
    linkText: {
        padding: 5,
        fontFamily: "Montserrat-Bold",
        fontSize: 15
    }
})