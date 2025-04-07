import turtle

# إعداد شاشة Turtle
screen = turtle.Screen()
screen.bgcolor("black")

# إعداد القلم
tu = turtle.Turtle()
tu.pensize(2)
tu.color("green")
tu.speed(10)

# رسم النص "I am sorry" بطريقة إبداعية
def draw_text(text, size, x, y, color):
    tu.penup()
    tu.goto(x, y)  # موقع البداية
    tu.color(color)
    tu.hideturtle()
    style = ("Arial", size, "bold")
    tu.write(text, font=style, align="center")

# تأثير رسم النص تدريجيًا
def animated_text(text, size, x, y, colors):
    tu.hideturtle()
    for i in range(len(text)):
        draw_text(text[:i+1], size, x, y, colors[i % len(colors)])
        screen.update()
        screen.delay(200)

# إعداد الألوان المتغيرة
colors = ["red", "orange", "yellow", "green", "cyan", "blue", "magenta"]

# رسم النص
animated_text("I am sorry", 50, 0, 0, colors)

# إنهاء البرنامج
turtle.done()
