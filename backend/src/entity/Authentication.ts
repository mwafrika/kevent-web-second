import {Entity, PrimaryGeneratedColumn, Unique, Column,OneToOne, OneToMany} from "typeorm";
import { Length, IsNotEmpty } from "class-validator";
import { BookingPackage } from "./BookingPackage";
import { BookingExpedition } from "./Booking_expedition";
import{Token} from './Token'
import * as bcrypt from "bcryptjs";
@Entity()
@Unique(["email"])
export class Authentication {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    surname: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    address: string;

    @Column()
    sexe: string;

    @Column()
    profession: string;

    @Column("simple-array")
    imageUrls: string[];

    @OneToMany(() => BookingPackage, bookingPackage => bookingPackage.user,{
      cascade: true,
   })
    bookingPackage: BookingPackage[]
// expeditions
    @OneToMany(() => BookingExpedition, bookingExpedition => bookingExpedition.user,{
      cascade: true,
   })
    bookingExpedition: BookingExpedition[]
    
  // Associate token with a user
  //  @OneToOne(() => Token, user => user.user) 
  //  token: Token;

    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
      }
    
      checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
        return bcrypt.compareSync(unencryptedPassword, this.password);
      }
}