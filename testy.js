const arr = [1, 2, 3, 4, 5]

const promises = async () => {
  const unresolved = arr.map(async (idx) => {
    await setTimeout(() => {}, 5000)
    return idx
  })

  const resolved = await Promise.all(unresolved)

  console.log(unresolved)
}

promises()
