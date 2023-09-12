import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoginForm from "./LoginForm";
import "./Home.scss";
import RegisterForm from "./RegisterForm";
import { setLoginForm } from "../../store/authActions"; // Assurez-vous d'importer l'action appropriée

const Home = () => {
  const isLoginForm = useSelector((state) => state.auth.loginForm);
  const dispatch = useDispatch();

  // Utilisez useEffect pour mettre à jour loginForm à true lors du montage du composant
  useEffect(() => {
    dispatch(setLoginForm(true));
  }, [dispatch]);

  return (
    <>
      <main className="home__container">
        <section className="home--area">
          <div className="home--header__container">
            {isLoginForm ? <h2>Connexion</h2> : <h2>Inscription</h2>}
            {isLoginForm ? (
              <div className="googleOath__container">Connexion avec Google</div>
            ) : (
              <div className="googleOath__container">Inscription avec Google</div>
            )}
          </div>

          <div className="home--line"></div>

          {isLoginForm ? <LoginForm /> : <RegisterForm />}
        </section>
      </main>
    </>
  );
};

export default Home;
