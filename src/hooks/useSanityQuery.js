import { useState, useEffect } from 'react'
import sanityClient from '../client'

export const useSanityQuery = query => {
  const [sections, setSections] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(query)
      .then(data => setSections(data))
      .catch(console.error)
  }, [query])

  return sections
}
