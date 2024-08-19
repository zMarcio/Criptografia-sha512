import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
} from "@nestjs/common";
import { AppService } from "./app.service";
import { data_document_and_token } from "./Interface/data";
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
  postUser(@Body() user: userInterfaceCreate, @Res() response): Object {
    try {
      const data: data_document_and_token =
        this.appService.postEncryptUser(user);

      return response.json({
        message: "User created successfully",
        status: 201,
        Document: data.document,
        CardToken: data.cardToken,
      });
    } catch (error) {
      return response.json({
        message: error.message,
        status: 400,
      });
    }
  }

  // Sign in route
  @Post("/api/loginUser")
  CompareUser(@Body() User: userInterfaceLogin, @Res() response): Object {
    try {
      const data: Boolean = this.appService.postLoginEncryptUser(User);

      if (data) {
        return response.json({
          message: "Login sucessfull",
          status: 200,
        });
      }

      return response.json({
        message: "Login failed",
        status: 400,
      });
    } catch (error) {
      return response.json({
        message: error.message,
        status: 400,
      });
    }
  }

  // Update user route
  @Patch("/api/modifiedUser/:id")
  patchUser(@Param("id") id: string, @Body() User: userInterfacePatch): Object {
    try {
    } catch (error) {}
  }

  // Delete user route
  // @Delete("/api/deleteUser")
  // deleteUser(@Body() User: userInterfaceDelete): string {
  //   return "sucessfull";
  // }
}
