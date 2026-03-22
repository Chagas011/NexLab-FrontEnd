import { usePhotos } from "@/hooks/photos/useListPhotos"
import { useMemo, useState } from "react"
import { Filters } from "./Components/Filters"
import { Header } from "./Components/Header"
import { Kips } from "./Components/Kips"
import { Photos } from "./Components/Photos"

export function AdminDashboard() {
  const [limit, setLimit] = useState(6)
  const [filterDate, setFilterDate] = useState<Date | undefined>()
  const [time, setTime] = useState<string>("")

  const dateRange = useMemo(() => {
    if (!filterDate) return undefined

    const from = new Date(filterDate)

    if (time) {
      const [hours, minutes] = time.split(":").map(Number)
      from.setHours(hours, minutes, 0)
    } else {
      from.setHours(0, 0, 0)
    }

    const to = new Date(from)
    to.setHours(23, 59, 59)

    return { from, to }
  }, [filterDate, time])

  const {
    data,
    hasNextPage,
    page,
    isLoading,
    nextPage,
    prevPage,
    hasPrevPage,
  } = usePhotos(
    limit,
    dateRange?.from.toISOString(),
    dateRange?.to.toISOString()
  )

  if (!data) {
    return (
      <div className="flex h-[60vh] w-full items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-muted border-t-primary" />
      </div>
    )
  }

  return (
    <div>
      <Header />

      <div className="mt-24 flex gap-6 p-5">
        <Kips total={data.photos.length} />
      </div>

      <div className="mt-5 p-5">
        <Filters
          time={time}
          onTimeChange={setTime}
          date={filterDate}
          onDateChange={setFilterDate}
        />
      </div>

      <div className="mt-5 p-5">
        <Photos
          hasNextPage={hasNextPage}
          hasPrevPage={hasPrevPage}
          limit={limit}
          onLimitChange={setLimit}
          page={page}
          onNextPage={nextPage}
          onPrevPage={prevPage}
          photos={data.photos}
          isLoading={isLoading}
        />
      </div>
    </div>
  )
}
