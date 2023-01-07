import {
	DirectoryCard,
	DirectoryText,
	DirectoryLink
} from './directory-item.styles';

const DirectoryItem = () => {
	const directoryItems = [
		{
			id: 1,
			title: "men's collection",
			linkUrl: "shop men's",
			imageUrl: 'https://i.ibb.co/dJqTvWP/mens.webp',
			route: '/mens'
		},
		{
			id: 2,
			title: "women's collection",
			linkUrl: "shop women's",
			imageUrl: 'https://i.ibb.co/zxc0Zt6/womens.webp',
			route: '/womens'
		},
		{
			id: 3,
			title: 'junior collection',
			linkUrl: "shop kid's",
			imageUrl: 'https://i.ibb.co/6sw37xf/kids.webp',
			route: '/kids'
		},
		{
			id: 4,
			title: 'shoes collection',
			linkUrl: 'shop shoes',
			imageUrl: 'https://i.ibb.co/4pLS47v/shoes.webp',
			route: '/shoes'
		},
		{
			id: 5,
			title: 'beauty collection',
			linkUrl: 'shop beauty',
			imageUrl: 'https://i.ibb.co/XWNxRhd/beauty.webp',
			route: '/beauty'
		},
		{
			id: 6,
			title: 'accessories collection',
			linkUrl: 'shop accessories',
			imageUrl: 'https://i.ibb.co/Hh38V8t/accessories.webp',
			route: '/accessories'
		}
	];

	const renderedDirectoryItems = directoryItems.map((item) => {
		const { id, title, linkUrl, imageUrl, route } = item;

		return (
			<DirectoryCard key={id} imageUrl={imageUrl}>
				<DirectoryText>
					<h3>{title}</h3>
					<DirectoryLink to={route}>{linkUrl}</DirectoryLink>
				</DirectoryText>
			</DirectoryCard>
		);
	});
	return <>{renderedDirectoryItems}</>;
};

export default DirectoryItem;
