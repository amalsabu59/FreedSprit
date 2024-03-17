import React from 'react';
import SearchInput from './SearchInput';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import NavTabs from './Tabs';
const Navbar = () => {
    return (
        <nav className="flex justify-between p-4 bg-#171717">
            <div>
                <img src="/logo.png" alt="Logo" className="h-10" />
            </div>
            <div className="flex items-center w-1/2 justify-between">
                <SearchInput />
                <div className="flex flex items-center space-x-1">
                    <AddShoppingCartIcon className="text-white" /> {/* Shopping icon */}
                    <div className="font-oswald text-xs font-medium text-white">Cart</div>

                </div>
                <div className="flex flex items-center space-x-1">
                    <PersonOutlinedIcon className="text-white" /> {/* Shopping icon */}
                    <div className="font-oswald text-xs font-medium text-white">My Account</div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
