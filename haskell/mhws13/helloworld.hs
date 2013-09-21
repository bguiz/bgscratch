-- ghci helloworld.hs
-- :reload


-- OR

-- ghci
-- :load helloworld.hs

main = print "hello world"

add x y z = x + y + z

myString = "snails"

myTuple = (1,2.2,myString)

myFunction x = x * x

myMultiply x y z = x * y * z

-- lists are heterogenous
-- built infix using :
list1 = [1,2,3]
list2 = 1:2:[]
list3 = "hello":"world":[]

myHead (x:xs) = x

myList'sHead = myHead list3

myLength [] = 0
myLength (x:xs) = 1 + myLength xs

-- myMap fn(a -> b) [] = []
-- myMap fn(a -> b) [a:as] = fn(a) : myMap fn as 

myMap fn [] = []
myMap fn (a:as) = fn a : myMap fn as

myFilter fn [] = []
myFilter fn (x:xs) =
	if fn x then x : myFilter fn xs
			else myFilter fn xs

myFoldFn x y = x ^ y

myFold fn accum [] = accum
myFold fn accum (x:xs) = myFold fn (fn accum x) xs
-- ((0^1)^2)^3
-- fold from the left

myFold' fn accum [] = accum
myFold' fn accum (x:xs) = fn x (myFold' fn accum xs)
-- 1^(2^(3^0))
-- fold from the right

myIdentical [] = []
myIdentical (x:xs) = x : myIdentical xs

myIdentical' [] = []
myIdentical' (x:xs) = [x] ++ myIdentical xs

myReverse [] = []
myReverse (x:xs) = myReverse xs ++ [x]

myElem e [] = False
myElem e (x:xs) =
	if e == x then True
	else myElem e xs

-- section 2 : types

-- regular definition - use in most cases
myFloat :: Float
myFloat = 3

-- inline definition - use to clarify ambuity inline
myFloat' = (5 :: Float)

-- type names -must- begin with a capital letter
type FloatList = [Float]
myFloats :: FloatList
myFloats = [4,5,6]

type StringIntTuple = (String, Int)
mySiTuple :: StringIntTuple
mySiTuple = ("abc", 123)

-- functions : s/consistant/consistent/

myMultiply4 :: Int -> Int -> Int -> Int -> Int
myMultiply4 a b c d = a * b * c * d

-- all function only take in one argument, and have one return value
-- haskell "simulates" mulitple argument by define the return value of a function as another function
-- this type sugnature is the same as above as function syntax is R-asociative
myMultiply4' :: Int -> (Int -> (Int -> (Int -> Int)))
myMultiply4' g h i j = g * h * i * j

bList :: [Char]
bList = ['b', 'c', 'd']
-- will output as a String because that String derives from show and is aslo defined as a type synonym for [Char]

bHead :: [x] -> x
bHead (x:xs) = x

bLength :: [x] -> Int
bLength [] = 0
bLength (x:xs) = 1 + bLength xs

--myFold fn accum [] = accum
--myFold fn accum (x:xs) = myFold fn (fn accum x) xs

bAdd1 :: Int -> Int
bAdd1 x = 1 + x

bLength' :: [x] -> Int
-- bLength' arr = myFold (\acc _ -> acc + 1) 0 arr
bLength' arr = myFold (\acc _ -> bAdd1 acc) 0 arr
-- bLength' arr = myFold bAdd1 0 arr

-- come back to this
--sumGreaterThan :: Max -> [Int] -> Bool
--sumGreaterThan 

bMap :: (a -> b) -> [a] -> [b]
bMap fn [] = []
bMap fn (x:xs) = fn x : bMap fn xs


