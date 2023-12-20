import { ActivityIndicator, Image, ScrollView, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { Link } from "react-router-native";
import ApiHandler from '../../apihandler';
import { homeStyles } from "./styles.js";

const Home = props => {
    const [loufokeries, setLoufokeries] = useState(null);

    const fetchLoufokeries = async () => {
        setLoufokeries(await ApiHandler.fetchAllLoufokeries())
    }

    useEffect(() => {
        fetchLoufokeries();
    }, []);

    return (
        <>
            <Image style={homeStyles.logotype} source={require("../../assets/logotype.png")}></Image>
            <ScrollView style={homeStyles.scrollView} contentContainerStyle={homeStyles.contentScrollView}>
                <Text>Grâce à Daylire, ayez l'honneur de lire les récits complètement crazyyy d'autres contributeurs loufoques</Text>
                {
                    loufokeries ? loufokeries.map((loufokerie) => (
                        <Link key={loufokerie.id} style={homeStyles.loufokeriewrapper} to={("/" + loufokerie.id)}>
                            <View style={homeStyles.loufokerieContent}>
                                <View>
                                    <Text style={homeStyles.loufokerieDate}>Du {new Date(loufokerie.date_debut_loufokerie).toLocaleDateString("fr-FR")} au {new Date(loufokerie.date_fin_loufokerie).toLocaleDateString("fr-FR")}</Text>
                                    <Text style={homeStyles.loufokerieTitle}>{loufokerie.titre_loufokerie}</Text>
                                </View>
                                <View><Image style={homeStyles.loufokLike} source={props.likes.includes(loufokerie.id) ? require("../../assets/liked.png") : require("../../assets/not_liked.png")}></Image></View>
                            </View>
                        </Link>
                    )) : (
                        <ActivityIndicator size="large" color="#8531da"></ActivityIndicator>
                    )
                }
            </ScrollView>
        </>
    )
}

export default Home;