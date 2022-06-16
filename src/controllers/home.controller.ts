import {controller, httpGet } from "inversify-express-utils";
import {Request, Response} from "express";
import {TYPES} from "../core/types.core";
import {Logger} from "../services/logger.service";
import { inject, injectable } from "inversify";


@injectable()
export class HomeController {
  public constructor(@inject(TYPES.Logger) private readonly logger: Logger) {}

  public hello(req: Request, res: Response) {
    this.logger.log("INFO", "Get Home.index");
    return res.send("Hello world");
  }
}