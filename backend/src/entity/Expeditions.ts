import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import{BookingExpedition} from "./Booking_expedition";
@Entity()
export class Expeditions {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column("simple-array")
    imageUrls: string[];

    @Column("jsonb")
    itineraire: Object;

    @Column("jsonb")
    metadata: Object;

    @Column()
    start_date: string;

    @Column()
    end_date: string;
    
    @Column("simple-array")
    places: string[];

    @Column("simple-array")
    tags: string[];

    

    @OneToMany(type => BookingExpedition, bookingExpedition => bookingExpedition.expedition,{
        cascade: true
     })
     bookingExpedition: BookingExpedition[];
}