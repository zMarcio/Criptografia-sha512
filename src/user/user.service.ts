import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { userInterfaceCreate } from "src/Interface/user-interface";
import { User } from "src/model/user.model";

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User
  ) {}

  async getAllData(): Promise<User[]> {
    const data: User[] = await this.userModel.findAll();
    return data;
  }

  async createUser(userData: Partial<userInterfaceCreate>): Promise<User> {
    console.log("userData:", userData);
    const user = await this.userModel.create(userData);
    return user;
  }
}
