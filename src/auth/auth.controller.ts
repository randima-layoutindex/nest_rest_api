import { Controller, Post,Req ,Body,ParseIntPipe} from '@nestjs/common';
import { AuthService } from './auth.service';
// import {Request} from "express"
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
    // this.authService.test();
  }
  @Post('signup')
  // signup(@Body() dto:any) {
  signup(@Body() dto:AuthDto) {
    console.log(dto)
  // signup(@Req() req:Request) {
    // console.log(req.body)
    // signup(@Body("email") email:string,@Body("password",ParseIntPipe) password:string){
    // console.log({
    //   email,
    //   typeOfEmail:typeof email,
    //   password,
    //   typeOfPassword:typeof password
    // })
    return this.authService.signup();
  }
  @Post('signin')
  signin() {
    return this.authService.signin();
  }
}
