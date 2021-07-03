import { StyleSheet } from "react-native";

export default StyleSheet.create({
    ScrollView: {
        marginBottom: 55
    },
    title: {
        paddingVertical: 10,
        fontFamily: "Montserrat-Bold",
        fontSize: 25,
        marginHorizontal: 10,
        textAlign: "center"
    },
    outerModal: {
        backgroundColor: "#000a",
        flex: 1
    },
    modal: {
        marginVertical: 50,
        marginHorizontal: 15,
        padding: 5,
        backgroundColor: "#fff",
        borderRadius: 10,
        paddingBottom: 20
    },
    closeImageContainer: {
        padding: 20,
        flexDirection: "row-reverse"
    },
    closeImage: {
        height: 18,
        width: 18
    },
    countryDetails: {
        justifyContent: "center",
        alignItems: "center"
    },
    countryFlagImageContainer: {
        padding: 10,
        backgroundColor: "#ddd",
        borderRadius: 10
    },
    countryFlagImage: {
        height: 150,
        width: 225
    },
    card: {
        width: 140,
        height: 140,
        marginVertical: 10,
        marginLeft: 10,
        paddingVertical: 10,
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#fff",
        backgroundColor: "#40E0D0"
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
    cardImageContainer: {
        paddingTop: 5
    },
    image: {
        height: 50,
        width: 50
    },
    titleTextContainer: {
        paddingTop: 10,
        paddingLeft: 10,
        alignSelf: "stretch",
        justifyContent: "flex-start"
    },
    titleText: {
        fontFamily: "Montserrat-Bold",
        fontSize: 18
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
    searchBar: {
        paddingHorizontal: 15,
        margin: 10,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#000",
        backgroundColor: "#fff"
    },
    icon: {
        paddingHorizontal: 10
    },
    searchTextContainer: {
        alignSelf: "stretch",
        flex: 1
    },
    cardWrapper: {
        padding: 10,
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        marginBottom: 10,
        marginHorizontal: 10
    },
    cardWrapperPressed: {
        height: 300,
        padding: 10,
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        marginBottom: 10,
        marginHorizontal: 10
    },
    imageContainer: {
        paddingVertical: 2,
        paddingRight: 10
    },
    countryImage : {
        height: 28,
        width: 42
    },
    countryName: {
        paddingStart: 15,
        fontSize: 16,
        fontFamily: "Montserrat-Bold",
        color: "#000"
    },
    searchText: {
        color: "#000",
        fontFamily: "Montserrat-Medium",
        fontSize: 16
    },
    countryText: {
        color: "#000",
        fontFamily: "Montserrat-Bold",
        fontSize: 16
    },
    error: {
        textAlign: "center",
        fontFamily: "Montserrat-Medium",
        color: "tomato",
        fontSize: 18,
        paddingVertical: 30
    },
})