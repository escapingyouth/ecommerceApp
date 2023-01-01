import { createContext, useState, useEffect } from 'react';

// import { addCollectionAndDocuments } from '../utilities/firebaseConfig.js';
import { getCategoriesAndDocuments } from '../utilities/firebase/firebaseConfig.js';

// import PRODUCT_DATA from '../products-data.js';

export const CategoriesContext = createContext({
	categoriesMap: {}
});

export const CategoriesProvider = ({ children }) => {
	const [categoriesMap, setCategoriesMap] = useState({});

	// useEffect(() => {
	// 	addCollectionAndDocuments('categories', PRODUCT_DATA);
	// }, []);

	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoryMap = await getCategoriesAndDocuments();
			setCategoriesMap(categoryMap);
		};

		getCategoriesMap();
	}, []);

	const value = { categoriesMap };
	return (
		<CategoriesContext.Provider value={value}>
			{children}
		</CategoriesContext.Provider>
	);
};
