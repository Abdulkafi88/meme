const generateMemeBtn = document.querySelector(
  ".meme-generator .generate-meme-btn"
)
const memeImage = document.querySelector(".meme-generator img")
const memeTitle = document.querySelector(".meme-generator .meme-title")
const memeAuthor = document.querySelector(".meme-generator .meme-author")

// "https://meme-api.com/gimme/wholesomememes"

generateMemeBtn.addEventListener("click", generate)

async function generate(ursl, options, me) {
  const res = await fetch("https://meme-api.com/gimme/wholesomememes")
  const data = await res.json()
  memeTitle.textContent = data.titl
  memeImage.src = data.url
  memeAuthor.textContent = data.author
  console.log(data)
}
