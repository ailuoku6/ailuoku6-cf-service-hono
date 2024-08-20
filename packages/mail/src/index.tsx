import { Hono } from "hono";

interface AppBinding {}

const app = new Hono<{
  Bindings: AppBinding;
}>();


app.post("/send", async (c) => {
  try {
    const body = await c.req.json<{
      // body type
    }>();
    if (!body) {
      return c.text("No question provided");
    }

    return c.json({});
  } catch (error: any) {
    c.status(500);
    return c.json({ error: error?.message || "Unknown error" });
  }
});

export default app;
