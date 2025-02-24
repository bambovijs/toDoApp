

import PropTypes from 'prop-types';

const Filter = ({setFilter}) => {
    return (
    <div className='w-full flex justify-center gap-4 mt-4 mb-4'>
            <button 
            className='px-4 py-2 bg-orange-500 text-primary-50 rounded-md' 
            onClick={() => setFilter('all')}
            >
                All
            </button>
            <button 
            className='px-4 py-2 bg-neutral-200 text-neutral-950 rounded-md'
            onClick={() => setFilter('active')}
            >
                Active
            </button>
            <button className='px-4 py-2 bg-neutral-200 text-neutral-950 rounded-md'
            onClick={() => setFilter('completed')}
            >
                Completed
            </button>
    </div>
    )

}

Filter.propTypes = {
    setFilter: PropTypes.func.isRequired,
};

export default Filter