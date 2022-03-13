import {Entity, PrimaryGeneratedColumn, Unique, Column} from "typeorm";
import { Length, IsNotEmpty } from "class-validator";
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

    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
      }
    
      checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
        return bcrypt.compareSync(unencryptedPassword, this.password);
      }
}