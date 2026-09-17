import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom", 
    setupFiles: ["./src/setupTests.ts"], 
    coverage: {
      provider: "v8",
      reporter: ["text", "html", "lcov"],
      include: ["**/*.{test,spec}.?(c|m)[jt]s?(x)"],
      exclude: [
        "src/main.tsx",
        "src/**/*.d.ts",
        "src/**/*.stories.{ts,tsx}",
        "src/types/**",
      ],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 75,
        statements: 80,
      },
    },
  },
});
