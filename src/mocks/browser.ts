import { setupWorker, SetupWorkerApi } from "msw";
import { handlers } from "./handler";

export const worker: SetupWorkerApi = setupWorker(...handlers);
