import {Entity, PrimaryGeneratedColumn, Unique, Column, OneToMany} from "typeorm";
import { Length, IsNotEmpty } from "class-validator";
import { BookingPackage } from "./BookingPackage";
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

    @Column()
    profile_img: string;

    @OneToMany(() => BookingPackage, bookingPackage => bookingPackage.user,{
      cascade: true,
   })
    bookingPackage: BookingPackage[]
    
    // addBooking(bookingPackage: BookingPackage) {
    //   if(this.bookingPackage == null) {
    //     this.bookingPackage = new Array<BookingPackage>();
    //   }
    //   this.bookingPackage.push(bookingPackage);
    // }


    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
      }
    
      checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
        return bcrypt.compareSync(unencryptedPassword, this.password);
      }
}