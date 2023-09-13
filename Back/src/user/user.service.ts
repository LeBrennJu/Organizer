import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {

    constructor(
        @InjectModel(User.name)
        private userModel : Model<UserDocument>
    ){}


    async create(body :any): Promise<UserDocument>{
        console.log("🚀 ~ file: user.service.ts:16 ~ UserService ~ create ~ body:", body)
        // const user = new this.userModel({firstname: "baba", lastname : "dina", email : "baba.dina@gmail.com"})
        // user.save();
        const user = this.userModel.create(body)
        return user ;
    }

    async getById(id :string): Promise<UserDocument>
    {
        const user = await this.userModel.findOne({_id :id})
        const user2 = await this.userModel.findById(id)
        console.log("🚀 ~ file: user.service.ts:27 ~ UserService ~ user2:", user2)
        
        return user;
    }
    
    async getAll(): Promise<UserDocument[]>{

        return this.userModel.find({})

    }

    async update(body :any , id : string): Promise<UserDocument>{
        const user = await this.userModel.findByIdAndUpdate({_id : id}, body, { new :true })
        return user;
    }

    async delete(id :string):Promise<void>
    {
        const user = await this.userModel.findByIdAndDelete(id);
        console.log("🚀 ~ file: user.service.ts:56 ~ UserService ~ user:", user)
    }

    async findByEmail(email: string): Promise<UserDocument | null> {
        return this.userModel.findOne({ email }).exec();
    }
}
