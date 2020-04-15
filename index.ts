import * as http from "http";
import { httpApp } from "./app";

let app = http.createServer(httpApp);
const port = 3000 || process.env.PORT;
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
