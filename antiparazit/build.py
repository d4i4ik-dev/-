#!/usr/bin/env python3
"""Собирает antiparazit/tilda-block.html: подставляет lucide-иконки и ссылки на картинки."""
import re, os, urllib.parse

ICONS_DIR = '/tmp/render/node_modules/lucide-static/icons'
SHA = '1da2abaf46a3d13ba2bc2af547bdd1231b6b203a'
IMG = f'https://raw.githubusercontent.com/d4i4ik-dev/-/{SHA}/antiparazit/images'

def icon(name, cls='', sw='2'):
    if name == 'instagram':
        inner = '<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>'
    else:
        svg = open(f'{ICONS_DIR}/{name}.svg').read()
        inner = re.sub(r'^<svg[^>]*>|</svg>\s*$', '', svg, flags=re.S).strip()
    c = f' class="{cls}"' if cls else ''
    return (f'<svg{c} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" '
            f'stroke="currentColor" stroke-width="{sw}" stroke-linecap="round" stroke-linejoin="round">{inner}</svg>')

tg_start = 'https://t.me/Dary_chik?text=' + urllib.parse.quote('Нужна консультация по взрослому курсу — тариф «Старт»')
tg_full  = 'https://t.me/Dary_chik?text=' + urllib.parse.quote('Нужна консультация по взрослому курсу — тариф «Полная перезагрузка»')

tpl = open('/home/user/-/antiparazit/template.html', encoding='utf-8').read()
out = tpl
out = out.replace('%%IMG%%', IMG)
out = out.replace('%%TG_START%%', tg_start)
out = out.replace('%%TG_FULL%%', tg_full)
for m in set(re.findall(r'%%ICON:([a-z-]+):([^:%]*):([\d.]+)%%', out)):
    name, cls, sw = m
    out = out.replace(f'%%ICON:{name}:{cls}:{sw}%%', icon(name, cls, sw))
assert '%%' not in out, re.findall(r'%%[^%]+%%', out)[:3]

dest = '/home/user/-/antiparazit/tilda-block.html'
open(dest, 'w', encoding='utf-8').write(out)
print('OK', os.path.getsize(dest)//1024, 'KB')
