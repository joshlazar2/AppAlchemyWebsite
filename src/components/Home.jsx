import React from 'react';

const Home = () => {
    return (
        <div>
            <div className='bg-slate-700 w-screen p-4'>
                <h1 className='text-4xl font-bold text-center text-white'>AppAlchemy LLC</h1>
            </div>
            <div className='flex justify-center'>
                <div className='bg-slate-100 rounded-x p-8 space-y-16 w-[80%] w-screen'>
                    <h2 className='text-center text-2xl'>AppAlchemy is a Software Development and Publishing Company</h2>
                    <div className='flex flex-col space-y-4 justify-center items-center'>
                        <h2 className='text-center text-2xl'>Projects:</h2>
                        <div className='space-y-2 w-[60%]'>
                            <p className='text-center text-xl'>Guess U</p>
                            <p>Think you know where professional basketball players played in college? Put your knowledge to the test with Guess U, a fun and fast-paced trivia game where you guess the college that basketball players attended. From iconic athletes to rising stars, challenge yourself and see how well you know your basketball history! <br />
                                - Multiple Eras: Test your knowledge of players from the 70s, 80s, 90s, 00s, and 10s.
                                <br />
                                - Fun Game Modes: Play solo or compete with friends in a multiplayer challenge!
                                <br />
                                - Daily Player Guess: New trivia challenge every day with a random player.
                                <br />
                                - Simple & Addictive Gameplay: Easy to play, hard to put down!
                                <br />
                                Whether you're a college basketball fan or just looking to learn more about the players who've shaped the game, Guess U is the ultimate trivia challenge for you!</p>
                        </div>
                        <p className='text-center text-xl'>Recipe App Coming Soon!</p>
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