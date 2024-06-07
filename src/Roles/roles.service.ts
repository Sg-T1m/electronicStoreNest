import { CreateRolesDto } from './dto/create-roles.dto';
import { Roles } from './roles.model';
import { RolseRepository } from './roles.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RolesService {
    constructor(
        private readonly rolseRepository: RolseRepository
    ) {

    }
    async createRoles(createRolesDto: CreateRolesDto): Promise<Roles> {
        return this.rolseRepository.createRoles(createRolesDto);
    }
}
