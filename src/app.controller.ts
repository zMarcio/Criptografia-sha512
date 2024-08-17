import { Body, Controller, Delete, Get, Patch, Post } from "@nestjs/common";
import { AppService } from "./app.service";
import { data_document_and_token } from "./Interface/data";
import { get, request } from "http";
import {
  userInterfaceLogin,
  userInterfaceCreate,
  userInterfacePatch,
  userInterfaceDelete,
} from "./Interface/user-interface";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/api/hello")
  getHello(): string {
    return this.appService.getHello();
  }

  // Get all data route
  @Get("/api/allData")
  getAllData(): Promise<userInterfaceCreate[]> {
    return this.appService.getAllData();
  }

  // Sign up route
  @Post("/api/createUser")
  postUser(@Body() User: userInterfaceCreate): string {
    return this.appService.postEncryptUser(User);
  }

  // Sign in route
  // @Post("/api/loginUser")
  // CompareUser(@Body() User: userInterfaceLogin): string {
  //   return this.appService.compareUser(User);
  // }

  // Update user route
  // @Patch("/api/modifiedUser")
  // patchUser(@Body() User: userInterfacePatch): string {
  //   return "sucessfull";
  // }

  // Delete user route
  // @Delete("/api/deleteUser")
  // deleteUser(@Body() User: userInterfaceDelete): string {
  //   return "sucessfull";
  // }
}
