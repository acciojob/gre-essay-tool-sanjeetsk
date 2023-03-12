//your code here
const inp = document.getElementById("evaluatedText");
const wordCount=document.getElementById("wordCount");

inp.addEventListener('input', function() {
    const text = this.value.trim();
	const count = text === '' ? 0 : text.split(/\s+/).length;
	wordCount.textContent = count;
});
