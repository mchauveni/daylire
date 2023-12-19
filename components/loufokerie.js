import { StyleSheet, Text, View, Image, ScrollView, Button, Pressable } from "react-native";
import { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-native";
import ApiHandler from "../apihandler";

const Loufokerie = props => {
    const [loufokerie, setLoufokerie] = useState(null);
    const { loufokId } = useParams();

    const fetchLoufokerie = async () => {
        setLoufokerie(await ApiHandler.fetchLoufokerie(loufokId));
    }

    useEffect(() => {
        fetchLoufokerie();
    }, [])


    const styles = StyleSheet.create({
        container: {
            paddingTop: 32,
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'flex-start',
            overflow: "scroll"
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
            padding: 16,
            flex: 1,
            gap: 32
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
        players: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 4
        }
    })

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerOptions}>
                    <Link style={styles.returnLink} to="/">
                        <View style={styles.optionButton}>
                            <Image style={styles.image} source={require("../assets/chevron_left.png")}></Image>
                            <Text style={styles.optionButtonText}>Retour</Text>
                        </View>
                    </Link>
                    <Pressable style={styles.optionButton}>
                        <Text style={styles.optionButtonText}>Like</Text>
                    </Pressable>
                </View>

                {loufokerie ? (
                    <Text style={styles.loufokerietitle}>{loufokerie.titre_loufokerie}</Text>
                ) : (
                    <Text style={styles.loufokerietitle}>Loading</Text>
                )}
            </View>
            <ScrollView style={styles.scrollView}>
                {loufokerie ? (
                    <View style={styles.contribWrapper}>
                        {loufokerie.contributions.map((contrib) => (
                            <Text key={contrib} style={styles.contribution}>{contrib}</Text>
                        ))}
                    </View>
                ) : (
                    <Text>Chargement...</Text>
                )}

                {loufokerie ? (
                    <View style={styles.players}>
                        {loufokerie.joueurs.map((joueur) => (
                            <Text key={joueur}>{joueur}</Text>
                        ))}

                    </View>
                ) : (
                    <Text>Chargement...</Text>
                )}
            </ScrollView>
        </View>
    )
}


export default Loufokerie;