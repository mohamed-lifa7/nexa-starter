import { PrismaClient } from "@prisma/client";
import { env } from "@/env";

/**
 * Creates and configures a new instance of the PrismaClient based on the environment.
 * In development, logs queries, errors, and warnings. In production, logs only errors.
 *
 * @returns {PrismaClient} A new PrismaClient instance with environment-specific logging configuration.
 *
 * @remarks
 * - In development, this will log database queries, errors, and warnings to the console.
 * - In production, it limits logging to errors to reduce noise in the production environment.
 *
 * @example
 * const prisma = createPrismaClient();
 * const user = await prisma.user.findFirst();
 * console.log(user);
 */
const createPrismaClient = () =>
  new PrismaClient({
    log:
      env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

/**
 * Global object to hold the Prisma client instance for the application.
 * This ensures that the Prisma client is reused across the application during development.
 *
 * @type {object} globalForPrisma
 * @property {PrismaClient | undefined} prisma - The Prisma client instance or undefined.
 */
const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined;
};

/**
 * Exports the Prisma client instance, either from the global object or by creating a new one.
 * In production, the Prisma client is created once and reused. In development, a new instance is created for each request.
 *
 * @type {PrismaClient}
 * @remarks
 * This pattern ensures that the Prisma client is not repeatedly created in development, but ensures proper initialization in production.
 */
export const db = globalForPrisma.prisma ?? createPrismaClient();

// Ensure that the Prisma client is reused during development.
if (env.NODE_ENV !== "production") globalForPrisma.prisma = db;
