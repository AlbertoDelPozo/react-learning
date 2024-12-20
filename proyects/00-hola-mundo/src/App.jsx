import { useState } from 'react';
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {
    const formatUserName = (userName) => `@${userName}`


    return (
        <section className='App'>
            <TwitterFollowCard userName='midudev'>
            Pepe Pepillo Pepito
            </TwitterFollowCard>

            {/* <TwitterFollowCard
            formatUserName={formatUserName}
            userName="pepe"
            name="Piep puiepas asdasd" />

            <TwitterFollowCard
            formatUserName={formatUserName}
            userName="popop"
            name="Pepe Pepillo Pepito" />

            <TwitterFollowCard
            formatUserName={formatUserName}
            userName="apapa"
            name="Pepe Pepillo Pepito" /> */}

            {/* <button onClick={() => setName('pepepp')}>Cambio nombre</button> */}
        </section>

    )
}