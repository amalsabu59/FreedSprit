import React from 'react';

const BoxComponent = () => {
    return (
        <div style={{ position: 'relative', textAlign: 'center', marginLeft: '250px' }}>
            <div
                style={{
                    width: '280px',
                    height: '150px',
                    position: 'absolute',
                    top: '80px', // Adjust this value to control how much the image overflows from the top
                    left: '50%',
                    transform: 'translateX(-50%)',
                    borderRadius: '25px',
                    border: '1px solid #FFFFFFB2',
                    background: 'linear-gradient(116.15deg, rgba(192, 192, 192, 0.63) -10.88%, rgba(255, 255, 255, 0.49) -10.87%, rgba(255, 255, 255, 0.07) 74.79%)',
                }}
            ></div>
            <img
                src="/proudct_one.png" // Replace with your image URL
                alt="Your Image"
                style={{
                    width: '150px',
                    height: 'auto',
                    position: 'relative', // Position this image relative to its container
                    zIndex: 1, // Ensure the image is above the background
                }}
            />
            <div style={{ position: 'relative', zIndex: 2, color: '#ffff' }}>Your Text Component</div>
        </div>
    );
};

export default BoxComponent;
