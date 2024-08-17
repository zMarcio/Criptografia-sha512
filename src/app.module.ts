import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./model/user.model";
import { UserModule } from "./user/user.module";
// aS1@23012003
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "aS1@23012003",
      database: "user",
      models: [User],
      autoLoadModels: true, // Carrega todos os modelos automaticamente
      synchronize: true, // Sincroniza automaticamente o modelo com o banco de dados
      logging: console.log,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
