import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchInput = () => {
    return (
        <div className="relative">
            <input
                type="text"
                placeholder="Search for products"
                className="border rounded-full pl-8 pr-4 py-2 focus:outline-none focus-visible:outline-none focus-visible:border-white focus-visible:border-opacity-50"
                style={{
                    backgroundColor: 'transparent', borderColor: '#7B7B7B',
                    fontFamily: 'Oswald', fontSize: '14px', fontWeight: 400,
                    lineHeight: '20px', letterSpacing: '0em', textAlign: 'left', width: '300px', height: '40px',
                }}
            />
            <div
                className="absolute inset-y-1.5 right-1 flex items-center justify-center bg-white rounded-full"
                style={{ width: '26px', height: '26px', marginRight: '8px' }}
            >
                <SearchIcon style={{ color: 'red' }} />
            </div>
        </div>
    );
};

export default SearchInput;
