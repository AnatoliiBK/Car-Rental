import React from 'react';

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <form>
                <div className="form-group">
                    <label className='label'>Car brand:</label>
                    <input type="text" placeholder="Enter the text" />
                    <button className='btnSidebar'>Brand</button>
                </div>
                <div className="form-group">
                    <label className='label'>Price/ 1 hour:</label>
                    <input type="text" placeholder="To $" />
                    <button className='btnSidebar'>Price</button>
                </div>
                <div className="form-group">
                    <label className='label'>Car mileage / km:</label>
                    <input type="text" placeholder="From" />
                    <input type="text" placeholder="To" />
                </div>
                <button type="submit" className='btnSidebar'>Search</button>
            </form>
        </div>
    );
};

