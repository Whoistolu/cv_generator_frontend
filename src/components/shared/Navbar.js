import React from 'react';


const Navbar = () => {

    return (
        <nav className="fixed top-0 z-50 w-full h-16 bg-blue-600 shadow-md">
            <div className='container flex items-center justify-between h-full px-4 mx-auto'>
                <div className="text-2xl font-bold text-white">
                    <div> CV GENERATOR</div>
                </div>

                <div className="hidden space-x-6 md:flex">
                    <div className="text-white hover:text-red-900">REGISTER</div>
                    <div className="text-white hover:text-red-900">LOGIN</div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;