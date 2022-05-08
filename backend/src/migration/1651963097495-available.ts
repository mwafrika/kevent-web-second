import {MigrationInterface, QueryRunner} from "typeorm";

export class available1651963097495 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "package" ADD COLUMN "available" VARCHAR NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "package" DROP COLUMN "available"`);
    }

}
