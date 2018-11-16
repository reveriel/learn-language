
all: README.html

README.html: README.adoc
	asciidoctor README.adoc -o $@

# -o complians too many argument
# README_asciidoc.html: README.adoc
# 	cat README.adoc | asciidoc -b html5 -o $@


clean:
	rm -f *.html
