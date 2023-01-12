import { createContext, useState, useEffect } from 'react';

import { getCategoriesAndDocuments } from '../utilities/firebase/firebaseConfig.js';

export const CategoriesContext = createContext({
	categoriesMap: {},
	loading: true,
	setLoading: () => {}
});

export const CategoriesProvider = ({ children }) => {
	const [categoriesMap, setCategoriesMap] = useState({});
	const [loading, setLoading] = useState(true);

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
