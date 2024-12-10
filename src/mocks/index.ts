import { worker } from "@/mocks/browser.ts";

export default async function loadMock() {
    if (import.meta.env.DEV) {
        await worker.start();
    }
}
