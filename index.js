const app = "I don't do much."

function destructivelyAppendKitten(kittens, name) {
  kittens.push(name)
  return kittens
}

function destrutielyPrependKitten(kittens, name) {
  kittens.shift(name)
  return kittens
}