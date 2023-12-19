import { StatusBar } from 'expo-status-bar';
import loufokerie from "./components/loufokerie";
import { useEffect, useState } from 'react';
import ApiHandler from './apihandler';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Routes, Link } from "react-router-native";
import Loufokerie from './components/loufokerie';

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
			<Text>Toutes les loufokeriesss !!</Text>
			{
				loufokeries ?
					loufokeries.map((loufokerie) => (
						<Link key={loufokerie.id} style={styles.loufokeriewrapper} to={"/" + loufokerie.id}>
							<Text style={styles.loufokerietitle}>{loufokerie.titre_loufokerie}</Text>
						</Link>
					)) : (
						<Text>Chargement...</Text>
					)
			}
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
	loufokeriewrapper: {
		margin: 8,
		display: "flex",
		width: "90%",
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
