import React, { useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import "./Home.scss"
import RegisterForm from "./RegisterForm";

const Home = () => {

    const Login = true;

    return (
        <>
            <main className="home__container">

                <section className="home--area" >
                    <div className="home--header__container" >
                       <h2>Connexion</h2> 
                       <div className="googleOath__container">Connexion avec google</div>
                    </div>
                    
                    <div className="home--line"></div>
                    
                    {Login && (
                        <LoginForm />
                    )}
                    {!Login && (
                        <RegisterForm />
                    )}
                </section>
                
                
            </main>
        </>
    );
};

export default Home;

