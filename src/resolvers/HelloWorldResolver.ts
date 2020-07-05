import { Resolver, Query } from "type-graphql";
import IlogService from "@interfaces/IlogService";
import { inject, injectable } from "inversify";
import TYPES from "@constants/types";

@Resolver()
@injectable()
export default class HelloWorldResolver {
  private logServ: IlogService;
  public constructor(@inject(TYPES.LOG_SERVICE) logServ: IlogService) {
    this.logServ = logServ;
  }

  @Query(() => String)
  hello() {
    return this.logServ.showLog("Hello Typescript GraphQL");
  }
}
