import { Application } from "../dep.ts";

export const startup = async () => {
    const app = new Application();

    app.use((ctx) => {
        ctx.response.body = "Hello World!";
    });

    await app.listen({ port: 8000 });
}