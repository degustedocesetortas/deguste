import { icons } from "@/constants/icons";
import { cn } from "@/lib/utils";
import type { StatusBadgeProps } from "@/types/badge";

export function StatusBadge({ label, icon = "delivered" }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        `rounded-full text-white px-2 font-semibold w-fit flex text-xs items-center gap-1`,
        icon === "delivered" && "bg-green-500",
        icon === "preparing" && "bg-blue-500",
        icon === "pending" && "bg-yellow-500"
      )}
    >
      {icons.status({})[icon]} {label}
    </span>
  );
}
