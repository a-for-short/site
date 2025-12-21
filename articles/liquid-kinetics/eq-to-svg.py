# IMPORTANT: runs from liquid-kinetics
import re
import os
import sys
import subprocess

html_file = "main.html"
typ_folder = "./assets/typ"
svg_folder = typ_folder

# Read HTML
with open(html_file, "r", encoding="utf-8") as f:
    html_content = f.read()

# Match comments with equations
pattern = re.compile(r"<!--\s*\$(.*?)\$\s*<([^>]+)>\s*-->")
matches = pattern.findall(html_content)

os.makedirs(typ_folder, exist_ok=True)
os.makedirs(svg_folder, exist_ok=True)

# Function to generate the div
def svg_div(name, equation):
    return f'<div class="equation"><img src="{svg_folder}/{name}.svg" alt="{equation}"></div>'

# Loop through matches
for equation, name in matches:
    typ_file = os.path.join(typ_folder, f"{name}.typ")
    with open(typ_file, "w", encoding="utf-8") as f:
        f.write(f"$ {equation} $")

# Run header inserter
subprocess.run([sys.executable, "header-composer-inserter.py"], cwd="assets" ,check=True)

# Run compiler
subprocess.run(["bash", "compile-all.sh"], cwd="assets", check=True)

# Now inject/update divs after comments
def insert_svg_div(html, eq, name):
    div_html_template = '<div class="equation">\n\t<img src="{svg}" alt="{eq}">\n</div>'
    comment_pattern = re.compile(rf"(^[ \t]*)<!--\s*\${re.escape(eq)}\$\s*<{name}>\s*-->", re.MULTILINE)
    
    def repl(match):
        indent = match.group(1)  # captures leading tabs/spaces before comment
        div_html = div_html_template.format(svg=f"{svg_folder}/{name}.svg", eq=eq)
        # prepend the indent to every line of div_html
        div_html_indented = "\n".join(indent + line for line in div_html.splitlines())
        
        following = html[match.end():match.end()+200]
        if '<div class="equation">' in following:
            return match.group(0)  # already exists, skip inserting
        else:
            return match.group(0) + "\n" + div_html_indented

    return comment_pattern.sub(repl, html)


for equation, name in matches:
    html_content = insert_svg_div(html_content, equation, name)

# Write back HTML
with open(html_file, "w", encoding="utf-8") as f:
    f.write(html_content)