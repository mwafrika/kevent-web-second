import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
@Entity()
export class Places {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    addresse: string;
    @Column()
    description: string;
    @Column()
    tags: string;
    @Column()
    latLng: string;
    @Column("simple-array")
    imageUrls: string[];
}