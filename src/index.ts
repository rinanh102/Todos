import "reflect-metadata";
import { container } from "./core/container.core";
import { server } from "./core/server.core";
import { TYPES } from "./core/types.core";
import * as dotenv from 'dotenv';
import express from 'express'
dotenv.config();



import { HomeController } from "./controllers/home.controller";


function say(message: string): void {
    console.log(`I said: ${process.env.PORT}`);
}
say("Hello");


async function main() {
    const app = express()
    const port = 3000;
    const helloController = container.get<HomeController>(TYPES.HomeController)

    app.get('/:id', (req, res) => {
        helloController.hello(req, res)
    })

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}

main()