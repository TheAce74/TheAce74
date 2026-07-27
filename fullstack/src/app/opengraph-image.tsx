import { DATA } from "@/data/resume";
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = `${DATA.name} | Fullstack Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#09090b",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 120,
              height: 120,
              borderRadius: "50%",
              backgroundColor: "#18181b",
              border: "2px solid #3f3f46",
              color: "#fff",
              fontSize: 48,
              fontWeight: 700,
            }}
          >
            {DATA.initials}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                color: "#fff",
                fontSize: 64,
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              {DATA.name}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginTop: 12,
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  backgroundColor: "#22c55e",
                }}
              />
              <div style={{ display: "flex", color: "#a1a1aa", fontSize: 26 }}>
                {DATA.availability.message}
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            color: "#d4d4d8",
            fontSize: 34,
            marginTop: 56,
            maxWidth: 1000,
            lineHeight: 1.4,
          }}
        >
          {DATA.description}
        </div>
      </div>
    ),
    { ...size }
  );
}
