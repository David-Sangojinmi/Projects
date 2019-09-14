## --------------------------------------- ##
##             Connect 4 Game              ##
##        Made by David Sangojinmi         ##
## --------------------------------------- ##

## -------------Setup section------------- ##
import random
import pprint
import sys

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
	global gameActive
	print("You are player 1 and the computer is player 2.", '\n',
	"The board size is 7 by 6. Place your piece in", '\n',
	"one of the 7 columns and then the computer will", '\n',
	"place its own piece. To win, you must get four", '\n',
	"of your own pieces in a row either vertically,", '\n',
	"horizontally or diagonally.", '\n',
	"Prove your skill and beat the computer, Good luck!")
	print('\n')
	gameActive = True

def gameStart():
	global playerWinCounter
	global computerWinCounter
	print("Welcome to Connect 4!", '\n')
	playerReady = input("Play(Y/N)? ")
	if playerReady == 'Y':
		print('\n')
		instructions()
		showBoard()
		print('\n')
		playerWinCounter = 0
		computerWinCounter = 0
	elif playerReady == "N":
		sys.exit()

def placePiece(pieceColumn, playerPiece):
	pos = 5
	if board[pos][pieceColumn] == 0:
		board[pos][pieceColumn] = playerPiece
	elif board[pos][pieceColumn] != 0:
		pos -= 1
		if board[pos][pieceColumn] == 0:
			board[pos][pieceColumn] = playerPiece
		elif board[pos][pieceColumn] != 0:
			pos -= 1
			if board[pos][pieceColumn] == 0:
				board[pos][pieceColumn] = playerPiece
			elif board[pos][pieceColumn] != 0:
				pos -= 1
				if board[pos][pieceColumn] == 0:
					board[pos][pieceColumn] = playerPiece
				elif board[pos][pieceColumn] != 0:
					pos -= 1
					if board[pos][pieceColumn] == 0:
						board[pos][pieceColumn] = playerPiece
					elif board[pos][pieceColumn] != 0:
						pos -= 1
						if board[pos][pieceColumn] == 0:
							board[pos][pieceColumn] = playerPiece

def playerMove():
	playerPiece = 1
	playerColumn = int(input("Column to place piece? ")) - 1
	print('\n')
	placePiece(playerColumn, playerPiece)
	showBoard()
	print('\n')

def compMove():
	computerPiece = 2
	computerColumn = (random.randint(1, 7)) - 1
	print("Computer places piece in column ", computerColumn + 1, ".")
	print('\n')
	placePiece(computerColumn, computerPiece)
	showBoard()
	print('\n')

def checkWin():
	global gameActive
	playerWinCounter = 0
	computerWinCounter = 0
	## Horizontally
	for i in range(5, 0, -1):
		for j in range(0, 6):
			if board[i][j] == 1:
				playerWinCounter += 1
			elif board[i][j] == 0:
				playerWinCounter = 0
			if playerWinCounter == 4:
				print("You have won!", '\n')
				gameActive = False
				gameEnd()
			else:
				gameActive = True
			if board[i][j] == 2:
				computerWinCounter += 1
			elif board[i][j] == 0:
				computerWinCounter = 0
			if computerWinCounter == 4:
				print("The computer has won!", '\n')
				gameActive = False
				gameEnd()
			else:
				gameActive = True
	## Vertically
	for j in range(0, 6):
		for i in range(5, 0, -1):
			if board[i][j] == 1:
				playerWinCounter += 1
			else:
				playerWinCounter = 0
			if playerWinCounter == 4:
				print("You have won!", '\n')
				gameActive = False
				gameEnd()
			else:
				gameActive = True
			if board[i][j] == 2:
				computerWinCounter += 1
			else:
				computerWinCounter = 0
			if computerWinCounter == 4:
				print("The computer has won!", '\n')
				gameActive = False
				gameEnd()
			else:
				gameActive = True
		if gameActive == False:
			playerWinCounter = 0
			computerWinCounter = 0
	## Diagonally


def gamePlay():
	global gameActive
	while gameActive == True:
		playerMove()
		checkWin()
		compMove()
		checkWin()

def gameEnd():
	global gameActive
	if gameActive == False:
		print("Thanks for playing, hope you had fun!", '\n')
		playAgain = input("Play again(Y/N)? ")
		if playAgain == 'Y':
			for i in range(5, 0, -1):
				for j in range(0, 6):
					board[i][j] = 0
			print('\n')
			instructions()
			gamePlay()
		elif playAgain == 'N':
			sys.exit()

def PlayGame():
	gameStart()
	gamePlay()
	gameEnd()

PlayGame()
## --------------------------------------- ##