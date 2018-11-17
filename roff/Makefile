

all: src.pdf

src.pdf: src.man
	groff src.man | ps2pdf - > src.pdf

view:	
	nroff src.man | less
