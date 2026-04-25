import os
import re

html_files = [f for f in os.listdir('.') if f.endswith('.html')]

for file in html_files:
    with open(file, 'r') as f:
        content = f.read()

    # Replace .jpg, .jpeg, .png to .webp for img paths
    content = re.sub(r'(img/[^"\'<>]+)\.(jpg|jpeg|png)', r'\1.webp', content, flags=re.IGNORECASE)

    def add_lazy(match):
        tag = match.group(0)
        if 'loading=' not in tag and 'logo' not in tag.lower() and 'banner' not in tag.lower():
            return tag.replace('<img', '<img loading="lazy"')
        return tag

    content = re.sub(r'<img[^>]+>', add_lazy, content, flags=re.IGNORECASE)
    
    def add_lazy_iframe(match):
        tag = match.group(0)
        if 'loading=' not in tag:
            return tag.replace('<iframe', '<iframe loading="lazy"')
        return tag
    
    content = re.sub(r'<iframe[^>]+>', add_lazy_iframe, content, flags=re.IGNORECASE)

    preload_tags = """
    <!-- Preconnect for Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>"""
    if 'fonts.googleapis.com' in content and 'rel="preconnect"' not in content:
        content = content.replace('<!-- GOOGLE WEB FONT-->', '<!-- GOOGLE WEB FONT-->\n' + preload_tags)

    with open(file, 'w') as f:
        f.write(content)
print("Updated HTML files.")
