type DateRangeISO = {
  from: string
  to: string
}

export function getDateRange(date?: Date): DateRangeISO {
  if (!date)
    return {
      from: "",
      to: "",
    }

  const start = new Date(date)
  start.setHours(0, 0, 0, 0)

  const end = new Date(date)
  end.setHours(23, 59, 59, 999)

  return {
    from: start.toISOString(),
    to: end.toISOString(),
  }
}
