#Name: David S
#Date: 20/07/2016
#Project: Simple Text Based Game

import time
import sys

print """
---------------------------------
---------------------------------
--       Hello my friend!      --
--     Welcome to my game,     --
--         Adventure!          --
---------------------------------
---------------------------------
"""

time.sleep(2)

def retry3():
	print "Due to your choice, you cannot carry on. GAME OVER\n"
	print "Do you want to retry or quit?"
	option = raw_input('Type "retry" to retry or "quit" to quit-> ')
	if option == "retry":
		stage3()
	elif option == "quit":
		sys.exit()

def pathway3():
	print "To be continued"
	option = raw_input('To be continued...')

def retry2():
	print "Due to your choice, you cannot carry on. GAME OVER\n"
	print "Do you want to retry or quit?"
	option = raw_input('Type "retry" to retry or "quit" to quit-> ')
	if option == "retry":
		stage2()
	elif option == "quit":
		sys.exit()

def pathway2b():
	print "To be continued"

def pathway2():
	print "Pathway 2 leads you into a tunnel\n"
	time.sleep(1)
	print "the tunnel is lighted and you can see it is very long.\n"
	time.sleep(1)
	print "Suddenly the tunnel begins to collapse!"
	time.sleep(1)
	print "What do you do?"
	option = raw_input('Type "turn back" to turn back or "run ahead" to run ahead? ')
	if option == "turn back":
		print "You tried, but failed.\n"
		time.sleep(1)
		print "You are crushed and suffocate\n"
		time.sleep(1)
		retry2()
	elif option == "run ahead":
		print "You see a opening to the right and duck into it\n"
		time.sleep(1)
		print "You are transported outside, safe and sound!\n"
		time.sleep(1)
		pathway2b()

def retry1():
	print "Due to your choice, you cannot carry on. GAME OVER\n"
	print "Do you want to retry or quit?"
	option = raw_input('Type "retry" to retry or "quit" to quit-> ')
	if option == "retry":
		pathway()
	elif option == "quit":
		sys.exit()

def pathway1b():
	print "-"

def pathway1():
	print "You are walking down pathway 1\n"
	time.sleep(1)
	print "It is very dark and you hear a noise\n"
	time.sleep(1)
	print "It sounds like it is coming closer to you!\n"
	time.sleep(1)
	print "Do you stop moving or carry on?\n"
	option = raw_input('Type "stop moving" to stop moving or "carry on" to carry on-> ')
	if option == "stop moving":
		print "You see the object, it is a whirling blade!!\n"
		time.sleep(1)
		print "Your body frozen, the blade hits you square on,\n"
		time.sleep(1)
		retry1()
	elif option == "carry on":
		print "You see the object, it is a whirling blade!!\n"
		time.sleep(1)
		print "But because you carried on you have just enough time to dodge it,\n"
		time.sleep(1)
		print "Hurrah!!"
		time.sleep(1)
		pathway1b()

def pathway():
	print"What pathway do you want to pick?"
	option = raw_input('1, 2, or 3? ')
	if option == "1":
		pathway1()
	elif option == "2":
		pathway2()
	else:
		pathway3()

def retry():
	print "Due to your choice, you cannot carry on. GAME OVER\n"
	print "Do you want to retry or quit?"
	option = raw_input('Type "retry" to retry or "quit" to quit-> ')
	if option == "retry":
		start()
	elif option == "quit":
		sys.exit()

def start():
	print "You have been transported to this new earth,\n"
	time.sleep(1)
	print "you look around yourself and all you can see is three pathways.\n"
	time.sleep(1)
	print "What do you do?"
	option = raw_input('Type "pick a pathway" to pick a pathway or "run" to run-> ')
	if option == "pick a pathway":
		pathway()
	elif option == "run":
		retry()

print "Do you want to play my game?"
option = raw_input('Type "yes" or "no"-> ')
if option == "yes":
	start()
elif option == "no":
	sys.exit()

