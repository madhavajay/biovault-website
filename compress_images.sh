jpegoptim --max=85 --strip-all --all-progressive src/images/*.jpg
pngcrush -rem gAMA -rem cHRM -rem iCCP -rem sRGB -rem eXIf -rem mIE -rem sRGB -rem allA src/images/*.png