import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
    container: {
        paddingTop: 32,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    logotype: {
        width: "90%",
        height: 170,
        resizeMode: "contain"
    },
    scrollView: {
        alignSelf: "stretch"
    },
    contentScrollView: {
        padding: 16,
        gap: 16
    },
    loufokeriewrapper: {
        display: "flex",
        alignSelf: "stretch",
        backgroundColor: '#8531da',
        padding: 16,
        borderRadius: 8,
    },
    loufokerieContent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    likeWrapper: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
    },
    loufokLike: {
        height: 32,
        width: 32,
        resizeMode: "contain"
    },
    textWhite: {
        color: "#fff"
    },
    loufokerieTitle: {
        fontWeight: "600",
        fontSize: 32,
        color: "#fff",
    }
});