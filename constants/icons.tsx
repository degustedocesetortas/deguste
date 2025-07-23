import {
  CheckCircle,
  CreditCard,
  Edit,
  Eye,
  Heart,
  LogOut,
  Minus,
  Package,
  Plus,
  Search,
  ShoppingBag,
  ShoppingCart,
  Timer,
  Trash,
  User,
} from "lucide-react";

const sizeIcon = 14;

export const icons = {
  status: ({
    size,
    className = "",
  }: {
    size?: number;
    className?: string;
  }) => ({
    delivered: <CheckCircle size={size ?? sizeIcon} className={className} />,
    preparing: <Package size={size ?? sizeIcon} className={className} />,
    pending: <Timer size={size ?? sizeIcon} className={className} />,
  }),
  store: ({ size, className = "" }: { size?: number; className?: string }) => ({
    cart: <ShoppingCart size={size ?? sizeIcon} className={className} />,
    bag: <ShoppingBag size={size ?? sizeIcon} className={className} />,
    credit: <CreditCard size={size ?? sizeIcon} className={className} />,
  }),
  default: ({
    size,
    className = "",
  }: {
    size?: number;
    className?: string;
  }) => ({
    user: <User size={size ?? sizeIcon} className={className} />,
    trash: <Trash size={size ?? sizeIcon} className={className} />,
    heart: <Heart size={size ?? sizeIcon} className={className} />,
    eye: <Eye size={size ?? sizeIcon} className={className} />,
    plus: <Plus size={size ?? sizeIcon} className={className} />,
    minus: <Minus size={size ?? sizeIcon} className={className} />,
    edit: <Edit size={size ?? sizeIcon} className={className} />,
    logout: <LogOut size={size ?? sizeIcon} className={className} />,
    search: <Search  size={size ?? sizeIcon} className={className} />,
  }),
};
