import {MigrationInterface, QueryRunner,TableColumn, getRepository} from "typeorm";
import {Package} from '../entity/Package';

export class createdAt1651567720640 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "package" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "package" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "package" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "package" DROP COLUMN "updated_at"`);
    }

}
