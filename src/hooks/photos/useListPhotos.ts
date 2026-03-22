import { listPhotos } from "@/app/services/photo/listPhotos"
import { useQuery } from "@tanstack/react-query"
import { useRef, useState } from "react"

export function usePhotos(limit: number, from?: string, to?: string) {
  const [page, setPage] = useState(1)

  const cursorsRef = useRef<Record<number, string | null>>({
    1: null,
  })

  const cursor = cursorsRef.current[page]

  const query = useQuery({
    queryKey: ["photos", page, limit, from, to],
    queryFn: async () => {
      const data = await listPhotos({ cursor, limit, from, to })

      if (data.nextCursor) {
        cursorsRef.current[page + 1] = data.nextCursor
      }

      return data
    },
  })
  const nextPage = () => {
    if (cursorsRef.current[page + 1] !== null) {
      setPage((p) => p + 1)
    }
  }

  const prevPage = () => {
    setPage((p) => Math.max(p - 1, 1))
  }

  const changeLimit = () => {
    setPage(1)
    cursorsRef.current = { 1: null }
  }
  return {
    ...query,
    nextPage,
    prevPage,
    page,
    setPage,
    hasNextPage: !!query.data?.nextCursor,
    hasPrevPage: page > 1,
    changeLimit,
  }
}
