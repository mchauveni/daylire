import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingTop: 32,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    header: {
        paddingHorizontal: 16,
        alignSelf: "stretch",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 16
    },
    headerOptions: {
        alignSelf: "stretch",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16
    },
    scrollView: {
        display: "flex",
        flexDirection: "column",
        padding: 16,
    },
    contentScrollView: {
        gap: 16,
        paddingBottom: 32
    },
    returnLink: {
        alignSelf: "flex-start",
    },
    optionButton: {
        padding: 8,
        paddingHorizontal: 16,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "stretch",
        borderRadius: 8,
        backgroundColor: '#8531da',
    },
    optionButtonText: {
        color: "#fff",
    },
    loufokerietitle: {
        fontWeight: "800",
        fontSize: 48,
        color: "#8531da",
    },
    image: {
        width: 24,
        height: 24,
        tintColor: "#ffffff",
        resizeMode: "contain"
    },
    contribWrapper: {
        gap: 16
    },
    contribution: {
        fontSize: 16,
        textAlign: "justify"
    },
    playersWrapper: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 4
    },
    playersTitle: {
        width: "100%",
        alignSelf: "stretch",
        fontSize: 20
    },
    players: {
        fontWeight: "500",
        padding: 4,
        borderRadius: 4,
        color: "#fff",
        backgroundColor: "#8531da"
    },
})