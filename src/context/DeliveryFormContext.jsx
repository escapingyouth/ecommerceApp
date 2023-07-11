import { createContext, useState } from 'react';

const DeliveryFormContext = createContext({
	formValues: {},
	setFormValues: () => {},
	country: '',
	setCountry: () => {},
	phone: '',
	setPhone: () => {}
});

const defaultFormValues = {
	firstName: '',
	lastName: '',
	address: '',
	city: '',
	state: '',
	zipCode: ''
};

const DeliveryFormProvider = ({ children }) => {
	const [formValues, setFormValues] = useState(defaultFormValues);
	const [country, setCountry] = useState('');
	const [phone, setPhone] = useState('');

	const value = {
		formValues,
		setFormValues,
		country,
		setCountry,
		phone,
		setPhone
	};

	return (
		<DeliveryFormContext.Provider value={value}>
			{children}
		</DeliveryFormContext.Provider>
	);
};

export { DeliveryFormContext, DeliveryFormProvider };
