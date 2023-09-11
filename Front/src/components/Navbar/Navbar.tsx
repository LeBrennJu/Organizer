function Navbar() {
  // Vérifiez si un token est présent dans le local storage
  const hasToken = localStorage.getItem("token");

  const handleLogout = () => {
    // Supprimez le token du local storage
    localStorage.removeItem("token");
    // Effectuez une redirection en utilisant window.location.href
    window.location.href = "/";
  };

  return (
    <header>
      <h1>Organizer</h1>
      <input type="text" placeholder="Search" aria-label="Search" /> 
      <div className="user--gestion">
        {hasToken ? (
          <p onClick={handleLogout}>Déconnexion</p>
        ) : (
          <p>Inscription</p>
        )}
      </div>
    </header>
  );
}

export default Navbar;
