import { CreateRolesDto } from './dto/create-roles.dto';

import { Injectable } from "@nestjs/common";
import { Roles } from './roles.model';
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class RolseRepository {
    constructor(
        @InjectModel(Roles)
        private readonly rolesModel: typeof Roles
    ) {

    }
    async createRoles(createRolesDto: CreateRolesDto): Promise<Roles> {
        return this.rolesModel.create(createRolesDto[0])
    }
}   