import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function SearchInput() {
  return (
    <div className="relative w-full max-w-xs">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Busque por nome..."
        className="w-full rounded-lg   pl-8"
      />
    </div>
  )
}
