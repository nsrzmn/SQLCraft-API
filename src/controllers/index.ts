import { dummyService } from "@src/services";
import { DummyController } from "./dummy.controller";

export const dummyController: DummyController = new DummyController(dummyService);
