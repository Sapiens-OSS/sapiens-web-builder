const characters = ["QWERTYUIOPASDFGHJKLZXCVBNM"];

export function randomUUID() {
  if (crypto.randomUUID) {
    return crypto.randomUUID();
  } else {
    let id = "";
    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 6; y++) {
        id += randomCharacter();
      }
      id += "-";
    }
    return id.slice(0, -1);
  }
}

function randomCharacter() {
  const index =
    Math.floor(Math.random() * 100 * characters.length) % characters.length;
  const isUpper = Math.random() >= 0.5;
  return isUpper ? characters[index] : characters[index].toLowerCase();
}
