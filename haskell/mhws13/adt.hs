-- abstratc data types

-- model a data type as a series of discrete values
-- equivalent to an enum
data MyBool = MyTrue | MyFalse | MyUnsure

shouldIEat :: MyBool
shouldIEat = MyUnsure

-- constructors
data NadaString = Nada | MyString String

stringy :: NadaString
stringy = MyString "hello nada"

blanky :: NadaString
blanky = Nada

data Junk = Rubbish | Trash String Int Bool

myJunk :: Junk
myJunk = Rubbish

myOtherJunk :: Junk
myOtherJunk = Trash "rotten" 3 False

-- recursive adt
data MyNums = NoNums | SomeNums Int MyNums

numbers :: MyNums
numbers = SomeNums 3 (SomeNums 2 (SomeNums 1 NoNums))

data JJB = Binks | Jar JJB

pun :: JJB
pun = Jar (Jar (Binks))

-- parametric data types

data AdtList a = AdtListEnd | Item a (AdtList a)

myAdtList :: AdtList Int
myAdtList = Item 1 (Item 2 (Item 3 AdtListEnd)) 

-- add show to allow output of ADTs to console

data Foo = A | B deriving Show

data Bata = BarA | BarB

instance Show Bata where
	show BarA = "hello"
	show BarB = "world"	

