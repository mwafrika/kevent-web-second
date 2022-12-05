import {MigrationInterface, QueryRunner, getRepository} from "typeorm";
import {Authentication} from '../entity/Authentication';

export class admin1650965011141 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        let user = new Authentication();

        user.email = "gloire@gmail.com";
        user.firstName = "gloire";
        user.lastName = "irenge";
        user.surname = "josue";
        user.password = "123456";
        user.phone = "0787564203";
        user.address = "Goma";
        user.sexe = "Male";
        user.profession = "Informaticien";
        user.imageUrls = ["https://avatars.githubusercontent.com/u/25848053?v=4"];
        user.hashPassword();
        user.role = "USER";
        const userRepository = getRepository(Authentication);
        await userRepository.save(user);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
