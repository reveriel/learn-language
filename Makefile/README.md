# Makefile

Simple makefile is simple, difficult makefile is difficult.

TODO:

reference link: [Text Function](https://www.gnu.org/software/make/manual/html_node/Text-Functions.html)

Is Makefile a Programming lanuage?


## variable

assign to a variable
- `:=`, overwrite previous value
- `?=`, if un-assigned, assing
- `+=`, append
- `=`, do last. lazy eval.

``` make
x = a
y = $(x) b
x = c
```
y would be `c b`

read a variable `$(VAR)` or `${VAR}`




