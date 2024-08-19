import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
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
  async postUser(
    @Body() user: userInterfaceCreate,
    @Res() response
  ): Promise<Object> {
    try {
      const data: data_document_and_token =
        await this.appService.postCreateUser(user);

      if (data === null)
        return response.json({
          message: "User already exists",
          status: 400,
        });

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
  async CompareUser(
    @Body() User: userInterfaceLogin,
    @Res() response
  ): Promise<Object> {
    try {
      const data: Boolean = await this.appService.postLoginUser(User);

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
  @Patch("api/modifiedUser/:id")
  async patchUser(
    @Param("id") id: string,
    @Body() User: userInterfacePatch,
    @Res() response
  ) {
    try {
      const idNumber: number = parseInt(id);
      const data = await this.appService.patchUser(idNumber, User);

      if (data) {
        return response.json({
          message: "User updated successfully",
          status: 200,
          document: data.document,
          cardToken: data.cardToken,
          value: data.value,
        });
      } else if (data === null) {
        return response.json({
          message: "User not found",
          status: 400,
        });
      }
      return response.json({
        message: "User not found",
        status: 400,
      });
    } catch (error) {
      return response.json({
        message: error.message,
        status: 400,
      });
    }
  }

  // Delete user route
  @Delete("/api/deleteUser/:id")
  async deleteUser(
    @Param("id") id: string,
    @Body() User: userInterfaceDelete,
    @Res() response
  ): Promise<string> {
    try {
      const idNumber: number = parseInt(id);
      const data = await this.appService.deleteUser(idNumber);
      if (data) {
        return response.json({
          message: "User deleted successfully",
          status: 200,
        });
      }

      return response.json({
        message: "User not found",
        status: 400,
      });
    } catch (error) {
      return response.json({
        message: error.message,
        status: 400,
      });
    }
  }
}
