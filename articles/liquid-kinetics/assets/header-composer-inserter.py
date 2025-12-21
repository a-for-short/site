import os
import re
from datetime import datetime

css_sheet = "../../../css/style.css"
with open(css_sheet, 'r', encoding='utf-8') as f:
    css_content = f.read()

match = re.search(r'--color-quote-border:\s*(#[0-9a-fA-F]{6}|[a-zA-Z]+);', css_content)
if match:
    color_value = match.group(1)
    print(f"Extracted color from {css_sheet}: {color_value}")

text_size = 20
header_string = f"""
/* ===== START OF HEADER ===== */
#set text(
  size: {text_size}pt,
  fill: rgb("{color_value}")
)

#set page(
  width: auto,
  height: auto,
  margin: 0pt,
  background: none,
  fill: none,
)
/* ===== END OF HEADER ===== */
"""


folder_path = "."

# Regular expression pattern to match the existing header
header_pattern = re.compile(
    r"/\* ===== START OF HEADER ===== \*/.*?/\* ===== END OF HEADER ===== \*/\n?",
    re.DOTALL
)

# Loop through all .typ files in the folder
for filename in os.listdir(folder_path):
    if filename.endswith(".typ"):
        file_path = os.path.join(folder_path, filename)
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()

        new_header = header_string.strip("\n") + "\n"
        # Replace existing header or insert new one at the top
        if header_pattern.search(content):
            new_content = header_pattern.sub(new_header, content)
            action = "Replaced"
        else:
            new_content = new_header + content.lstrip("\n")
            action = "Inserted"

        # Write the updated content back to the file
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(new_content)

        print(f"{action} header in {filename}")