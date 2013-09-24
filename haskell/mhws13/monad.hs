		--expoenential tutorials
		--two types
		--best way to use them is to have a bunch of viewpoints on it
		--tagged value principle
		--	- tagged as this world is tainted from the outside worlds
		--	- make it hard to remove that tag

echo = getLine >>= (\name -> putStrLn("Hello " ++ name))

stuffDo = do
	putStrLn "Hello"
	putStrLn "What is your name?"
	name <- getLine
	putStrLn ("Hello " ++ name)

stuffDo' =
	putStrLn "Hello" >>
	putStrLn "What is your name?" >>
	getLine >>= (\
			name -> putStrLn ("Hello " ++ name)
		)


ageInsult = do
	putStrLn "Hello"
	putStrLn "What is your name?"
	name <- getLine
	putStrLn ("Hello " ++ name)
	putStrLn "What is your age?"
	inp <- getLine
	insult = (\ageStr -> if ageStr == "99"
		then "You too old!"
		else "You old!") inp
	putStrLn (insult)
