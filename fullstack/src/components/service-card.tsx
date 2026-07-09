import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags?: readonly string[];
}

export function ServiceCard({
  title,
  description,
  icon,
  tags,
}: ServiceCardProps) {
  return (
    <Card className="flex h-full flex-col gap-2 border p-4">
      <div className="flex items-center gap-2">
        <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-muted text-foreground">
          {icon}
        </div>
        <h3 className="text-sm font-semibold">{title}</h3>
      </div>
      <p className="text-xs text-muted-foreground">{description}</p>
      {tags && tags.length > 0 && (
        <div className="mt-auto flex flex-wrap gap-1 pt-1">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="px-1.5 py-0 text-[10px]"
            >
              {tag}
            </Badge>
          ))}
        </div>
      )}
    </Card>
  );
}
