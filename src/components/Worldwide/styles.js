import { StyleSheet } from "react-native";

export default StyleSheet.create({
    scrollView: {
        marginBottom: 55
    },
    projectTitle: {
        marginHorizontal: 10,
        paddingTop: 15,
        textAlign: "center",
        fontFamily: "Montserrat-Bold",
        fontSize: 30
    },
    comparisionCard: {
        margin: 20,
        backgroundColor: "#fff",
        borderRadius: 10
    },
    chartTitle: {
        marginHorizontal: 10,
        paddingTop: 5,
        textAlign: "center",
        fontFamily: "Montserrat-Bold",
        fontSize: 25,
    },
    chartCard: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    pieContainer: {
        padding: 0,
        margin: -30
    },
    labelsContainer: {
        alignItems: "center",
        justifyContent: "center"
    },
    label: {
        flexDirection: "row",
        alignSelf: "flex-start",
        paddingVertical: 10,
    },
    activeColor: {
        width: 15,
        height: 15,
        marginRight: 10,
        backgroundColor: "#FDDF52",
        borderRadius: 50
    },
    recoveredColor: {
        width: 15,
        height: 15,
        marginRight: 10,
        backgroundColor: "#64e764",
        borderRadius: 50
    },
    deathColor: {
        width: 15,
        height: 15,
        marginRight: 10,
        backgroundColor: "#FC5151",
        borderRadius: 50
    },
    title: {
        fontFamily: "Montserrat-Bold",
        fontSize: 25,
        marginHorizontal: 10,
    },
    totalCard: {
        width: 140,
        height: 150,
        margin: 10,
        padding: 5,
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#fff",
        backgroundColor: "#40E0D0"
    },
    card: {
        width: 140,
        height: 140,
        margin: 10,
        paddingVertical: 10,
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#fff",
        backgroundColor: "#40E0D0"
    },
    imageContainer: {
        paddingTop: 5
    },
    image: {
        height: 50,
        width: 50
    },
    textContainer: {
        paddingVertical: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    numberText: {
        fontFamily: "Montserrat-Medium",
        paddingBottom: 5
    },
    text: { 
        fontFamily: "Montserrat-Bold"
    },
    perMillionCard: {
        width: 140,
        height: 150,
        margin: 10,
        paddingVertical: 10,
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#fff",
        backgroundColor: "#40E0D0"
    }
})