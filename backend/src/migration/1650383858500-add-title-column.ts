import {MigrationInterface, QueryRunner} from "typeorm";

export class addTitleColumn1650383858500 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Add title column to package table
        // await queryRunner.query(`ALTER TABLE "package" ADD "title" character varying NOT NULL`);
        // Set default value for title column
        await queryRunner.query(`ALTER TABLE "package" ALTER COLUMN "title" SET DEFAULT 'Package'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Remove title column from package table
        await queryRunner.query(`ALTER TABLE "package" DROP COLUMN "title"`);
    }

}
