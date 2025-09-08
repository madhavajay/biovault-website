import { renderHtml } from "./renderHtml";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "GET" && url.pathname === "/") {
      return new Response(renderHtml(), {
        headers: {
          "content-type": "text/html",
        },
      });
    }

    // Handle form POST submission (vanilla HTML form)
    if (request.method === "POST" && url.pathname === "/api/waitlist") {
      try {
        const formData = await request.formData();
        const email = formData.get("email")?.toString();

        if (!email) {
          return new Response(renderHtml("Email is required"), {
            headers: { "content-type": "text/html" },
          });
        }

        const trimmedEmail = email.trim().toLowerCase();

        if (!trimmedEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
          return new Response(renderHtml("Invalid email format"), {
            headers: { "content-type": "text/html" },
          });
        }

        try {
          const stmt = env.DB.prepare("INSERT INTO waitlist (email) VALUES (?)");
          await stmt.bind(trimmedEmail).run();

          return new Response(renderHtml(`Success! You're on the waitlist.`), {
            headers: { "content-type": "text/html" },
          });
        } catch (dbError: any) {
          if (dbError.message?.includes("UNIQUE")) {
            return new Response(renderHtml("This email is already registered"), {
              headers: { "content-type": "text/html" },
            });
          }
          throw dbError;
        }
      } catch (error) {
        console.error("Error processing form:", error);
        return new Response(renderHtml("An error occurred. Please try again."), {
          headers: { "content-type": "text/html" },
        });
      }
    }

    return new Response("Not Found", { status: 404 });
  },
} satisfies ExportedHandler<Env>;
