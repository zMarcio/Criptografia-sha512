import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import {
  userInterfaceCreate,
  userInterfacePatch,
} from "src/Interface/user-interface";
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

  async createUser(userData: Partial<userInterfaceCreate>): Promise<Boolean> {
    const userVerify = await this.userModel.findOne({
      where: {
        document: userData.document,
        cardToken: userData.cardToken,
      },
    });

    if (userVerify) {
      return false;
    }

    await this.userModel.create(userData);

    return true;
  }

  async comparateUser(document, cardToken): Promise<boolean> {
    const user = await this.userModel.findOne({
      where: {
        document: document,
        cardToken: cardToken,
      },
    });

    if (user) {
      return true;
    }

    return false;
  }

  async patchUser(
    id: number,
    userData: Partial<userInterfacePatch>
  ): Promise<Boolean> {
    const user = await this.userModel.findByPk(id);

    if (user) {
      await user.update(userData);
      return true;
    }

    return false;
  }

  async deleteUser(id: number): Promise<Boolean> {
    const user = await this.userModel.findByPk(id);

    if (user) {
      await user.destroy();
      return true;
    }

    return false;
  }

  async getById(id: number): Promise<userInterfaceCreate> {
    const user = await this.userModel.findByPk(id);

    if (user) {
      return user;
    }

    return null;
  }
}
