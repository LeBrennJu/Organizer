import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
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
    localStorage.setItem("token", response);

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
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Adresse e-mail</Form.Label>
        <Form.Control
          type="email"
          name="email" 
          placeholder="Enter email"
          value={formData.email} // Liez la valeur du champ à l'état formData
          onChange={handleInputChange} // Utilisez le gestionnaire onChange pour mettre à jour l'état
        />
        <Form.Text className="text-muted">
          Nous ne partagerons jamais votre adresse e-mail.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mot de passe</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password} // Liez la valeur du champ à l'état formData
          onChange={handleInputChange} // Utilisez le gestionnaire onChange pour mettre à jour l'état
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default LoginForm;
