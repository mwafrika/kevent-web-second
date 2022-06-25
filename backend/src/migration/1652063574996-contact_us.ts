import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class contactUs1652063574996 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // create table
        await queryRunner.createTable(
            new Table({
                name: 'contact_us',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',

                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isNullable: false,

                    },
                    {
                        name: 'phone',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isNullable: false,

                    },
                    {
                        name: 'message',
                        type: 'varchar',
                        isNullable: false,

                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // drop table
        await queryRunner.dropTable('contact_us');

    }

}
