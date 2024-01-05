const debounce = (callback: (value: string) => void, timeout: number = 700) => {
  let timer: ReturnType<typeof setTimeout>

  return (...args: any) => {
    clearTimeout(timer)

    timer = setTimeout(() => {
      callback(args)
    }, timeout)
  }
}

export default debounce
