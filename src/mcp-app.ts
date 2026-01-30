// src/mcp-app.ts
import { App } from "@modelcontextprotocol/ext-apps";

// DOM elements
const colorDisplay = document.getElementById("colorDisplay") as HTMLDivElement;
const colorPicker = document.getElementById("colorPicker") as HTMLInputElement;
const hexInput = document.getElementById("hexInput") as HTMLInputElement;
const hexValue = document.getElementById("hexValue") as HTMLSpanElement;
const rgbValue = document.getElementById("rgbValue") as HTMLSpanElement;
const hslValue = document.getElementById("hslValue") as HTMLSpanElement;
const randomBtn = document.getElementById("randomBtn") as HTMLButtonElement;
const selectBtn = document.getElementById("selectBtn") as HTMLButtonElement;
const toast = document.getElementById("toast") as HTMLDivElement;

// Initialize the MCP App
const app = new App({ name: "Color Picker", version: "1.0.0" });

// Current color state
let currentColor = "#3B82F6";

// Helper functions
function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 };
}

function rgbToHsl(r: number, g: number, b: number): string {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
}

function updateColorDisplay(color: string) {
  currentColor = color.toUpperCase();

  // Update color picker and input
  colorPicker.value = currentColor;
  hexInput.value = currentColor;

  // Update color display
  colorDisplay.style.backgroundColor = currentColor;

  // Update format values
  const rgb = hexToRgb(currentColor);
  const rgbString = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  const hslString = rgbToHsl(rgb.r, rgb.g, rgb.b);

  hexValue.textContent = currentColor;
  rgbValue.textContent = rgbString;
  hslValue.textContent = hslString;
}

function generateRandomColor(): string {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function showToast(message: string) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}

async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    showToast("Copied to clipboard!");
  } catch (err) {
    console.error("Failed to copy:", err);
    showToast("Failed to copy");
  }
}

// Event listeners
colorPicker.addEventListener("input", (e) => {
  const target = e.target as HTMLInputElement;
  updateColorDisplay(target.value);
});

hexInput.addEventListener("input", (e) => {
  const target = e.target as HTMLInputElement;
  const value = target.value;
  // Validate hex color
  if (/^#[0-9A-F]{6}$/i.test(value)) {
    updateColorDisplay(value);
  }
});

randomBtn.addEventListener("click", () => {
  const randomColor = generateRandomColor();
  updateColorDisplay(randomColor);
});

selectBtn.addEventListener("click", async () => {
  // Send the selected color back to the conversation
  await app.updateModelContext({
    content: [
      {
        type: "text",
        text: `Selected color: ${currentColor}`,
      },
    ],
  });

  showToast("Color selected!");

  // Also log the selection
  await app.sendLog({
    level: "info",
    data: `User selected color: ${currentColor}`,
  });
});

// Add click-to-copy functionality for format values
hexValue.addEventListener("click", () => copyToClipboard(hexValue.textContent!));
rgbValue.addEventListener("click", () => copyToClipboard(rgbValue.textContent!));
hslValue.addEventListener("click", () => copyToClipboard(hslValue.textContent!));

// Initialize app
async function initialize() {
  // Connect to the host
  await app.connect();

  console.log("Color Picker app connected!");

  // Handle initial tool result from the server
  app.ontoolresult = (result) => {
    console.log("Received tool result:", result);

    // Extract initial color if provided
    const text = result.content?.find((c) => c.type === "text")?.text;
    if (text) {
      const colorMatch = text.match(/#[0-9A-F]{6}/i);
      if (colorMatch) {
        updateColorDisplay(colorMatch[0]);
      }
    }
  };

  // Set initial color
  updateColorDisplay(currentColor);
}

initialize().catch((err) => {
  console.error("Failed to initialize app:", err);
});
