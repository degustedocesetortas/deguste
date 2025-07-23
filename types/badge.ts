import type { badgeStatus } from "@/components/molecules/card-orders";

export interface StatusBadgeProps {
  label: string;
  icon?: keyof typeof badgeStatus;
  color?: string;
}
