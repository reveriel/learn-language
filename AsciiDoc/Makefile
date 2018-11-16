
# https://www.gnu.org/software/make/manual/html_node/Text-Functions.html
# makefile's string function
# $(subst ee,EE, feet on the street) 
#    return :  'fEEt on the strEEt'
#
SRC = $(wildcard *.adoc)
$(info "SRC = " $(SRC))

HTMLS = $(subst .adoc,.html, $(wildcard *.adoc))
$(info "HTMLS = " $(HTMLS))

all: $(HTMLS)

README.html: README.adoc
	asciidoctor README.adoc -o $@

%.html: %.adoc
	$(info "\$\@" is $@)
	$(info "\$\^" is $^)
	asciidoctor $^
	
	

# -o complians too many argument
# README_asciidoc.html: README.adoc
# 	cat README.adoc | asciidoc -b html5 -o $@


clean:
	rm -f *.html
