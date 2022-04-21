import {Entity, PrimaryGeneratedColumn, Unique, Column,OneToOne, OneToMany} from "typeorm";
import { BookingPackage } from "./BookingPackage";
import { BookingExpedition } from "./Booking_expedition";
import * as bcrypt from "bcryptjs";
@Entity()
@Unique(["email"])
export class Authentication {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;
    // @IsNotEmpty()

    @Column()
    lastName: string;
    // @IsNotEmpty()

    @Column()
    surname: string;
    // @IsNotEmpty()

    @Column()
    password: string;
    // @IsNotEmpty()

    @Column()
    email: string;
    // @IsNotEmpty()

    @Column()
    phone: string;
    // @IsNotEmpty()

    @Column()
    address: string;
    // @IsNotEmpty()

    @Column()
    sexe: string;
    // @IsNotEmpty()

    @Column()
    profession: string;
    // @IsNotEmpty()

    @Column()
    // @IsNotEmpty()
    role: string;

    @Column('simple-array')
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