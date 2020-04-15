-- The push file is from https://github.com/games50/pong/blob/master/pong-1/push.lua
push = require 'push'

WINDOW_WIDTH = 1280
WINDOW_HEIGHT = 720

VIRTUAL_WIDTH = 432
VIRTUAL_HEIGHT = 243

PADDLE_SPEED = 200

function love.load()
    -- Makes it look pixelated
    love.graphics.setDefaultFilter('nearest', 'nearest')

    math.randomseed(os.time())

    -- Retro looking font
    smallFont = love.graphics.newFont('font.ttf', 8)
    -- scoreFont = love.graphics.newFont('font.ttf', 32)

    -- Set the active font to the smallFont object
    love.graphics.setFont(smallFont)

    push:setupScreen(VIRTUAL_WIDTH, VIRTUAL_HEIGHT, WINDOW_WIDTH, WINDOW_HEIGHT, {
        fullscreen = false,
        resizable = false,
        vsync = true
    })

    -- Variables for the players
    -- player1Score = 0
    -- player2Score = 0

    player1Y = 30
    player2Y = VIRTUAL_HEIGHT - 50

    -- Variables for the ball
    ballX = VIRTUAL_WIDTH / 2 - 2
    ballY = VIRTUAL_HEIGHT / 2 - 2

    ballDX = math.random(2) == 1 and 100 or -100
    ballDY = math.random(-50, 50)

    gameState = 'start'

end

function love.update(dt)
    -- Player 1 movement
    if love.keyboard.isDown('w') then
        player1Y = math.max(0, player1Y + -PADDLE_SPEED*dt)
    elseif love.keyboard.isDown('s') then
        player1Y = math.min(VIRTUAL_HEIGHT - 20, player1Y + PADDLE_SPEED*dt)
    end

    -- Player 2 movement
    if love.keyboard.isDown('up') then
        player2Y = math.max(0, player2Y + -PADDLE_SPEED*dt)
    elseif love.keyboard.isDown('down') then
        player2Y = math.min(VIRTUAL_HEIGHT - 20, player2Y + PADDLE_SPEED*dt)
    end

    -- Ball movement
    if gameState == 'play' then
        ballX = ballX + ballDX * dt
        ballY = ballY + ballDY * dt
    end

end

function love.keypressed(key)
    if key == 'escape' then
        love.event.quit()

    elseif key == 'enter' or key == 'return' then
        if gameState == 'start' then
            gameState = 'play'
        else
            gameState = 'start'

            -- Start ball in the middle of the screen
            ballX = VIRTUAL_WIDTH / 2 - 2
            ballY = VIRTUAL_WIDTH / 2 - 2

            -- Ball's x and y velocity given random starting value
            ballDX = math.random(2) == 1 and 100 or -100
            ballDY = math.random(-50, 50) * 1.5
        end
    end

end

function love.draw()
    push:apply('start')

    love.graphics.clear(0.2, 0.21, 0.3, 1)
    love.graphics.setFont(smallFont)

    if gameState == 'start' then
        love.graphics.printf('Hello Start State!', 0, 20, VIRTUAL_WIDTH, 'center')
    else
        love.graphics.printf('Hello Play State!', 0, 20, VIRTUAL_WIDTH, 'center')
    end

    -- Score
    -- love.graphics.setFont(scoreFont)
    -- love.graphics.print(tostring(player1Score), VIRTUAL_WIDTH / 2 - 50, VIRTUAL_HEIGHT / 3)
    -- love.graphics.print(tostring(player2Score), VIRTUAL_WIDTH / 2 + 30, VIRTUAL_HEIGHT / 3)

    -- Drawing the paddles
    love.graphics.rectangle('fill', 10, player1Y, 5, 20)
    love.graphics.rectangle('fill', VIRTUAL_WIDTH - 15, player2Y, 5, 20)
    -- Draw balls
    love.graphics.rectangle('fill', ballX, ballY, 4, 4)
    
    push:apply('end')

end

