import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "varchar", length: 45, default: ""})
    nickname: string

    @Column({type: "varchar", length: 70, default: ""})
    password: string

    @Column({type: "varchar", length: 45,default: "", unique: true})
    email: string

    @Column({default: 0})
    avatar_id: number

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date


}
