import { DATA } from "@/data/resume";
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: { slug: string };
}) {
  const project = DATA.projects.find((p) => p.slug === params.slug);
  const title = project?.title ?? DATA.name;
  const role = project?.role ?? "Fullstack Engineer";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#09090b",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", color: "#71717a", fontSize: 30 }}>
          {DATA.name}
        </div>
        <div
          style={{
            display: "flex",
            color: "#fff",
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            marginTop: 16,
            maxWidth: 1050,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            color: "#a1a1aa",
            fontSize: 34,
            marginTop: 24,
          }}
        >
          {role}
        </div>
      </div>
    ),
    { ...size }
  );
}
