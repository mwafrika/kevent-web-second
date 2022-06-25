import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
@Entity()
export class ContactUs {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    phone: string;
    @Column()
    email: string;
    @Column()
    message: string;
}