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
			},
			{
				id: uuidv4(),
				name: 'Alexander McQueen broques',
				price: 650,
				primaryImage: '	https://i.ibb.co/3zKMHnZ/9.webp'
			},
			{
				id: uuidv4(),
				name: 'Cagole pointed-toe boots',
				price: 850,
				primaryImage: '			https://i.ibb.co/bFBGrCd/10.webp'
			},
			{
				id: uuidv4(),
				name: 'Red knee-length boots',
				price: 800,
				primaryImage: 'https://i.ibb.co/Zm5dGnF/11.webp'
			},
			{
				id: uuidv4(),
				name: 'leather knee-length boots',
				price: 900,
				primaryImage: 'https://i.ibb.co/k19X9Zb/12.webp'
			},
			{
				id: uuidv4(),
				name: 'Off-white mid-top sneakers',
				price: 500,
				primaryImage: 'https://i.ibb.co/W2zyLwK/13.webp'
			},
			{
				id: uuidv4(),
				name: 'Jimmy Choo sandals',
				price: 600,
				primaryImage: 'https://i.ibb.co/4JKXJts/14.webp'
			},
			{
				id: uuidv4(),
				name: 'logo-embossed slides',
				price: 150,
				primaryImage: 'https://i.ibb.co/gvC7k0v/15.webp'
			},
			{
				id: uuidv4(),
				name: 'Gucci horsebit loafers',
				price: 600,
				primaryImage: 'https://i.ibb.co/PDyjM2Q/16.webp'
			},
			{
				id: uuidv4(),
				name: 'Dolce & Gabbana low-top sneakers',
				price: 400,
				primaryImage: 'https://i.ibb.co/VYJz1Tr/17.webp'
			},
			{
				id: uuidv4(),
				name: 'Valentino Garavani sandals',
				price: 750,
				primaryImage: 'https://i.ibb.co/Ns5wjvP/18.webp'
			},
			{
				id: uuidv4(),
				name: 'Chamonix ankle boots',
				price: 850,
				primaryImage: 'https://i.ibb.co/nMwbLNM/19.webp'
			},
			{
				id: uuidv4(),
				name: 'GANNI leather sneakers',
				price: 500,
				primaryImage: 'https://i.ibb.co/QkRpq5d/20.webp'
			}
		]
	},
	{
		title: 'mens',
		items: [
			{
				id: uuidv4(),
				name: 'Black polo shirt',
				price: 120,
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
			},

			{
				id: uuidv4(),
				name: 'striped loose-fit shirt',
				price: 400,
				primaryImage: 'https://i.ibb.co/L6LCbrq/9.jpg'
			},
			{
				id: uuidv4(),
				name: 'button-up checked jacket',
				price: 300,
				primaryImage: 'https://i.ibb.co/gd0BK0X/10.jpg'
			},
			{
				id: uuidv4(),
				name: 'Casablanca jumper',
				price: 500,
				primaryImage: 'https://i.ibb.co/X8X80tD/11.jpg'
			},
			{
				id: uuidv4(),
				name: 'Brown track pants',
				price: 130,
				primaryImage: 'https://i.ibb.co/Y7wyxXD/12.webp'
			},
			{
				id: uuidv4(),
				name: 'Zip-up coat',
				price: 550,
				primaryImage: 'https://i.ibb.co/Xx9rvQg/13.webp'
			},
			{
				id: uuidv4(),
				name: 'Cashmere roll-neck jumper',
				price: 200,
				primaryImage: 'https://i.ibb.co/B3sLCh0/14.webp'
			},
			{
				id: uuidv4(),
				name: 'Versace T-shirt',
				price: 400,
				primaryImage: 'https://i.ibb.co/VCQjL10/15.webp'
			},
			{
				id: uuidv4(),
				name: 'Cotton sweatshirt',
				price: 300,
				primaryImage: 'https://i.ibb.co/wSYGXMc/16.jpg'
			},
			{
				id: uuidv4(),
				name: 'Black track shorts',
				price: 200,
				primaryImage: 'https://i.ibb.co/pbK11zG/17.webp'
			},
			{
				id: uuidv4(),
				name: 'Black single-breasted blazer',
				price: 700,
				primaryImage: 'https://i.ibb.co/4PdngwM/18.webp'
			},
			{
				id: uuidv4(),
				name: 'Pony-embroided shrt',
				price: 500,
				primaryImage: 'https://i.ibb.co/KKQQyrf/19.webp'
			},
			{
				id: uuidv4(),
				name: 'Logo padded coat',
				price: 600,
				primaryImage: 'https://i.ibb.co/s5W5XKG/20.webp'
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
			},
			{
				id: uuidv4(),
				name: 'Black asymmetric dress',
				price: 623,
				primaryImage: 'https://i.ibb.co/k3wsy5P/9.webp'
			},
			{
				id: uuidv4(),
				name: 'Gold Corset dress',
				price: 500,
				primaryImage: 'https://i.ibb.co/sb2GcQM/10.webp'
			},
			{
				id: uuidv4(),
				name: 'Belted puffer coat',
				price: 600,
				primaryImage: 'https://i.ibb.co/vXYFfCX/11.webp'
			},
			{
				id: uuidv4(),
				name: 'Polka dot-print dress',
				price: 450,
				primaryImage: 'https://i.ibb.co/nj9XbbQ/12.webp'
			},
			{
				id: uuidv4(),
				name: 'Cut-out blazer-dress',
				price: 300,
				primaryImage: 'https://i.ibb.co/1n94hPX/13.webp'
			},
			{
				id: uuidv4(),
				name: 'Sequin midi dress',
				price: 800,
				primaryImage: 'https://i.ibb.co/p2ttbsD/14.jpg'
			},
			{
				id: uuidv4(),
				name: 'Zimmermann trim dress',
				price: 900,
				primaryImage: 'https://i.ibb.co/vZrx2GF/15.webp'
			},
			{
				id: uuidv4(),
				name: 'sierra ribbed-knit dress',
				price: 300,
				primaryImage: 'https://i.ibb.co/0CXD686/16.webp'
			},
			{
				id: uuidv4(),
				name: 'High-neck zipper jumper',
				price: 280,
				primaryImage: 'https://i.ibb.co/BVxZ29c/17.webp'
			},
			{
				id: uuidv4(),
				name: 'Dolce & Gabbana printed short dress',
				price: 980,
				primaryImage: 'https://i.ibb.co/N79nRgh/18.webp'
			},
			{
				id: uuidv4(),
				name: 'Straight-leg cargo trousers',
				price: 540,
				primaryImage: 'https://i.ibb.co/wBqjhP2/19.webp'
			},
			{
				id: uuidv4(),
				name: 'Rhinestone-embellished dress',
				price: 1040,
				primaryImage: 'https://i.ibb.co/8z3N0Km/20.webp'
			}
		]
	},
	{
		title: 'kids',
		items: [
			{
				id: uuidv4(),
				name: 'Single-breasted cashmere coat',
				price: 500,
				primaryImage: 'https://i.ibb.co/VCL88s9/1.jpg'
			},
			{
				id: uuidv4(),
				name: 'Medusa-head T-shirt',
				price: 300,
				primaryImage: 'https://i.ibb.co/YN2bLj7/2.webp'
			},
			{
				id: uuidv4(),
				name: 'Straight-leg cotton pants',
				price: 200,
				primaryImage: 'https://i.ibb.co/yBZdKCP/3.webp'
			},
			{
				id: uuidv4(),
				name: 'Quilted hooded jacket',
				price: 450,
				primaryImage: 'https://i.ibb.co/StYhz8J/4.webp'
			},
			{
				id: uuidv4(),
				name: 'Rhinestone-embellished logo hoodie',
				price: 540,
				primaryImage: 'https://i.ibb.co/27QppHV/5.webp'
			},
			{
				id: uuidv4(),
				name: 'Check-trim pleated trench coat',
				price: 700,
				primaryImage: 'https://i.ibb.co/Kw6kBg9/6.webp'
			},
			{
				id: uuidv4(),
				name: 'Check-print tailored shorts',
				price: 150,
				primaryImage: 'https://i.ibb.co/vYDdxRn/7.webp'
			},

			{
				id: uuidv4(),
				name: 'Kaleidoscopic pleated skirt',
				price: 350,
				primaryImage: 'https://i.ibb.co/h1TqCk4/8.webp'
			},
			{
				id: uuidv4(),
				name: 'Ralp Lauren Polo Pony hoodie',
				price: 420,
				primaryImage: 'https://i.ibb.co/YRV4ptg/9.webp'
			},
			{
				id: uuidv4(),
				name: 'Plaid peak-lapel suit',
				price: 580,
				primaryImage: 'https://i.ibb.co/SJ535fc/10.webp'
			},
			{
				id: uuidv4(),
				name: 'Logo-lettering striped T-shirt',
				price: 220,
				primaryImage: 'https://i.ibb.co/hVjw0rx/11.webp'
			},
			{
				id: uuidv4(),
				name: 'Logo plaque jeans',
				price: 215,
				primaryImage: 'https://i.ibb.co/njYgcn8/12.jpg'
			},
			{
				id: uuidv4(),
				name: 'Givenchy logo-print T-shirt',
				price: 330,
				primaryImage: 'https://i.ibb.co/n3bcQf0/13.webp'
			},
			{
				id: uuidv4(),
				name: 'Tommy Hilfiger T-shirt',
				price: 160,
				primaryImage: 'https://i.ibb.co/cJn8djt/14.webp'
			},
			{
				id: uuidv4(),
				name: 'Logo-print padded jacket',
				price: 385,
				primaryImage: 'https://i.ibb.co/nkDh4rx/15.webp'
			},
			{
				id: uuidv4(),
				name: 'Floral-print midi dress',
				price: 240,
				primaryImage: 'https://i.ibb.co/M9JyHg6/16.webp'
			},
			{
				id: uuidv4(),
				name: 'Medusa intarsia knit sweater',
				price: 360,
				primaryImage: 'https://i.ibb.co/B6yCSmy/17.jpg'
			},
			{
				id: uuidv4(),
				name: 'The north face T-shirt',
				price: 125,
				primaryImage: 'https://i.ibb.co/3pq8YbH/18.webp'
			},
			{
				id: uuidv4(),
				name: 'Vintage Check polo dress',
				price: 575,
				primaryImage: 'https://i.ibb.co/BTHNqgp/19.jpg'
			},
			{
				id: uuidv4(),
				name: 'Star-print T-shirt',
				price: 575,
				primaryImage: 'https://i.ibb.co/t44DXq4/20.webp'
			}
		]
	},
	{
		title: 'beauty',
		items: [
			{
				id: uuidv4(),
				name: 'Harmonia cushion-cut bracelet',
				price: 430,
				primaryImage: 'https://i.ibb.co/ySrspFR/1.webp'
			},
			{
				id: uuidv4(),
				name: 'XXL rope chain bracelet',
				price: 340,
				primaryImage: 'https://i.ibb.co/vVBGBcV/2.webp'
			},
			{
				id: uuidv4(),
				name: 'The Curve mini bucket bag',
				price: 950,
				primaryImage: 'https://i.ibb.co/rZYD18b/3.webp'
			},
			{
				id: uuidv4(),
				name: 'Chroma hoop earrings',
				price: 640,
				primaryImage: 'https://i.ibb.co/KsKZ5L2/4.webp'
			},
			{
				id: uuidv4(),
				name: 'Embellished skull clutch bag',
				price: 1200,
				primaryImage: 'https://i.ibb.co/94QkTCc/5.jpg'
			},
			{
				id: uuidv4(),
				name: 'Greca drop earrings',
				price: 433,
				primaryImage: 'https://i.ibb.co/tm7Nhdj/6.webp'
			},
			{
				id: uuidv4(),
				name: 'La Medusa top-handle bag',
				price: 880,
				primaryImage: 'https://i.ibb.co/bsML7r5/7.webp'
			},
			{
				id: uuidv4(),
				name: 'Medusa pendant necklace',
				price: 455,
				primaryImage: 'https://i.ibb.co/RNJdwjK/8.webp'
			},
			{
				id: uuidv4(),
				name: 'Valentino Garavani crystal-studded bag',
				price: 2500,
				primaryImage: 'https://i.ibb.co/m94xqwf/9.webp'
			},
			{
				id: uuidv4(),
				name: 'Chunky hoop earrings',
				price: 150,
				primaryImage: 'https://i.ibb.co/QnXrX63/10.webp'
			},
			{
				id: uuidv4(),
				name: 'Mineral eye liner',
				price: 400,
				primaryImage: 'https://i.ibb.co/vVWr2Wn/11.webp'
			},
			{
				id: uuidv4(),
				name: 'Natural mineral mascara',
				price: 450,
				primaryImage: 'https://i.ibb.co/MPPG9r2/12.webp'
			},
			{
				id: uuidv4(),
				name: 'Classic mineral lipstick',
				price: 370,
				primaryImage: 'https://i.ibb.co/Mfs8zFL/13.jpg'
			},
			{
				id: uuidv4(),
				name: 'Vegan stippling brush',
				price: 120,
				primaryImage: 'https://i.ibb.co/h1Mg6S0/14.webp'
			},
			{
				id: uuidv4(),
				name: 'Glamour eye lashes',
				price: 100,
				primaryImage: 'https://i.ibb.co/N3dCGMZ/15.webp'
			},
			{
				id: uuidv4(),
				name: 'Lip repair balm',
				price: 150,
				primaryImage: 'https://i.ibb.co/wYnyLDF/16.webp'
			},
			{
				id: uuidv4(),
				name: 'Water eye makeup remover',
				price: 200,
				primaryImage: 'https://i.ibb.co/Y2hBJB0/17.webp'
			},
			{
				id: uuidv4(),
				name: 'Natural pain relief oil',
				price: 575,
				primaryImage: 'https://i.ibb.co/NVmsfwM/18.webp'
			},
			{
				id: uuidv4(),
				name: 'Pre-cleansing oil',
				price: 600,
				primaryImage: 'https://i.ibb.co/kqC6vM5/19.webp'
			},
			{
				id: uuidv4(),
				name: 'Makeup palette',
				price: 300,
				primaryImage: 'https://i.ibb.co/B6sZ2f1/20.jpg'
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
				name: 'Earbuds and charging case',
				price: 75,
				primaryImage: 'https://i.ibb.co/xGXmRkk/2.webp',
				secondaryImage: 'https://i.ibb.co/YRPWZPM/2.webp'
			},
			{
				id: uuidv4(),
				name: 'Paisley embroidered wash bag',
				price: 200,
				primaryImage: 'https://i.ibb.co/3psP3R1/3.webp',
				secondaryImage: 'https://i.ibb.co/M6dvLM2/3.webp'
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
			},
			{
				id: uuidv4(),
				name: 'Vintage-check scarf',
				price: 100,
				primaryImage: 'https://i.ibb.co/rwQjm9Z/9.jpg'
			},
			{
				id: uuidv4(),
				name: 'Baseball cap',
				price: 200,
				primaryImage: 'https://i.ibb.co/TKKMTxp/10.webp'
			},
			{
				id: uuidv4(),
				name: 'Pilot frame sunglasses',
				price: 182,
				primaryImage: 'https://i.ibb.co/YTkCcXw/11.webp'
			},
			{
				id: uuidv4(),
				name: 'Virginie fedora hat',
				price: 502,
				primaryImage: 'https://i.ibb.co/ChnZXPP/12.webp'
			},
			{
				id: uuidv4(),
				name: 'Silk elephant embroidery tie',
				price: 85,
				primaryImage: 'https://i.ibb.co/ftKg1VG/13.jpg'
			},

			{
				id: uuidv4(),
				name: 'Mare 300MT 43mm',
				price: 500,
				primaryImage: 'https://i.ibb.co/BTSg7nq/14.webp'
			},
			{
				id: uuidv4(),
				name: 'Wallet-on chain bag',
				price: 950,
				primaryImage: 'https://i.ibb.co/nmX3hJM/15.webp'
			},
			{
				id: uuidv4(),
				name: 'Arrow flap backpack',
				price: 650,
				primaryImage: 'https://i.ibb.co/BKt6Pcx/16.webp'
			},
			{
				id: uuidv4(),
				name: 'Montre Index 40.5mm',
				price: 350,
				primaryImage: 'https://i.ibb.co/W3cCwsR/17.webp'
			},
			{
				id: uuidv4(),
				name: 'Stella crystal-star necklace',
				price: 175,
				primaryImage: 'https://i.ibb.co/Nsp3P09/18.webp'
			},
			{
				id: uuidv4(),
				name: 'The $kull 44mm',
				price: 775,
				primaryImage: 'https://i.ibb.co/LxjV9kX/19.webp'
			},
			{
				id: uuidv4(),
				name: 'Floral-embellished tote bag',
				price: 470,
				primaryImage: 'https://i.ibb.co/Jcx3NB9/20.webp'
			}
		]
	}
];

export default PRODUCT_DATA;
