import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import{BookingPackage} from "./BookingPackage";
@Entity()
export class Package {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    title: string;

    @Column()
    price: number;

    @Column("simple-array")
    imageUrls: string[];

    @Column("jsonb")
    itineraire: Object;

    @Column("jsonb")
    metadata: Object;

    @Column("simple-array")
    places: string[];

    @Column("simple-array")
    available: string;

    @Column("simple-array")
    tags: string[];

    @Column()
    created_at: Date;

    @OneToMany(type => BookingPackage, bookingPackage => bookingPackage.package,{
        cascade: true
     })
    bookingPackage: BookingPackage[];
}