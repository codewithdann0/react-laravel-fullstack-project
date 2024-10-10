// DefaultLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
    return (
        <div>
            {/* Add your layout components like header, footer, etc. */}
            <Outlet /> {/* This renders the child routes */}
        </div>
    );
};

export default DefaultLayout; // Ensure this is the default export
