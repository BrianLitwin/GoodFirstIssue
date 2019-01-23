function makeRepo(name, issues, stars, lastUpdate, link) {
  return { name, issues, stars, lastUpdate, link }
}

export const data = { repos: [
    makeRepo("Githawkapp/githawk", 25, 9, "jan 3", ""),
    makeRepo("sourcecred/mission", 250, 900, "jan 1", ""),
   	makeRepo("google/tensorflow", 2, 90, "jan 2", ""),
  ]
}
