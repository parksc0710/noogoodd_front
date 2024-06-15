import React from 'react';

const name = "PARK";

function Home() {
    return (
        <div className="flex justify-center items-center h-screen">
            <h1 className="text-4xl font-bold">
                Welcome to Next.js with React 17 and TypeScript
            </h1>
            <span>{name}님 안녕하세요?</span>
        </div>
    );
}

export default Home;