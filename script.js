//your code here
const inp = document.getElementById("evaluatedText");
count wordCount=document.getElementById("wordCount");
inp.addEventListener('input', calculatedWords());

function calculatedWords(e) {
	const text = this.value.trim();
	const count = text === '' ? 0 : text.split(/\s+/).length;
	wordCount.textContent = count;
}