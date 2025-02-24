import { useNavigate } from 'react-router-dom';

const Header = () => {
	const navigate = useNavigate();

	const handleAddClick = () => {
		navigate('/add');
	};


	return (
		<header> 
			<div className='w-full max-w-full bg-white shadow flex items-center justify-between p-5 mx-auto'>
			<a href="/" className='flex items-center gap-2'>
				<i className='fa-solid fa-list-check text-primary-950 text-2xl'></i>
				<h1 className='text-xl font-title text-primary-950'>ToDo App</h1>
			</a>
			<button className='bg-orange-500 text-primary-50 rounded-full w-[40px] h-[40px] flex items-center justify-center'
				onClick={handleAddClick}>
				<span className='material-symbols-outlined text-lg'>add</span>
			</button>
			</div> 
		</header>
	);
};

export default Header
