import { createContext, useState, useEffect } from 'react';

// import { addCollectionAndDocuments } from '../utilities/firebaseConfig.js';
import { getCategoriesAndDocuments } from '../utilities/firebase/firebaseConfig.js';

// import PRODUCT_DATA from '../products-data.js';

export const CategoriesContext = createContext({
	categoriesMap: {},
	loading: true,
	setLoading: () => {}
});

export const CategoriesProvider = ({ children }) => {
	const [categoriesMap, setCategoriesMap] = useState({});
	const [loading, setLoading] = useState(true);

	// useEffect(() => {
	// 	addCollectionAndDocuments('categories', PRODUCT_DATA);
	// }, []);

	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoryMap = await getCategoriesAndDocuments();
			setCategoriesMap(categoryMap);
			setLoading(false);
		};

		getCategoriesMap();
	}, []);

	const value = { categoriesMap, loading, setLoading };
	return (
		<CategoriesContext.Provider value={value}>
			{children}
		</CategoriesContext.Provider>
	);
};
