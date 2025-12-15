import { Button } from "@/components/ui/button"
import { type LucideIcon } from "lucide-react";
import { Link } from "react-router";


interface ButtonWithIconProps {
  Icon: LucideIcon;
  title: string;
  to:string
}

export function ButtonWithIcon({Icon,title,to}: ButtonWithIconProps) {
  return (
    <Link to={to}>
    <Button variant="ghost" size="sm">
        <Icon/>
       {title}
    </Button>
    </Link>
  

  )
}
