import { setupWorker } from "msw/browser";
import CommonApiMock from "@/mocks/handlers/CommonApiMock.ts";
import UserApiMock from "@/mocks/handlers/UserApiMock.ts";

export default setupWorker(...CommonApiMock, ...UserApiMock);
