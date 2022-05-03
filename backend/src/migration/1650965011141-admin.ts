import {MigrationInterface, QueryRunner, getRepository} from "typeorm";
import {Authentication} from '../entity/Authentication';

export class admin1650965011141 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    //     let user = new Authentication();

    //     user.email = "admin@gmail.com";
    //     user.firstName = "mwafrika";
    //     user.lastName = "mufungizi";
    //     user.surname = "josue";
    //     user.password = "admin";
    //     user.phone = "0787564203";
    //     user.address = "Goma";
    //     user.sexe = "Male";
    //     user.profession = "Informaticien";
    //     user.imageUrls = ["https://avatars.githubusercontent.com/u/25848053?v=4"];
    //     user.hashPassword();
    //     user.role = "ADMIN";
    //     const userRepository = getRepository(Authentication);
    //     await userRepository.save(user);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
