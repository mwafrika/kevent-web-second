import {MigrationInterface, QueryRunner} from "typeorm";

export class addConstraints1651967888841 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`ALTER TABLE "package" ALTER COLUMN "available" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "expeditions" ALTER COLUMN "available" SET NOT NULL`);   
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "package" ALTER COLUMN "available" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "expeditions" ALTER COLUMN "available" DROP NOT NULL`);
    }

}
