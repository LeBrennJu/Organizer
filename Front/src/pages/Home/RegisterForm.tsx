import React, { useState } from "react";
import { register } from '../../services/organizer/user'; // Assurez-vous d'importer la fonction de création de compte appropriée

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "", // Champ de confirmation du mot de passe
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Accédez aux valeurs des champs du formulaire à partir de l'état formData
    const { email, password, confirmPassword } = formData;
  
    // Faites quelque chose avec email et password, par exemple, imprimez-les dans la console
    console.log("Tentative de création de compte avec email : " + email);
    
    // Vérifiez si le mot de passe correspond à la confirmation du mot de passe
    if (password !== confirmPassword) {
      console.log("Les mots de passe ne correspondent pas.");
      return; // Empêche la soumission du formulaire si les mots de passe ne correspondent pas
    }
    
    // Appelez la fonction d'inscription appropriée avec les données du formulaire
    const response = await register(formData);
    console.log("ici la response à l'inscription " + response);

    if (response.status === 200) {
      localStorage.setItem("token", response.data);
      window.location.href = "/board";
    }

    // Ici la suite de l'appel à JWT Token, si nécessaire
  }

  const handleInputChange = (e) => {
    // Mettez à jour l'état formData avec les nouvelles valeurs lorsqu'un champ d'entrée change
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // Utilisez le nom du champ comme clé pour mettre à jour la valeur correspondante
    });
  }

  return (
    <form className="register--form" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label>Adresse e-mail</label>
        <input
          type="email"
          name="email" 
          placeholder="Enter email"
          value={formData.email}
          onChange={handleInputChange}
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
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-3">
        <label>Confirmation du mot de passe</label>
        <input
          type="password"
          name="confirmPassword" // Nom du champ de confirmation du mot de passe
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-3">
        <input type="checkbox" id="formBasicCheckbox" />
        <label htmlFor="formBasicCheckbox">Google recaptcha</label>
      </div>

      <button type="submit">
        S'inscrire
      </button>
    </form>
  );
}

export default RegisterForm;

