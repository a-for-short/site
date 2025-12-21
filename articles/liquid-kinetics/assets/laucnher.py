import subprocess
import sys
import os

# Run the header-composer-inserter
header_script = "header-composer-inserter.py"
print(f"Running {header_script}...")
subprocess.run([sys.executable, header_script], check=True)

# Run the bash compile script
compile_script = "compile-all.sh"

# Make sure the script is executable
if not os.access(compile_script, os.X_OK):
    os.chmod(compile_script, 0o755)

print(f"Running {compile_script}...")
subprocess.run(["bash", compile_script], check=True)

print("All headers updated and files compiled!")