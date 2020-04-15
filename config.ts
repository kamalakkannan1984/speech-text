
export class Config {
    static env = process.env.NODE_ENV;
    static httpPort = 4200;
    static sessionSecret = "ssecret";
    static sessionStoreHost = "127.0.0.1";
    static mongoURL = `mongodb://localhost:27017/distributors`;
    static apiPrefix = "/api";
    static allowOriginHost = "http://localhost:3000";
}
