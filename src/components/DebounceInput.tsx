import { ChangeEvent, useState } from 'react'
import { useDebounce } from '../hooks/useDebounce'

export function DebounceInput() {
  const [value, setValue] = useState('')
  const [debouncedValue, setDebouncedValue] = useState('')

  const handleDebouncedInputChange = useDebounce(setDebouncedValue)

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value)
    handleDebouncedInputChange(event.target.value)
  }

  return (
    <div className="flex h-36 w-full flex-col items-center gap-4">
      <h2 className="font-bold text-white">
        Input{' '}
        <span className="underline decoration-[#5c5c5c] decoration-2 underline-offset-2">
          com
        </span>{' '}
        debounce
      </h2>
      <input
        className="w-full rounded-md border border-[#404040] bg-[#1c1c1c] p-2 text-sm text-[#e5e5e5] placeholder:text-[#5c5c5c]"
        type="text"
        placeholder="Digite algo"
        maxLength={32}
        value={value}
        onChange={handleInputChange}
      />

      <div className="w-full text-sm">
        <span className="text-white">Resultado:</span>
        <span className="flex flex-col gap-1  text-[#a3a3a3]">
          {debouncedValue}
        </span>
      </div>
    </div>
  )
}
