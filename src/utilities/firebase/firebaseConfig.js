import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
	onAuthStateChanged,
	createUserWithEmailAndPassword
} from 'firebase/auth';

import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
	collection,
	getDocs,
	writeBatch,
	query
} from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCVsMSx_oH4L81KwzTD3tOQgl2Fovnoyxc',
	authDomain: 'ecommerce-app-a0883.firebaseapp.com',
	projectId: 'ecommerce-app-a0883',
	storageBucket: 'ecommerce-app-a0883.appspot.com',
	messagingSenderId: '11228895986',
	appId: '1:11228895986:web:c3363fc87fe59613e1ce6b'
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

// SIGN IN METHODS
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
	prompt: 'select_account'
});

export const signInWithGooglePopup = () =>
	// Sign In With Google
	signInWithPopup(auth, googleProvider);

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	// Sign In With Email and Password
	if (!email || !password) return;
	return await signInWithEmailAndPassword(auth, email, password);
};

// SIGN UP METHOD
export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	return await createUserWithEmailAndPassword(auth, email, password);
};

// SIGN OUT METHOD
export const signOutUser = async () => await signOut(auth);

// This listens for any auth state changes
export const onAuthStateChangedListener = (callback) => {
	onAuthStateChanged(auth, callback);
};

const db = getFirestore(app);

// ADD PRODUCT DATA TO FIRESTORE DATABASE
export const addCollectionAndDocuments = async (
	collectionKeys,
	objectsToAdd
) => {
	const collectionRef = collection(db, collectionKeys);
	const batch = writeBatch(db);

	objectsToAdd.forEach((object) => {
		const docRef = doc(collectionRef, object.title.toLowerCase());
		batch.set(docRef, object);
	});

	await batch.commit();

	console.log('done');
};

// GET PRODUCT DATA FROM FIRESTORE DATABASE
export const getCategoriesAndDocuments = async () => {
	const collectionRef = collection(db, 'categories');

	const q = query(collectionRef);

	const querySnapshot = await getDocs(q);

	return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

// CREATE USER METHOD
export const createUserDocumentFromAuth = async (
	userAuth,
	additionalInfo = {}
) => {
	if (!userAuth) return;

	const userDocRef = doc(db, 'users', userAuth.uid);

	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const { displayName: name, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				name,
				email,
				createdAt,
				...additionalInfo
			});
		} catch (error) {
			console.log('Error creating user', error.message);
		}
	}
	return userDocRef;
};
