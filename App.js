import { useEffect, useState } from 'react';
import { StyleSheet, View } from "react-native";
import { NativeRouter, Route, Routes } from "react-router-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loufokerie from './components/loufokerie/loufokerie';
import Home from './components/home/home';



export default function App() {
	/**
	 * likes: {
	 * 		like[];
	 * }
	 * 
	 * like: {
	 * 		loufokId: number,
	 * 		liked: bool
	 * }
	 */
	const [likes, setLikes] = useState([]);

	const getLocalLikes = async () => {
		let retrievedLikes = JSON.parse(await AsyncStorage.getItem("likes"));

		if (!retrievedLikes) {
			await AsyncStorage.setItem("likes", JSON.stringify([20]));
			setLikes([])
		} else {
			setLikes(retrievedLikes)
		}
	}

	const handleLike = (loufokerieId) => {
		console.log(likes.includes(loufokerieId));
		if (likes.includes(loufokerieId)) {
			setLikes(likes.splice(likes.indexOf(loufokerieId), 1));
		} else {
			setLikes(likes.push(loufokerieId))
		}
	}

	useEffect(() => {
		console.log("===== CURRENT LIKE ARRAY =====");
		console.log(likes);
		console.log("==============================");
	}, [likes])

	useEffect(() => {
		getLocalLikes();
	}, []);

	return (
		<NativeRouter>
			<View style={styles.container}>
				<Routes>
					<Route path="/" element={<Home likes={likes} />} />
					<Route path="/:loufokId" element={<Loufokerie likes={likes} handleLike={handleLike} />} />
				</Routes>
			</View>
		</NativeRouter>
	);
}

export const styles = StyleSheet.create({
	container: {
		paddingTop: 32,
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'flex-start',
	}
})

