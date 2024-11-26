import React from 'react';

const Home = () => {
    return (
        <div>
            <div className='bg-orange-400 w-screen p-4'>
                <h1 className='text-4xl font-bold text-center text-white'>AppAlchemy LLC</h1>
            </div>
            <div className='flex justify-center'>
                <div className='bg-slate-100 rounded-x p-8 space-y-16 w-[80%]'>
                    <h2 className='text-center text-2xl'>AppAlchemy is a Software Development and Publishing Company</h2>
                    <div className='flex flex-col space-y-4'>
                        <h2 className='text-center text-2xl'>Projects:</h2>
                        <p className='text-center text-xl'>Guess U</p>
                        <p className='text-center text-xl'>Recipe App</p>
                    </div>
                    <div className='flex flex-col space-y-4'>
                        <h2 className='text-center text-2xl'>Contact Info:</h2>
                        <p className='text-center text-xl'>app.alchemy.business@gmail.com</p>
                        <p className='text-center text-xl'>Privacy Policy Below</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Home;