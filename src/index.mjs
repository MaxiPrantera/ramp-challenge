const appElement = document.getElementById('app')

async function main(){
  const parser = new DOMParser()
  const ctfHTML = await fetch('https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge',).then((res) => res.text())  
  const ctfDocument = parser.parseFromString(ctfHTML, 'text/html')
  const selector = `code[data-class^="23"] > div[data-tag$="93"] > span[data-id*="21"] > i.char`
  const matchingElements = ctfDocument.querySelectorAll(selector)
  let url = ''
  
  for(let char of matchingElements){
    url += char.getAttribute('value')
  }

  const word = await fetch(url).then(res => res.text())
  const list = document.createElement('ul')

  for(const index in word){
    const listItem = document.createElement('li')
    listItem.innerText = word[index]

    setTimeout(() => {
      list.appendChild(listItem)
    }, 500 + (500 * index))

  }
  appElement.replaceWith(list)
}


main()