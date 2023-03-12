//your code here
const inp = document.getElementById("evaluatedText");
count count=document.getElementById("wordCount");
inp.addEventListener('input', calculatedWords());

function calculatedWords(e) {
	e.target.value.split(" ").length;	
}