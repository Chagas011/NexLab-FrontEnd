import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { CalendarIcon, Filter } from "lucide-react"

export type DateFilter = {
  from: Date
  to: Date
}

interface IFilter {
  date?: Date
  time: string
  onDateChange: (date?: Date) => void
  onTimeChange: (time: string) => void
}

export function Filters({ onDateChange, date, time, onTimeChange }: IFilter) {
  return (
    <Card className="border-border bg-card">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <Filter className="h-4 w-4" /> Filtros
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap items-end gap-5">
          <div className="flex items-center gap-2">
            <label className="text-xs text-muted-foreground">Data </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn("w-40 justify-start text-left font-normal")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date
                    ? format(date, "dd/MM/yyyy", { locale: ptBR })
                    : "Selecionar"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  className="pointer-events-auto p-3"
                  selected={date}
                  onSelect={onDateChange}
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-xs text-muted-foreground">Hora</label>

            <Input
              type="time"
              className="w-33"
              value={time}
              onChange={(e) => onTimeChange(e.target.value)}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
