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
  kittens = [name,...kittens]
  return kittens
}

var kittens = ['Milo', 'Otis', 'Garfield'];

function prependKittens(name)