import superjson from 'superjson'

export function superjsonParse<T> (value: any): T {
  if (!value)
    return value
  return superjson.parse(value as unknown as string) as T
}

export function superjsonStringify<T> (results: T): T {
  return superjson.stringify(results) as unknown as T
}
