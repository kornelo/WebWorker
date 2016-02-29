function generateWords(num)
{
	// Przykładowy ciąg znaków "Lorem ipsum"
	var text = "Dalajlama zapytany o to, co najbardziej zadziwia go w ludzkości odpowiedział: Człowiek, ponieważ poświęca swoje zdrowie by zarabiać pieniądze. Następnie poświęca swoje pieniądze by odzyskać zdrowie. Oprócz tego jest tak zaniepokojony swoją przyszłością, że nie cieszy się z teraźniejszości. W rezultacie nie żyje ani w teraźniejszości, ani w przyszłości. Żyje tak, jakby nigdy nie miał umrzeć, po czym umiera tak na prawdę nie żyjąc.";
	// Dzielenie wyrazów za pomocą spacji
	var words = text.split(" ");
	var word = "";
	
	// Pętla for generująca losowe wyrazy
	for (var i = 0; i < num; i++)
	{
		var rand = parseInt(Math.random() * words.length);
		word += " " + words[rand];
	}
	
	// Zwracanie wyrazu
	return word;
}

// Generowanie liczby wyrazów przez argument data[num]
self.onmessage = function(event)
{
	// Generowanie zwróconego wyrazu
	var word = generateWords(event.data.num);
	self.postMessage({lipsum: word});
}