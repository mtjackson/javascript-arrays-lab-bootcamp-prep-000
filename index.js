const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyRemoveLastKitten(name) {
  kittens.pop()
  return kittens
}

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyRemoveFirstKitten(name) {
  kittens.shift()
  return kittens
}

var kittens = ['Milo', 'Otis', 'Garfield'];

function appendKitten(name) {
  kittens = [...kittens, name]
  return kittens
}

var kittens = ['Milo', 'Otis', 'Garfield'];

function prependKitten(name) {
  kittens = [name,...kittens]
  return kittens
}

var kittens = ['Milo', 'Otis', 'Garfield'];

function removeLastKitten() {
  kittens = kittens.slice(-1)
  return kittens
}

var kittens = ['Milo', 'Otis', 'Garfield'];

function removeFirstKitten() {
  kittens = kittens.slice(1)
  return kittens
}