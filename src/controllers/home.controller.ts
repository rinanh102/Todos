import {controller, httpGet } from "inversify-express-utils";
import {Request, Response} from "express";
import {TYPES} from "../core/types.core";
import {Logger} from "../services/logger.service";
import { inject } from "inversify";


@controller("/")
export class HomeController {
    public constructor(@inject(TYPES.Logger) private readonly logger: Logger) {}

  @httpGet("")
  public index(req: Request, res: Response) {
    this.logger.log("INFO", "Get Home.index");
    return res.send("Hello world");
  }
}