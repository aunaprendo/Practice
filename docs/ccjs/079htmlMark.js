const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

markdownInput.addEventListener("input", () => {
	htmlOutput.innerText = convertMarkdown();
	preview.innerHTML = convertMarkdown();
});

function convertMarkdown() {
	const headingTest = /^\s*(?<hashes>#{1,6})\s(?<title>.*)/ig;
	const italicTest = /^(?:_|\*)(?<text>.*?)(?:_|\*)/i;
	const boldTest = /^(?:__|\*\*)(?<text>.*?)(?:__|\*\*)/i;
	const imgTest = /^!\[(?<altText>.*?)\]\((?<imgSource>.*?)\)/i;
	const urlTest = /^\[(?<linkText>.*?)\]\((?<link>.*?)\)/i;
	const quoteTest = /^>\s(?<text>.*)/i;
	const inputText = markdownInput.value;
	
	if (headingTest.test(inputText)) {
		inputText.replace(headingTest, (match, hashes, title) => {
  	const hashLevel = hashes.length;
		const headingText = `<h${hashLevel}>${title}</h${hashLevel}>`;
  	
		return;
		});
	} else if (italicTest.test(inputText)) {
		inputText.replace(italicTest, (match, text) => {
		const italicText = `<em>${text}</em>`;
		
		return;
		});		 
	} else if (boldTest.test(inputText)) {
		inputText.replace(boldTest, (match, text) => {
		const boldText = `<strong>${text}</strong>`;
		
		return;
		});		
	} else if (imgTest.test(inputText)) {
		inputText.replace(imgTest, (match, altText, imgSource) => {
  	const imgText = `<img alt="${altText}" src="${imgSource}">`;
		
		return;
		});		
	} else if (urlTest.test(inputText)) {
		inputText.replace(urlTest, (match, linkText, link) => {
  	const urlText = `<a href="${link}">${linkText}</a>`;
		
		return;
		});	
	} else if (quoteTest.test(inputText)) {
		inputText.replace(quoteTest, (match, text) => {
  	const quoteText = `<blockquote>${text}</blockquote>`;
		
		return;
		});	
	} else {
		htmlOutput.innerText = inputText;
		preview.innerHTML = inputText;
		return;
	}
}
