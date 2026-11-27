import { defineConfig, devices } from "@playwright/test";
import "dotenv/config";

export default defineConfig({
  testDir: "./tests",
  reporter: "list",
  use: {
    baseURL: process.env.TOOLSHOP_URL ?? "https://practicesoftwaretesting.com",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"],
        trace: "on",
      },
      
    },
  ],
});
