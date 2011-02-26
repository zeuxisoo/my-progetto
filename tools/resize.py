import os, Image

works_root = os.path.join(os.path.abspath(os.path.dirname(__file__)), "static/works")

def resize(file_path, width_size, is_thumb = False):
	image = Image.open(file_path)
	
	width = width_size
	ratio = float(width)/image.size[0]
	height= int(image.size[1]*ratio)
	
	if is_thumb is True:
		file_name = "thumb_%s" % os.path.basename(file_path)
		file_path = "%s/%s" % (os.path.dirname(file_path), file_name)
		
	try:
		if is_thumb is True:
			image.resize( (width, height), Image.BILINEAR ).crop((0, 0, 300, 150)).save(file_path)
		else:
			image.resize( (width, height), Image.BILINEAR ).save(file_path)
		return file_path
	except IOError, e:
		return ""

folders = [folder for folder in os.listdir(works_root) if folder[0] != '.']

for folder in folders:
	for image in os.listdir("%s/%s" % (works_root, folder)):
		if image[0] != "." and image[:6] != "thumb_":
			file_path = "%s/%s/%s" % (works_root, folder, image)

			if file_path is not None:
				print "O: %s" % file_path
				print "B: %s" % resize(file_path, 780)
				print "T: %s" % resize(file_path, 300, True)