export const formatDate = (dateString: string) => {
  if (dateString !== '') {
    const parsedDate = new Date(dateString)

    const newDate = parsedDate.toLocaleString('es-PE', {
      dateStyle: 'short',
      timeStyle: 'short',
      hourCycle: 'h12',
      timeZone: 'America/Lima',
    })

    return newDate
  }

  return ''
}
