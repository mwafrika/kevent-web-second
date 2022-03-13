import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class BookingPackage {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    packageId: number;

    @Column()
    userId: number;

    @Column("jsonb")
    Visitor_details: Object;

    @Column()
    bookedStartDate: Date;

    @Column()
    bookedEndDate: Date;

    @Column()
    ticketNumber: number;

    @Column("simple-array")
    additionnalInformation: string;

    @Column("simple-array")
    Status: string;
}