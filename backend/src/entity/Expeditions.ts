import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Expeditions {
    @PrimaryGeneratedColumn()
    id: number;

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

    @Column("simple-array")
    places: string[];

    @Column("simple-array")
    tags: string[];

    @Column()
    start_date: Date;

    @Column()
    end_date: Date;
}