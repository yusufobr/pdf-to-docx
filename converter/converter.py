from pdf2docx import Converter
import os

# Get the directory of the current script
current_directory = os.path.dirname(os.path.abspath(__file__))

# Construct paths to input and output directories
path_input = os.path.join(current_directory, 'input')
path_output = os.path.join(current_directory, 'output')

# Create the output directory if it doesn't exist
os.makedirs(path_output, exist_ok=True)

# Iterate over files in the input directory
for file in os.listdir(path_input):
    input_file_path = os.path.join(path_input, file)
    output_file_path = os.path.join(path_output, os.path.splitext(file)[0] + '.docx')
    
    # Convert PDF to DOCX
    cv = Converter(input_file_path)
    cv.convert(output_file_path, start=0, end=None)
    cv.close()
    print(f"Conversion complete for file: {file}")
