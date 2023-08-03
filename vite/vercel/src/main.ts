document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  Hello ${import.meta.env.VITE_HELLO}.
`
