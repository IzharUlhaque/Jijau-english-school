# Python script to generate 101 <img> tags with incrementing src attributes

# Define the base path and file structure
base_path = "../assets/img/aug/"
file_prefix = "00"
file_suffix = ".jpg"
class_attr = 'class="img-fluid py-2"'
data_action = 'data-action="zoom"'

# Create the HTML <img> tags
for i in range(1, 102):
    # Format the number with leading zeros (e.g., 0001, 0002, ..., 0101)
    img_number = str(i).zfill(3)
    img_tag = f'<img src="{base_path}{file_prefix}{img_number}{file_suffix}" {class_attr} {data_action}>'
    print(img_tag)
