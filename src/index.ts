import { renderHtmlMain } from "./renderHtmlMain";
import { renderHtmlResearcher } from "./renderHtmlResearcher";
import { renderHtmlParticipant } from "./renderHtmlParticipant";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "GET" && url.pathname === "/") {
      return new Response(renderHtmlMain(), {
        headers: {
          "content-type": "text/html",
        },
      });
    }

    if (request.method === "GET" && url.pathname === "/researcher") {
      return new Response(renderHtmlResearcher(), {
        headers: {
          "content-type": "text/html",
        },
      });
    }

    if (request.method === "GET" && url.pathname === "/participant") {
      return new Response(renderHtmlParticipant(), {
        headers: {
          "content-type": "text/html",
        },
      });
    }

    // Redirect GET requests to /api/waitlist back to home
    if (request.method === "GET" && url.pathname === "/api/waitlist") {
      return Response.redirect(url.origin + "/", 302);
    }

    // Handle form POST submission (vanilla HTML form)
    if (request.method === "POST" && url.pathname === "/api/waitlist") {
      try {
        const formData = await request.formData();
        const email = formData.get("email")?.toString();

        if (!email) {
          return new Response(renderHtmlMain("Email is required"), {
            headers: { "content-type": "text/html" },
          });
        }

        const trimmedEmail = email.trim().toLowerCase();

        if (!trimmedEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
          return new Response(renderHtmlMain("Invalid email format"), {
            headers: { "content-type": "text/html" },
          });
        }

        try {
          const stmt = env.DB.prepare("INSERT INTO waitlist (email) VALUES (?)");
          await stmt.bind(trimmedEmail).run();

          return new Response(renderHtmlMain(`Success! You're on the waitlist.`), {
            headers: { "content-type": "text/html" },
          });
        } catch (dbError: any) {
          if (dbError.message?.includes("UNIQUE")) {
            return new Response(renderHtmlMain("This email is already registered"), {
              headers: { "content-type": "text/html" },
            });
          }
          throw dbError;
        }
      } catch (error) {
        console.error("Error processing form:", error);
        return new Response(renderHtmlMain("An error occurred. Please try again."), {
          headers: { "content-type": "text/html" },
        });
      }
    }

    return new Response("Not Found", { status: 404 });
  },
} satisfies ExportedHandler<Env>;
