add1 :: Integer -> Integer
add1 x = 1 + x

asc :: [Integer]
asc = 1 : map add1 asc

doubling :: [Integer]
doubling = 1 : zipWith (+) doubling doubling
