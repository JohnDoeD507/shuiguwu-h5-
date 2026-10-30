# -*- coding: utf-8 -*-
import qrcode

url = "http://192.168.68.183:8000/index_single.html"
qr = qrcode.QRCode(
    version=None,
    error_correction=qrcode.constants.ERROR_CORRECT_M,
    box_size=12,
    border=4,
)
qr.add_data(url)
qr.make(fit=True)
img = qr.make_image(fill_color="black", back_color="white")
out = r"C:\Users\wmj\Doubao\chats\2026-10-08\new-chat\miao-fei-yi-h5\qr_link.png"
img.save(out)
print("saved:", out)
print("size:", img.size)
print("url:", url)
