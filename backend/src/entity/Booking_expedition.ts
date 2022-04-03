import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne} from "typeorm";
import {Authentication} from "./Authentication";
import {Expeditions} from "./Expeditions";

@Entity()
export class BookingExpedition {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("jsonb")
    Visitor_details: Object;

    @Column()
    userId: number

    @Column()
    expeditionId: number

    @Column()
    ticketNumber: number;

    @Column("simple-array")
    additionnalInformation: string;

    @Column("simple-array")
    Status:string;

    @ManyToOne(() => Authentication, user => user.bookingExpedition)
    user: Authentication;

    @ManyToOne(() => Expeditions, expeditions => expeditions.bookingExpedition)
    expedition: Expeditions;
}