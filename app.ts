import * as express from "express";
import * as bodyParser from "body-parser";
import { Config } from "./config";
import { Routes } from "./routes";
import { Settings } from "./settings";

export const httpApp = express()
    .use(Settings)
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(Config.apiPrefix, Routes)
    .disable("x-powered-by")
    .set("x-powered-by", false);
