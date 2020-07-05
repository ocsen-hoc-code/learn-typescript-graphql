import TYPES from "@constants/types";
import { Container } from "inversify";
import LogService from "@services/logService";
import IlogService from "@interfaces/IlogService";
import HelloWorldResolver from "@resolvers/HelloWorldResolver";

const container = new Container();

container.bind<IlogService>(TYPES.LOG_SERVICE).to(LogService);
container.bind<HelloWorldResolver>(HelloWorldResolver).toSelf();

export default container;
