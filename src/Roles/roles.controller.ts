import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateRolesDto } from './dto/create-roles.dto';
import { Roles } from './roles.model';
import { RolesService } from './roles.service';
import { Controller, Post, Body, HttpStatus, HttpException } from '@nestjs/common';

@Controller('roles')
export class RolesController {
    constructor(
        private readonly rolesService: RolesService
    ) {

    }
    @ApiOperation({ summary: 'Создания Роли' })
    @ApiResponse({ status: 200, type: Roles })
    @Post()
    async createRole(@Body() createRolesDto: CreateRolesDto): Promise<Roles> {
        // return this.rolesService.createRoles(createRolesDto)
        try {
            const roles = await this.rolesService.createRoles(createRolesDto)
            return roles
        } catch {
            throw new HttpException("Данная роль уже создана", HttpStatus.BAD_REQUEST)
        }
    }
}
