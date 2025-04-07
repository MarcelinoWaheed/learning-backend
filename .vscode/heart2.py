import turtle
import math 
t = turtle.Turtle()
t.speed(0)
turtle.bgcolor("black")
t.color("red")
def heart(n):
    x = 16*math.sin(n) ** 3
    y = 13*math.cos(n) - 5*math.cos(2*n)-2*math.cos(3*n) - math.cos(4*n)
    return x,y
# ة
t.penup()
t.goto(0,0)
t.pendown()

for i in range(100):
    t.penup()
    t.goto(0,0)
    t.pendown()
    t.begin_poly()
    for n in range(100):
       x,y = heart(n / 10)
       t.goto(x*i,y*i)
    t.end_poly()
    
t.hideturtle()

turtle.done()       