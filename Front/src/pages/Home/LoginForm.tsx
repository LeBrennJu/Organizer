import React, { useState } from "react";
import { login } from '../../services/organizer/user';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Accédez aux valeurs des champs du formulaire à partir de l'état formData
    const { email, password } = formData;
  
    // Faites quelque chose avec email et password, par exemple, imprimez-les dans la console
    console.log("Tentative de connexion avec email : " + email);
    const response = await login(formData)
    console.log("ici la response au login "+response)
    if(response.status == 200 ){
      localStorage.setItem("token", response.data);
      window.location.href = "/board";
    }

    // Ici la suite appel axios jwt token 
  }

  const handleInputChange = (e) => {
    // Mettez à jour l'état formData avec les nouvelles valeurs lorsqu'un champ d'entrée change
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // Utilisez le nom du champ comme clé pour mettre à jour la valeur correspondante
    });
  }

  return (
    <form className="login--form" onSubmit={handleSubmit}>
      <div className="mb-3" >
        <label>Adresse e-mail</label>
        <input
          type="email"
          name="email" 
          placeholder="Enter email"
          value={formData.email} // Liez la valeur du champ à l'état formData
          onChange={handleInputChange} // Utilisez le gestionnaire onChange pour mettre à jour l'état
        />
        <small className="text-muted">
          Nous ne partagerons jamais votre adresse e-mail.
        </small>
      </div>

      <div className="mb-3">
        <label>Mot de passe</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password} // Liez la valeur du champ à l'état formData
          onChange={handleInputChange} // Utilisez le gestionnaire onChange pour mettre à jour l'état
        />
      </div>
      <div className="mb-3" >
        <input type="checkbox" id="formBasicCheckbox" />
        <label htmlFor="formBasicCheckbox">Google recaptcha</label>
      </div>
      <button type="submit">
        Connexion
      </button>
    </form>
  );
}

export default LoginForm;
