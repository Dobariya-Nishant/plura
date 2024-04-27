import { authMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: ["/site"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
