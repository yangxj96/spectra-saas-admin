import { http, HttpResponse } from "msw";

export default [
    http.post("/login", () => {
        return HttpResponse.json({
            id: "login"
        });
    })
];
