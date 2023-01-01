import { v4 as uuidv4 } from 'uuid';

const PRODUCT_DATA = [
	{
		title: 'shoes',
		items: [
			{
				id: uuidv4(),
				name: 'White trainers',
				price: 200,
				primaryImage: 'https://i.ibb.co/bvJJDMr/1.webp',
				secondaryImage: 'https://i.ibb.co/MB4s71x/1.webp'
			},
			{
				id: uuidv4(),
				name: 'Dolce & Gabana',
				price: 600,
				primaryImage: 'https://i.ibb.co/9YVBGrw/2.webp',
				secondaryImage: 'https://i.ibb.co/K29jcCR/2.webp'
			},
			{
				id: uuidv4(),
				name: 'Blue hightop boots',
				price: 400,
				primaryImage: 'https://i.ibb.co/ySXR7sL/3.webp',
				secondaryImage: 'https://i.ibb.co/vZQKYTy/3.webp'
			},
			{
				id: uuidv4(),
				name: 'Off-white sneakers',
				price: 300,
				primaryImage: 'https://i.ibb.co/rtrHnVR/4.webp',
				secondaryImage: 'https://i.ibb.co/Wvk991x/4.webp'
			},
			{
				id: uuidv4(),
				name: 'Nike X Ambush',
				price: 250,
				primaryImage: 'https://i.ibb.co/4MG3jZx/5.webp',
				secondaryImage: 'https://i.ibb.co/rmqD5HZ/5.webp'
			},
			{
				id: uuidv4(),
				name: 'black ankle-boots',
				price: 500,
				primaryImage: 'https://i.ibb.co/Ycx5cyJ/6.webp',
				secondaryImage: 'https://i.ibb.co/2t5287y/6.webp'
			},
			{
				id: uuidv4(),
				name: 'logo-printed Dolce & Gabana',
				price: 600,
				primaryImage: 'https://i.ibb.co/0DXc77n/7.webp',
				secondaryImage: 'https://i.ibb.co/RbYmdbb/7.webp'
			},
			{
				id: uuidv4(),
				name: 'Converse high-tops',
				price: 350,
				primaryImage: 'https://i.ibb.co/6RQ6RgX/8.webp',
				secondaryImage: 'https://i.ibb.co/GssjmH8/8.webp'
			}
		]
	},
	{
		title: 'mens',
		items: [
			{
				id: uuidv4(),
				name: 'Black polo shirt',
				price: 50,
				primaryImage: 'https://i.ibb.co/zG9t07z/1.webp',
				secondaryImage: 'https://i.ibb.co/hM1P9yR/1.webp'
			},
			{
				id: uuidv4(),
				name: 'polkadot polo shirt',
				price: 100,
				primaryImage: 'https://i.ibb.co/7kmYdMY/2.jpg',
				secondaryImage: 'https://i.ibb.co/bFMKPTN/2.webp'
			},
			{
				id: uuidv4(),
				name: 'White plain shirt',
				price: 400,
				primaryImage: 'https://i.ibb.co/W5FXbhd/3.webp',
				secondaryImage: 'https://i.ibb.co/3RXt704/3.webp'
			},
			{
				id: uuidv4(),
				name: 'Full suit',
				price: 700,
				primaryImage: 'https://i.ibb.co/6v5Lht1/4.webp',
				secondaryImage: 'https://i.ibb.co/vB5448T/4.webp'
			},
			{
				id: uuidv4(),
				name: 'Shredded Jeans',
				price: 150,
				primaryImage: 'https://i.ibb.co/fxfHLS3/5.jpg',
				secondaryImage: 'https://i.ibb.co/H7ZgxTX/5.webp'
			},
			{
				id: uuidv4(),
				name: 'Helmut Lang t-shirt',
				price: 200,
				primaryImage: 'https://i.ibb.co/hH43JQX/6.webp',
				secondaryImage: 'https://i.ibb.co/ZSRQYyC/6.webp'
			},
			{
				id: uuidv4(),
				name: 'Dolce & Gabana Jacket',
				price: 600,
				primaryImage: 'https://i.ibb.co/N7HLpN7/7.webp',
				secondaryImage: 'https://i.ibb.co/n8xJ1Sj/7.webp'
			},
			{
				id: uuidv4(),
				name: 'Embroidered black coat',
				price: 350,
				primaryImage: 'https://i.ibb.co/ZfFdZKV/8.webp',
				secondaryImage: 'https://i.ibb.co/FhqTPFW/8.webp'
			}
		]
	},
	{
		title: 'womens',
		items: [
			{
				id: uuidv4(),
				name: 'Long black dress',
				price: 400,
				primaryImage: 'https://i.ibb.co/7y1Kdxx/1.webp',
				secondaryImage: 'https://i.ibb.co/2qb3z2k/1.webp'
			},
			{
				id: uuidv4(),
				name: 'Button-detail knitted dress',
				price: 500,
				primaryImage: 'https://i.ibb.co/mSv7qH4/2.jpg',
				secondaryImage: 'https://i.ibb.co/wygzr0P/2.webp'
			},
			{
				id: uuidv4(),
				name: 'Light blue silk dress',
				price: 400,
				primaryImage: 'https://i.ibb.co/QFTXMq9/3.webp',
				secondaryImage: 'https://i.ibb.co/dtyn6Vn/3.webp'
			},
			{
				id: uuidv4(),
				name: 'cropped cut-out top',
				price: 300,
				primaryImage: 'https://i.ibb.co/YBt7Vdn/4.webp',
				secondaryImage: 'https://i.ibb.co/P62QpFr/4.webp'
			},
			{
				id: uuidv4(),
				name: 'Oscar de la Renta short dress',
				price: 150,
				primaryImage: 'https://i.ibb.co/vmHF0p7/5.jpg',
				secondaryImage: 'https://i.ibb.co/tP1RKfM/5.webp'
			},
			{
				id: uuidv4(),
				name: 'Logo printed sweater',
				price: 400,
				primaryImage: 'https://i.ibb.co/xj8Ynkr/6.webp',
				secondaryImage: 'https://i.ibb.co/vwCMSsP/6.webp'
			},
			{
				id: uuidv4(),
				name: 'Gucci Jacket',
				price: 800,
				primaryImage: 'https://i.ibb.co/JqzNbsX/7.webp',
				secondaryImage: 'https://i.ibb.co/tm6f2XD/7.webp'
			},
			{
				id: uuidv4(),
				name: 'Snakeskin-print trousers',
				price: 350,
				primaryImage: 'https://i.ibb.co/34c1fQn/8.jpg',
				secondaryImage: 'https://i.ibb.co/s9RVskm/8.webp'
			}
		]
	},
	{
		title: 'accessories',
		items: [
			{
				id: uuidv4(),
				name: 'green sunglasses',
				price: 50,
				primaryImage: 'https://i.ibb.co/VQsq3MV/1.webp',
				secondaryImage: 'https://i.ibb.co/Gcnvy1C/1.webp'
			},
			{
				id: uuidv4(),
				name: 'embroided-logo cashmere cap',
				price: 75,
				primaryImage: 'https://i.ibb.co/x7XM0F3/2.jpg',
				secondaryImage: 'https://i.ibb.co/Hqdy738/2.jpg'
			},
			{
				id: uuidv4(),
				name: 'Vintage-check scarf',
				price: 100,
				primaryImage: 'https://i.ibb.co/gmpLYyL/3.jpg',
				secondaryImage: 'https://i.ibb.co/yXHFMv5/3.webp'
			},
			{
				id: uuidv4(),
				name: 'ferragamo belt',
				price: 140,
				primaryImage: 'https://i.ibb.co/Jxpx0XR/4.webp',
				secondaryImage: 'https://i.ibb.co/xjPZnLy/4.webp'
			},
			{
				id: uuidv4(),
				name: 'Dolce & Gabana iPhone 13 case',
				price: 90,
				primaryImage: 'https://i.ibb.co/dg2pt1b/5.webp',
				secondaryImage: 'https://i.ibb.co/hRHjVYc/5.webp'
			},
			{
				id: uuidv4(),
				name: 'square-frame sunglasses',
				price: 150,
				primaryImage: 'https://i.ibb.co/5Rg28TG/6.webp',
				secondaryImage: 'https://i.ibb.co/42Yd76q/6.webp'
			},
			{
				id: uuidv4(),
				name: 'Bang & Olufsen headphones',
				price: 800,
				primaryImage: 'https://i.ibb.co/rfhFJmC/7.webp',
				secondaryImage: 'https://i.ibb.co/jRMqZPB/7.webp'
			},
			{
				id: uuidv4(),
				name: 'Dolce & Gabana leather wallet',
				price: 350,
				primaryImage: 'https://i.ibb.co/3NK3FQ5/8.jpg',
				secondaryImage: 'https://i.ibb.co/y04RSxP/8.jpg'
			}
		]
	}
];

export default PRODUCT_DATA;
