import _ from 'lodash'

function component() {
  const elem = document.createElement('div')

  elem.innerHTML = _.join(['Hello', 'webpack'], ' ')

  return elem
}

document.body.appendChild(component())
