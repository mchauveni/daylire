import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import ApiHandler from './apihandler';
import { ActivityIndicator, Image, ScrollView, Button, StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Routes, Link } from "react-router-native";
import Loufokerie from './components/loufokerie/loufokerie';

const Home = () => {
	const [loufokeries, setLoufokeries] = useState(null);

	const fetchLoufokeries = async () => {
		setLoufokeries(await ApiHandler.fetchAllLoufokeries())
	}

	useEffect(() => {
		fetchLoufokeries();
	}, [])

	return (
		<>
			<Image style={styles.logotype} source={require("./assets/logotype.png")}></Image>
			<ScrollView style={styles.scrollView} contentContainerStyle={styles.contentScrollView}>
				<Text>Mesdames, Messieurs et autres Menestres, ayez l'honneur de lire les récits complètement crazyyy d'autres contributeurs loufoques</Text>
				{
					loufokeries ?
						loufokeries.map((loufokerie) => (
							<Link key={loufokerie.id} style={styles.loufokeriewrapper} to={"/" + loufokerie.id}>
								<Text style={styles.loufokerietitle}>{loufokerie.titre_loufokerie}</Text>
							</Link>
						)) : (
							<ActivityIndicator size="large" color="#8531da"></ActivityIndicator>
						)
				}
			</ScrollView>
		</>
	)
}

export default function App() {
	return (
		<NativeRouter>
			<View style={styles.container}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/:loufokId" element={<Loufokerie />} />
				</Routes>
			</View>
		</NativeRouter>
	);
}

const styles = StyleSheet.create({
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
	loufokerietitle: {
		fontWeight: "600",
		fontSize: 32,
		color: "#fff",
	}
});
