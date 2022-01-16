function component() {
  const elem = document.createElement('div')

  elem.innerHTML = `Hello ${process.env.NAME}`

  return elem
}

document.body.appendChild(component())

