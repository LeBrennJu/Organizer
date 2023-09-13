import { ResponseErrorInterface, ResponseInterface, ResponseSuccessInterface } from './../response.interface';
import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDocument } from './schemas/user.schema';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { ObjectId } from 'mongodb';


@Controller('user')
export class UserController {

    constructor(
       private readonly userService: UserService,
    ){}
    @Post()
    async create(
        @Body() body :any
    ):Promise<UserDocument>
    {
     return this.userService.create(body);
    }

    @Post('login')
    async login(@Body() body: { email: string, password: string }) {
        try {
            const { email, password } = body;
            
            // Recherchez l'utilisateur par email
            const user = await this.userService.findByEmail(email);
    
            if (!user) {
                // Gestion de l'utilisateur inexistant
                return { error: true, message: "L'utilisateur n'existe pas" };
            }
    
            // Utilisez user.id ici
            const userId = user.id;
    
            // Vérifiez le mot de passe
            // if (!bcrypt.compareSync(password, user.password)) {
            //     // Gestion du mot de passe incorrect
            //     return { error: true, message: "Mot de passe incorrect" };
            // }
            if (password != user.password) {
                // Gestion du mot de passe incorrect
                return { error: true, message: "Mot de passe incorrect" };
            }
            // Générez le jeton JWT
            const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
            
            // Répondre au client avec le jeton
            return { token };
        } catch (error) {
            console.error("🐼UserController ~ login ~ error:", error);
            throw new Error("Erreur lors de la connexion"); 
        }
    }
    
    @Get(':id')
    async getById(
        @Param('id') id:string
    ):Promise<ResponseSuccessInterface | ResponseErrorInterface>
    {
        console.log("🚀 ~ file: user.controller.ts:23 ~ UserController ~ id:", id)
        const user = await this.userService.getById(id);
        if(!user)
        {
            return {error:true, message :"error", status :404};
        }
        console.log("🚀 ~ file: user.controller.ts:26 ~ UserController ~ user:", user)

        return { data:user, message : "User was found", status :200}
    }

    @Get()
    async getAll():Promise<Array<UserDocument>>{

        const users = await this.userService.getAll();
        return users ;
    }

    @Put(':id')
    async updateById(
        @Body() body :any,
        @Param('id') id:string
    ):Promise<{user? : UserDocument, error?: boolean, message :string, status : number}>{ // à remplacer à terme par response interface
        const user = await this.userService.getById(id);
        if(!user)
        {
            return { error : true , message: "User doesn't exist with this id", status :404} 
        }

        const res =  await this.userService.update(body, id)

        return { user :res, message : " coucou c'est nous", status :200}
    }

    @Delete(':id')
    async deleteById(
        @Param('id') id :string
    ):Promise<{}>{
        const user = await this.userService.getById(id);
        if(!user)
        {
            return { error : true , message: "User doesn't exist with this id"} 
        }

        this.userService.delete(id)
        return {message :" object Deleted"}
    }
}
