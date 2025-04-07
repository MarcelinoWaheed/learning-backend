import pygame
import time
import sys

# تهيئة Pygame
pygame.init()

# إعداد شاشة العرض
width, height = 800, 400
screen = pygame.display.set_mode((width, height))
pygame.display.set_caption("I am sorry...")

# إعداد الألوان
black = (0, 0, 0)
white = (255, 255, 255)
red = (255, 0, 0)

# إعداد الخط
font_size = 100
font = pygame.font.Font(pygame.font.get_default_font(), font_size)

# النص المراد عرضه
text = "I am sorry..."
text_pos = (width // 2, height // 2)

# تأثير الكتابة حرفًا حرفًا
def draw_text_live(text, font, color, position):
    x, y = position
    for i in range(len(text)):
        screen.fill(black)  # مسح الشاشة
        rendered_text = font.render(text[:i+1], True, color)
        text_rect = rendered_text.get_rect(center=(x, y))
        screen.blit(rendered_text, text_rect)
        pygame.display.update()  # تحديث الشاشة
        time.sleep(0.3)  # تأخير بين الحروف

# تشغيل العرض
running = True
screen.fill(black)
draw_text_live(text, font, red, text_pos)

# الانتظار قبل الإغلاق
time.sleep(3)
pygame.quit()
sys.exit()
