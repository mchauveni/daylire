import { ActivityIndicator, Text, View, Image, ScrollView, Button, Pressable } from "react-native";
import { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-native";
import ApiHandler from "../../apihandler";
import { styles } from "./styles";

const Loufokerie = props => {
    const [loufokerie, setLoufokerie] = useState(null);
    const { loufokId } = useParams();

    const fetchLoufokerie = async () => {
        setLoufokerie(await ApiHandler.fetchLoufokerie(loufokId));
    }

    useEffect(() => {
        fetchLoufokerie();
    }, [])

    return (
        <View style={styles.container}>
            {loufokerie ? (
                <>
                    <View style={styles.header}>
                        <View style={styles.headerOptions}>
                            <Link style={styles.returnLink} to="/">
                                <View style={styles.optionButton}>
                                    <Image style={styles.image} source={require("../../assets/chevron_left.png")}></Image>
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
                    <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentScrollView}>
                        <View style={styles.contribWrapper}>
                            {loufokerie.contributions.map((contrib) => (
                                <Text key={contrib} style={styles.contribution}>{contrib}</Text>
                            ))}
                        </View>
                        <View style={styles.playersWrapper}>
                            <Text style={styles.playersTitle}>Contributeurs :</Text>
                            {loufokerie.joueurs.map((joueur) => (
                                <Text style={styles.players} key={joueur}>{joueur}</Text>
                            ))}

                        </View>
                    </ScrollView>
                </>
            ) : (
                <ActivityIndicator size="large" color="#8531da"></ActivityIndicator>
            )}
        </View >
    )
}


export default Loufokerie;