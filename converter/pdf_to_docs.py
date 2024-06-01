import sys
from pdf2docx import Converter

if len(sys.argv) != 3:
    print("Usage: python pdf-to-doc.py <input_pdf_file> <output_docx_file>")
    sys.exit(1)

input_pdf = sys.argv[1]
output_docx = sys.argv[2]

try:
    cv = Converter(input_pdf)
    cv.convert(output_docx, start=0, end=None)
    cv.close()
    print(f"Conversion successful. Output saved to {output_docx}")
except Exception as e:
    print
