import os

# --- Configuration ---

# Set the project root to the directory this script is located in.
# This ensures it scans 'C:\Users\User1\nextjs-modern-app' if the script is placed there.
PROJECT_ROOT = os.path.dirname(os.path.abspath(__file__))

# Set the name for the output file
OUTPUT_FILENAME = "nextjs_summary.txt" 

# Get the name of this script file to exclude it from the scan
SCRIPT_NAME = os.path.basename(__file__)

# Folders to completely ignore during the scan
EXCLUDE_DIRS = [
    'node_modules',
    '.next',         # Next.js build and cache folder - ESSENTIAL to exclude
    'out',           # Next.js export output folder
    '.git',          
    '__pycache__',    
    '.vscode',       # IDE/Editor configuration
    'venv',          # Python virtual environment
    'dist',          # Build output directory
    'build',         # Common build output directory
    'public',        # Often contains only assets (images, fonts)
    'docs',
    'temp'
]

# File extensions to ignore (images, compiled files, archives, documents, etc.)
EXCLUDE_EXTENSIONS = (
    '.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg', '.ico', # Images
    '.woff', '.woff2', '.ttf', '.eot',                       # Fonts
    '.mp4', '.mov', '.webm',                                 # Videos
    '.bin', '.dat', '.dll', '.exe', '.obj', '.so', '.wasm',  # Binaries/Compiled
    '.zip', '.rar', '.7z', '.tar', '.gz', '.pdf', '.doc', '.docx', # Archives/Documents
    '.lock',                                                 # Lock files
    '.log',                                                  # Log files
    '.pyc',                                                  # Compiled Python files
    '.swp', '.bak'                                           # Editor/Backup files
)

# Individual files to always ignore
EXCLUDE_FILES = [
    OUTPUT_FILENAME, # The file we are writing to
    SCRIPT_NAME,     # The script itself
    'pnpm-lock.yaml',
    'package-lock.json', 
    'yarn.lock',          
    '.env',          # Environment variables (potentially sensitive)
    '.DS_Store',     # macOS system file
    'next.config.js.mjs.map' # Common Next.js build artifact
]

# --- Core Logic ---

def generate_file_tree(root_dir):
    """Generates a string representation of the file tree, excluding specific paths."""
    # Use the project's folder name as the root name
    root_name = os.path.basename(root_dir) if os.path.basename(root_dir) else os.path.basename(os.path.normpath(root_dir))
    tree_lines = [f"📁 **PROJECT FILE TREE: {root_name}**"]

    for root, dirs, files in os.walk(root_dir):
        # Modify dirs in-place to skip excluded folders
        dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
        
        # Determine the depth
        rel_path = os.path.relpath(root, root_dir)
        level = rel_path.count(os.sep) if rel_path != '.' else 0
        
        # Indentation for current level's directories/files
        current_indent = '│   ' * level

        # Directory name (if not root)
        if root != root_dir:
            tree_lines.append(f"{current_indent}├── 📁 {os.path.basename(root)}")
            # Indent for files *inside* this directory
            file_indent = '│   ' * (level + 1)
        else:
            file_indent = current_indent # Files in root directory

        # Files
        filtered_files = sorted([
            file for file in files
            if file.lower() not in EXCLUDE_FILES and not file.lower().endswith(EXCLUDE_EXTENSIONS)
        ])
        
        for file in filtered_files:
            if root == root_dir and level == 0:
                # Special handling for files directly in the root folder
                tree_lines.append(f"├── 📄 {file}")
            else:
                # Standard handling for files in subfolders
                tree_lines.append(f"{file_indent}├── 📄 {file}")
    
    return "\n".join(tree_lines) + "\n\n"

def get_file_contents(root_dir):
    """Iterates through files and reads their content."""
    content_output = []
    
    for root, dirs, files in os.walk(root_dir):
        # Skip excluded folders
        dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
        
        for file in sorted(files):
            file_path = os.path.join(root, file)
            relative_path = os.path.relpath(file_path, root_dir)
            
            # Skip excluded files/extensions
            if file.lower() in EXCLUDE_FILES or file.lower().endswith(EXCLUDE_EXTENSIONS):
                continue
            
            # Try to read the file content
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Format the file path and content
                content_output.append("-" * 80)
                content_output.append(f"📄 FILE PATH: {relative_path}") # Use relative path for cleaner output
                content_output.append("-" * 80)
                # Use a code block style for the file content
                content_output.append("```")
                # Attempt to determine a language hint from extension, default to 'text'
                ext = os.path.splitext(file)[1].lstrip('.')
                if ext in ['js', 'jsx', 'ts', 'tsx', 'css', 'json', 'yml', 'yaml']:
                    content_output.append(ext)
                elif ext == 'mjs':
                    content_output.append("javascript")
                else:
                    content_output.append("text")
                    
                content_output.append(content)
                content_output.append("```")
                content_output.append("\n\n") 

            except UnicodeDecodeError:
                print(f"Skipping binary/unreadable file: {relative_path}")
            except Exception as e:
                print(f"Error reading file {relative_path}: {e}")

    return "".join(content_output)

def main():
    """Main function to run the script."""
    output_path = os.path.join(PROJECT_ROOT, OUTPUT_FILENAME)

    print(f"Scanning project root: {PROJECT_ROOT}")
    
    # 1. Generate the file tree
    tree_section = generate_file_tree(PROJECT_ROOT)
    
    # 2. Get the content of all included files
    content_section = get_file_contents(PROJECT_ROOT)
    
    # 3. Write everything to the output file
    try:
        with open(output_path, 'w', encoding='utf-8') as outfile:
            outfile.write(tree_section)
            outfile.write("\n" + "=" * 100 + "\n\n")
            outfile.write("📄 **INDIVIDUAL FILE CONTENTS**\n\n")
            outfile.write("=" * 100 + "\n\n")
            outfile.write(content_section)
        
        print(f"\n✅ Successfully created output file: {output_path}")

    except Exception as e:
        print(f"\n❌ An error occurred while writing the output file: {e}")

if __name__ == "__main__":
    main()