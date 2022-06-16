import {injectable} from "inversify";

@injectable()
export class Logger {
    public log(level: "DEBUG" | "INFO" | "ERROR", message: string): void {
      const time = new Date().toISOString();
      console.log(`${time} - ${level} - ${message}`);
    }
  }