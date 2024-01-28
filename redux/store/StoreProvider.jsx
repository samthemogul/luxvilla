'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { store } from '.'

export default function StoreProvider({ children }) {
  const storeRef = useRef()
  if (!storeRef.current) {
    storeRef.current = store()
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}