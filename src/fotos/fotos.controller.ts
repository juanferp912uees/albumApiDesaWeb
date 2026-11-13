import { Body, Controller, Get, Param, 
    ParseIntPipe, Post, Patch, Delete, HttpCode } from '@nestjs/common';
import { FotosService } from './fotos.service.js';
import type { Foto } from './entities/foto.entity.js';

@Controller('fotos')
export class FotosController {
    constructor(
        private readonly fotosService: FotosService
    ) {}
    
    @Get()
    findAll() {
        return this.fotosService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.fotosService.findOne(id);
    }

    @Post()
    create(@Body() datos: Omit<Foto, 'id'>) {
        return this.fotosService.create(datos);
    }

    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() datos: Partial<Omit<Foto, 'id'>>,
    ) {
        return this.fotosService.update(id, datos);
    }

    @Delete(':id')
    @HttpCode(204)
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.fotosService.remove(id);
    }

}
