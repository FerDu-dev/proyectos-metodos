const longestCommonSubsequence = (text1, text2) => {
  const cache = new Array(text2.length).fill(0)

  for (const letter of text1) {
    let left = 0
    let topLeft = 0
    for (let i = 0; i < text2.length; i++) {
      const top = cache[i]
      left = cache[i] = letter === text2[i] ? topLeft + 1 : Math.max(left, top)
      topLeft = top
    }
  }
  return cache.pop()
}

export default longestCommonSubsequence
