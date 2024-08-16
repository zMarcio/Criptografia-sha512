import { Body, Controller, Get, Patch, Post } from "@nestjs/common";
import { AppService } from "./app.service";
import { data_document_and_token } from "./Interface/data";
import { get, request } from "http";
import {
  userInterfaceLogin,
  userInterfaceCreate,
} from "./Interface/user-interface";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // Sign up route
  @Post("/test")
  postUser(@Body() User: userInterfaceCreate): string {
    return this.appService.encryptUser(User);
  }

  // Sign in route
  @Post("/compare")
  CompareUser(@Body() User: userInterfaceLogin): string {
    return this.appService.compareUser(User);
  }

  @Patch("/modifiedUser")
  patchUser(@Body() User: user)

}
