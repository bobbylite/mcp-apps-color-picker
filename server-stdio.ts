// server-stdio.ts - Claude Desktop compatible version using stdio transport
import {
  registerAppResource,
  registerAppTool,
  RESOURCE_MIME_TYPE,
} from "@modelcontextprotocol/ext-apps/server";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.join(__dirname, "dist");

// Create a new MCP server instance
const server = new McpServer({
  name: "Color Picker MCP App",
  version: "1.0.0",
});

// The ui:// scheme tells hosts this is an MCP App resource.
const resourceUri = "ui://color-picker/mcp-app.html";

// Register the color picker tool with UI metadata
registerAppTool(
  server,
  "color-picker",
  {
    title: "Color Picker",
    description: "Opens an interactive color picker interface to select colors in various formats (HEX, RGB, HSL).",
    inputSchema: {}, // Empty schema - no input parameters
    _meta: { ui: { resourceUri } },
  },
  async () => {
    return {
      content: [
        {
          type: "text",
          text: "Color picker initialized",
        },
      ],
    };
  },
);

// Register the resource that serves the bundled HTML
registerAppResource(
  server,
  resourceUri,
  resourceUri,
  { mimeType: RESOURCE_MIME_TYPE },
  async () => {
    const html = await fs.readFile(
      path.join(DIST_DIR, "mcp-app.html"),
      "utf-8",
    );
    return {
      contents: [
        { uri: resourceUri, mimeType: RESOURCE_MIME_TYPE, text: html },
      ],
    };
  },
);

// Use stdio transport for Claude Desktop
const transport = new StdioServerTransport();
await server.connect(transport);

console.error("Color Picker MCP Server running on stdio");
