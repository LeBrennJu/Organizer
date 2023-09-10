import { UserController } from "./controller/UserController"


export const Routes = [

    // ------------------//ROUTES FOR USER------------------------------
    {
        method: "get",
        route: "/users",
        controller: UserController,
        action: "all"
    }, {
        method: "get",
        route: "/users/:id",
        controller: UserController,
        action: "one"
    }, {
        method: "post",
        route: "/users",
        controller: UserController,
        action: "save"
    }, {
        method: "delete",
        route: "/users/:id",
        controller: UserController,
        action: "remove"
    },{
        method: "put", // Utilisez la méthode HTTP PUT pour la mise à jour
        route: "/users/:id", // Route pour mettre à jour un utilisateur en utilisant son ID
        controller: UserController,
        action: "update" // Nom de la méthode dans le UserController
    },
    // Ajoutez la route pour la création d'un jeton JWT
    {
        method: "post",
        route: "/login", // L'URL pour la demande de connexion
        controller: UserController,
        action: "login" // Nom de la méthode dans le UserController
    }
    

  ]