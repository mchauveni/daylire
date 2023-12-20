import { useEffect, useState } from 'react';
import { StyleSheet, View } from "react-native";
import { NativeRouter, Route, Routes } from "react-router-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loufokerie from './components/loufokerie/loufokerie';
import Home from './components/home/home';
import ApiHandler from './apihandler';



export default function App() {
	const [likes, setLikes] = useState([]);

	const getLocalLikes = async () => {
		let retrievedLikes = JSON.parse(await AsyncStorage.getItem("likes"));
		if (!retrievedLikes) {
			await AsyncStorage.setItem("likes", JSON.stringify([]));
			setLikes([])
		} else {
			setLikes(retrievedLikes)
		}
	}

	const handleLike = async (loufokerieId) => {
		let likeArray = likes;
		if (likes.includes(loufokerieId)) {
			const response = await ApiHandler.postLike(JSON.stringify({ id: loufokerieId, addLike: false }));
			likeArray.splice(likeArray.indexOf(loufokerieId), 1)
			setLikes(likeArray);
		} else {
			const response = await ApiHandler.postLike(JSON.stringify({ id: loufokerieId, addLike: true }));
			likeArray.push(loufokerieId)
			setLikes(likeArray)
		}
	}

	useEffect(() => {
		AsyncStorage.setItem("likes", JSON.stringify(likes));
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

