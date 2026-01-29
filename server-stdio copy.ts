// server-stdio.ts - Claude Desktop compatible version using stdio transport
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  registerAppTool,
  registerAppResource,
  RESOURCE_MIME_TYPE,
} from "@modelcontextprotocol/ext-apps/server";
import fs from "node:fs/promises";
import path from "node:path";

const server = new McpServer({
  name: "Color Picker MCP App",
  version: "1.0.0",
});

// The ui:// scheme tells hosts this is an MCP App resource.
const resourceUri = "ui://color-picker/mcp-app.html";

// Register the color picker tool
registerAppTool(
  server,
  "color-picker",
  {
    title: "Color Picker",
    description: "Opens an interactive color picker interface to select colors in various formats (HEX, RGB, HSL).",
    inputSchema: {
      type: "object",
      properties: {
        initialColor: {
          type: "string",
          description: "Initial color to display in hex format (e.g., '#FF5733'). Defaults to '#3B82F6'.",
        },
      },
    },
    _meta: { ui: { resourceUri } },
  },
  async (args) => {
    const initialColor = (args.initialColor as string) || "#3B82F6";
    return {
      content: [
        {
          type: "text",
          text: `Color picker initialized with color: ${initialColor}`,
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
      path.join(import.meta.dirname, "dist", "mcp-app.html"),
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
