## --------------------------------------- ##
##             Connect 4 Game              ##
##        Made by David Sangojinmi         ##
## --------------------------------------- ##

## ------Install necessary components----- ##
import random
import pprint
import sys
## --------------------------------------- ##

## --------------Create board------------- ##
row1 = [0,0,0,0,0,0,0]
row2 = [0,0,0,0,0,0,0]
row3 = [0,0,0,0,0,0,0]
row4 = [0,0,0,0,0,0,0]
row5 = [0,0,0,0,0,0,0]
row6 = [0,0,0,0,0,0,0]
board = [row1, row2, row3, row4, row5, row6]
## --------------------------------------- ##

## -------------Game mechanics------------ ##
def showBoard():
	pprint.pprint(board)

def instructions():
	print('''
		You are yellow 'Y' and the computer is red 'R'.
		Place your piece in one of the columns and then
		the computer will place its own piece. To win,
		you must get four of your own pieces in a row
		either vertically, horizontally or diagonally.
	''')

def gameStart():
	global pReady
	global gameActive
	print("Welcome to Connect 4!", '\n', "Prove your skill and beat the computer.", '\n', "Good luck!")
	pReady = input("Play(Y/N)? ")
	print('\n')
	if play == 'Y':
		showBoard()
		instructions()
		print('\n')
		gameActive = True
	elif play == "N":
		sys.exit()

def gameEnd():
	print("Thanks for playing, hope you had fun!", '\n')
	playAgain = input("Play again(Y/N)? ")
	if playAgain == 'Y':
		play()
	elif playAgain == 'N':
		sys.exit()

def checkWin():
	pWC = 0
	cWC = 0
	## Horizontally
	for i in range(5, 0, -1):
		for j in range(0, 7):
			if board[i][j] == 1:
				pWC += 1
			elif board[i][j] == 2:
				cWC += 1
			elif board[i][j] == 0:
				pWC = 0
				cWC = 0
		if pWC == 4:
			print("You have won!", '\n')
			gameActive = False
			gameEnd()
		elif pWC < 4:
			gameActive = True
		if cWC == 4:
			print("The computer has won!", '\n')
			gameActive = False
			gameEnd()
		elif cWC < 4:
			gameActive = True
	## Vertically

	## Diagonally


def placePiece(pieceCol, playerPiece):
	pos = 5
	if board[pos][pieceCol] == 0:
		board[pos][pieceCol] = playerPiece
	elif board[pos][pieceCol] != 0:
		pos -= 1
		if board[pos][pieceCol] == 0:
			board[pos][pieceCol] = playerPiece
		elif board[pos][pieceCol] != 0:
			pos -= 1
			if board[pos][pieceCol] == 0:
				board[pos][pieceCol] = playerPiece
			elif board[pos][pieceCol] != 0:
				pos -= 1
				if board[pos][pieceCol] == 0:
					board[pos][pieceCol] = playerPiece
				elif board[pos][pieceCol] != 0:
					pos -= 1
					if board[pos][pieceCol] == 0:
						board[pos][pieceCol] = playerPiece
					elif board[pos][pieceCol] != 0:
						pos -= 1
						if board[pos][pieceCol] == 0:
							board[pos][pieceCol] = playerPiece

def playerMove():
	pCol = int(input("Column? ")) - 1
	print('\n')
	placePiece(pCol, 1)
	showBoard()
	print('\n')

def compMove():
	cCol = (random.randint(1, 3)) - 1
	print("Computer picks column: ", cCol + 1, ".")
	print('\n')
	placePiece(cCol, 2)
	showBoard()
	print('\n')

def gamePlay():
	global gameActive
	while gameActive == True:
		playerMove()
		checkWin()
		compMove()
		checkWin()

## Second time defining gameEnd()
def gameEnd():
	print("Thanks for playing, hope you had fun!", '\n')
	playAgain = input("Play again(Y/N)? ")
	if playAgain == 'Y':
		play()
	elif playAgain == 'N':
		sys.exit()

## Second time defining play()
def play():
	gameStart()
	gamePlay()
	gameEnd()

play()
## --------------------------------------- ##