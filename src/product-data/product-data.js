import { v4 as uuidv4 } from 'uuid';

import shoe_1 from '../assets/images/shoes/shoe_1.webp';
import shoe_2 from '../assets/images/shoes/shoe_2.webp';
import shoe_3 from '../assets/images/shoes/shoe_3.webp';
import shoe_4 from '../assets/images/shoes/shoe_4.webp';
import shoe_5 from '../assets/images/shoes/shoe_5.webp';
import shoe_6 from '../assets/images/shoes/shoe_6.webp';
import shoe_7 from '../assets/images/shoes/shoe_7.webp';
import shoe_8 from '../assets/images/shoes/shoe_8.webp';

import mens_1 from '../assets/images/mens/mens_1.webp';
import mens_2 from '../assets/images/mens/mens_2.jpg';
import mens_3 from '../assets/images/mens/mens_3.webp';
import mens_4 from '../assets/images/mens/mens_4.webp';
import mens_5 from '../assets/images/mens/mens_5.jpg';
import mens_6 from '../assets/images/mens/mens_6.webp';
import mens_7 from '../assets/images/mens/mens_7.webp';
import mens_8 from '../assets/images/mens/mens_8.webp';

import womens_1 from '../assets/images/womens/womens_1.webp';
import womens_2 from '../assets/images/womens/womens_2.jpg';
import womens_3 from '../assets/images/womens/womens_3.webp';
import womens_4 from '../assets/images/womens/womens_4.webp';
import womens_5 from '../assets/images/womens/womens_5.jpg';
import womens_6 from '../assets/images/womens/womens_6.webp';
import womens_7 from '../assets/images/womens/womens_7.webp';
import womens_8 from '../assets/images/womens/womens_8.jpg';

import accessories_1 from '../assets/images/accessories/accessories_1.webp';
import accessories_2 from '../assets/images/accessories/accessories_2.jpg';
import accessories_3 from '../assets/images/accessories/accessories_3.jpg';
import accessories_4 from '../assets/images/accessories/accessories_4.webp';
import accessories_5 from '../assets/images/accessories/accessories_5.webp';
import accessories_6 from '../assets/images/accessories/accessories_6.webp';
import accessories_7 from '../assets/images/accessories/accessories_7.webp';
import accessories_8 from '../assets/images/accessories/accessories_8.jpg';

import shoe_1_hover from '../assets/images/shoes/shoe_1_hover.webp';
import shoe_2_hover from '../assets/images/shoes/shoe_2_hover.webp';
import shoe_3_hover from '../assets/images/shoes/shoe_3_hover.webp';
import shoe_4_hover from '../assets/images/shoes/shoe_4_hover.webp';
import shoe_5_hover from '../assets/images/shoes/shoe_5_hover.webp';
import shoe_6_hover from '../assets/images/shoes/shoe_6_hover.webp';
import shoe_7_hover from '../assets/images/shoes/shoe_7_hover.webp';
import shoe_8_hover from '../assets/images/shoes/shoe_8_hover.webp';

import mens_1_hover from '../assets/images/mens/mens_1_hover.webp';
import mens_2_hover from '../assets/images/mens/mens_2_hover.webp';
import mens_3_hover from '../assets/images/mens/mens_3_hover.webp';
import mens_4_hover from '../assets/images/mens/mens_4_hover.webp';
import mens_5_hover from '../assets/images/mens/mens_5_hover.webp';
import mens_6_hover from '../assets/images/mens/mens_6_hover.webp';
import mens_7_hover from '../assets/images/mens/mens_7_hover.webp';
import mens_8_hover from '../assets/images/mens/mens_8_hover.webp';

import womens_1_hover from '../assets/images/womens/womens_1_hover.webp';
import womens_2_hover from '../assets/images/womens/womens_2_hover.webp';
import womens_3_hover from '../assets/images/womens/womens_3_hover.webp';
import womens_4_hover from '../assets/images/womens/womens_4_hover.webp';
import womens_5_hover from '../assets/images/womens/womens_5_hover.webp';
import womens_6_hover from '../assets/images/womens/womens_6_hover.webp';
import womens_7_hover from '../assets/images/womens/womens_7_hover.webp';
import womens_8_hover from '../assets/images/womens/womens_8_hover.webp';

import accessories_1_hover from '../assets/images/accessories/accessories_1_hover.webp';
import accessories_2_hover from '../assets/images/accessories/accessories_2_hover.jpg';
import accessories_3_hover from '../assets/images/accessories/accessories_3_hover.webp';
import accessories_4_hover from '../assets/images/accessories/accessories_4_hover.webp';
import accessories_5_hover from '../assets/images/accessories/accessories_5_hover.webp';
import accessories_6_hover from '../assets/images/accessories/accessories_6_hover.webp';
import accessories_7_hover from '../assets/images/accessories/accessories_7_hover.webp';
import accessories_8_hover from '../assets/images/accessories/accessories_8_hover.jpg';

export const shoes = [
	{
		id: uuidv4(),
		name: 'White trainers',
		price: 200,
		primaryImage: shoe_1,
		secondaryImage: shoe_1_hover
	},
	{
		id: uuidv4(),
		name: 'Dolce & Gabana',
		price: 600,
		primaryImage: shoe_2,
		secondaryImage: shoe_2_hover
	},
	{
		id: uuidv4(),
		name: 'Blue hightop boots',
		price: 400,
		primaryImage: shoe_3,
		secondaryImage: shoe_3_hover
	},
	{
		id: uuidv4(),
		name: 'Off-white sneakers',
		price: 300,
		primaryImage: shoe_4,
		secondaryImage: shoe_4_hover
	},
	{
		id: uuidv4(),
		name: 'Nike X Ambush',
		price: 250,
		primaryImage: shoe_5,
		secondaryImage: shoe_5_hover
	},
	{
		id: uuidv4(),
		name: 'black ankle-boots',
		price: 500,
		primaryImage: shoe_6,
		secondaryImage: shoe_6_hover
	},
	{
		id: uuidv4(),
		name: 'logo-printed Dolce & Gabana',
		price: 600,
		primaryImage: shoe_7,
		secondaryImage: shoe_7_hover
	},
	{
		id: uuidv4(),
		name: 'Converse high-tops',
		price: 350,
		primaryImage: shoe_8,
		secondaryImage: shoe_8_hover
	}
];

export const mens = [
	{
		id: uuidv4(),
		name: 'Black polo shirt',
		price: 50,
		primaryImage: mens_1,
		secondaryImage: mens_1_hover
	},
	{
		id: uuidv4(),
		name: 'polkadot shirt',
		price: 100,
		primaryImage: mens_2,
		secondaryImage: mens_2_hover
	},
	{
		id: uuidv4(),
		name: 'White plain shirt',
		price: 400,
		primaryImage: mens_3,
		secondaryImage: mens_3_hover
	},
	{
		id: uuidv4(),
		name: 'Full suit',
		price: 700,
		primaryImage: mens_4,
		secondaryImage: mens_4_hover
	},
	{
		id: uuidv4(),
		name: 'Shredded Jeans',
		price: 150,
		primaryImage: mens_5,
		secondaryImage: mens_5_hover
	},
	{
		id: uuidv4(),
		name: 'Helmut Lang t-shirt',
		price: 200,
		primaryImage: mens_6,
		secondaryImage: mens_6_hover
	},
	{
		id: uuidv4(),
		name: 'Dolce & Gabana Jacket',
		price: 600,
		primaryImage: mens_7,
		secondaryImage: mens_7_hover
	},
	{
		id: uuidv4(),
		name: 'Embroidered black coat',
		price: 350,
		primaryImage: mens_8,
		secondaryImage: mens_8_hover
	}
];

export const womens = [
	{
		id: uuidv4(),
		name: 'Long black dress',
		price: 400,
		primaryImage: womens_1,
		secondaryImage: womens_1_hover
	},
	{
		id: uuidv4(),
		name: 'Button-detail knitted dress',
		price: 500,
		primaryImage: womens_2,
		secondaryImage: womens_2_hover
	},
	{
		id: uuidv4(),
		name: 'Light blue silk dress',
		price: 400,
		primaryImage: womens_3,
		secondaryImage: womens_3_hover
	},
	{
		id: uuidv4(),
		name: 'cropped cut-out top',
		price: 300,
		primaryImage: womens_4,
		secondaryImage: womens_4_hover
	},
	{
		id: uuidv4(),
		name: 'Oscar de la Renta short dress',
		price: 150,
		primaryImage: womens_5,
		secondaryImage: womens_5_hover
	},
	{
		id: uuidv4(),
		name: 'Logo printed sweater',
		price: 400,
		primaryImage: womens_6,
		secondaryImage: womens_6_hover
	},
	{
		id: uuidv4(),
		name: 'Gucci Jacket',
		price: 800,
		primaryImage: womens_7,
		secondaryImage: womens_7_hover
	},
	{
		id: uuidv4(),
		name: 'Snakeskin-print trousers',
		price: 350,
		primaryImage: womens_8,
		secondaryImage: womens_8_hover
	}
];
export const accessories = [
	{
		id: uuidv4(),
		name: 'green sunglasses',
		price: 50,
		primaryImage: accessories_1,
		secondaryImage: accessories_1_hover
	},
	{
		id: uuidv4(),
		name: 'embroided-logo cashmere cap',
		price: 75,
		primaryImage: accessories_2,
		secondaryImage: accessories_2_hover
	},
	{
		id: uuidv4(),
		name: 'Vintage-check scarf',
		price: 100,
		primaryImage: accessories_3,
		secondaryImage: accessories_3_hover
	},
	{
		id: uuidv4(),
		name: 'ferragamo belt',
		price: 140,
		primaryImage: accessories_4,
		secondaryImage: accessories_4_hover
	},
	{
		id: uuidv4(),
		name: 'Dolce & Gabana iPhone 13 case',
		price: 90,
		primaryImage: accessories_5,
		secondaryImage: accessories_5_hover
	},
	{
		id: uuidv4(),
		name: 'square-frame sunglasses',
		price: 150,
		primaryImage: accessories_6,
		secondaryImage: accessories_6_hover
	},
	{
		id: uuidv4(),
		name: 'Bang & Olufsen headphones',
		price: 800,
		primaryImage: accessories_7,
		secondaryImage: accessories_7_hover
	},
	{
		id: uuidv4(),
		name: 'Dolce & Gabana leather wallet',
		price: 350,
		primaryImage: accessories_8,
		secondaryImage: accessories_8_hover
	}
];
