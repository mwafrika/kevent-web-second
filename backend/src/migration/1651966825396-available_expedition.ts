import {MigrationInterface, QueryRunner} from "typeorm";

export class availableExpedition1651966825396 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "expeditions" ADD COLUMN "available" VARCHAR NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "expeditions" DROP COLUMN "available"`);
    }

}
