import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne} from "typeorm";
import {Authentication} from "./Authentication";
import {Package} from "./Package";

@Entity()
export class BookingPackage {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("jsonb")
    Visitor_details: Object;

    @Column()
    userId: number

    @Column()
    packageId: number

    @Column()
    bookedStartDate: Date;

    @Column()
    bookedEndDate: Date;

    @Column()
    ticketNumber: number;

    @Column("simple-array")
    additionnalInformation: string;

    @Column("simple-array")
    Status:string;

    @ManyToOne(() => Authentication, user => user.bookingPackage)
    user: Authentication;

    @ManyToOne(() => Package, packages => packages.bookingPackage)
    package: Package;
}