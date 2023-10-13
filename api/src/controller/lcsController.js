import longestCommonSubsequence from '../../logic/LongestCommonSubsequence.js'

const doLcs = (req, res) => {
  const { text1, text2 } = req.body
  const value = longestCommonSubsequence(text1, text2)
  res.send({ value })
}

export { doLcs }
