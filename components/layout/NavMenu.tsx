import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BookOpenCheck, ChevronsUpDown, Hotel, PlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const NavMenu = () => {
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <ChevronsUpDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => router.push("/accommodation/new")}>
          <PlusIcon size={15} /> <span className="pl-2">Add Accommodation</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/my-accommodation")}>
          <Hotel size={15} /> <span className="pl-2">My Accommodations</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/accommodation/new")}>
          <BookOpenCheck size={15} /> <span className="pl-2">My Bookings</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavMenu;
