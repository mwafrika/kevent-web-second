import {Entity, PrimaryGeneratedColumn, Unique, Column, OneToOne,JoinColumn} from "typeorm";
import {Authentication} from './Authentication'
import { Length, IsNotEmpty } from "class-validator";
import { BookingPackage } from "./BookingPackage";
import * as bcrypt from "bcryptjs";

@Entity()
export class Token {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @Column()
    token: string;

    @Column()
    createdAt: Date;
    
    @OneToOne(() => Authentication,{
        cascade: true,}) 
    @JoinColumn()
    user: Authentication;
}