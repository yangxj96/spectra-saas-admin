import { http, HttpResponse } from "msw";

export const handlers = [
    http.get("/user", ({ request }) => {
        console.log("请求:", request);
        return HttpResponse.json({ name: "John" });
    })
];
