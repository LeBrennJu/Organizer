import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema({ collection :'users', timestamps :true, versionKey:false})
export class User{
    @Prop({
        required: true
    })
    password: string;

    @Prop({
        required: true,
        unique: true
    })
    email: string;

    // Créez le champ virtuel 'id'
    id: string;
}

export type UserDocument = User & Document;

// Créez le schéma à partir de la classe User
export const UserSchema = SchemaFactory.createForClass(User);

// Définissez le champ virtuel 'id' dans le schéma
UserSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

UserSchema.set('toJSON', {
    virtuals: true,
});
