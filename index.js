const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

var kittens = ['Milo', 'Otis', 'Garfield'];

function destrutivelyPrependKitten(name) {
  kittens.shift(name)
  return kittens
}

