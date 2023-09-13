import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {

  constructor(
    private readonly appService: AppService
  ) {}


  @Get('getHello/:id/:name')
  getHello(
   @Param('id') id :string,
   @Param() param :any
  ): string {
    console.log('id', id)
    console.log('param', param)
    return this.appService.getHello();
  }

  @Post('coucou')
  postHello(
    @Req()request : Request,
    @Body('firstname') body : any
  ){
    console.log(request.body)
    console.log('body', body)
    return {request_body : request.body, body}
  }
  
  @Put('put')
  putHello(
    @Query('take')take : any
  ){

    console.log(take, 'take')
  }

  @Delete()
  deleteHello(){

  }
}
