# LaTeX

LaTeX 是基于 TeX 的宏包.

ref:
- `texdoc latex`, 文档索引
- `texdoc lshort`, 入门 LaTeX
- `texdoc usrguide`, 对LaTeX 命令稍微详细介绍, LaTeX -> LaTeX2e 的 update 文档.
   这个就算是官方 referecne 了. 感觉内容不多啊.. 不知道 LaTeX 代码量多少.
   哪些是 package 做的, 哪些是 LaTeX 自己做的?
- `texdoc latexcheat`, cheatsheet.

## newcommand

``` tex
\newcommand{<cmd>}[<num>][<default>]{<definition>}
\newcommand*{<cmd>}[<num>][<default>]{<definition>}
\renewcommand{<cmd>}[<num>][<default>]{<definition>}
\renewcommand*{<cmd>}[<num>][<default>]{<definition>}
```

- `<num>` 参数个数, 通过 `#1` `#2` 来引用
- `<default>` `#1` 的默认值. 如果调用时只提供一个参数, `#1` 被替换为 `<default>`

e.g.:
``` tex
\newcommand{\example}[2][YYY]{Mandatory arg:#2, Optinal arg:#1.}
```

```
\example{XXX} -> Mandatory arg:XXX, Optinal arg:YYY
\example[AAA]{BBB} -> Mandatory arg:BBB, Optinal arg:AAA
```

**newcommand** 与 **def** 的区别:

`\def` is a Tex primitive.

`\newcommand` is a LaTeX overlay on top of `\def`.

- `\newcommand` checks whether or not the command already exists
- `\newcommand` allows you to define an optional argument

In general, anything that `\newcommand` does can be done by `\def`, but it usually involves
a little trickery and unless you want something that `\newcommand` can't do, there's no
point in reinventing the wheel.

ref: [stackexchange](https://tex.stackexchange.com/questions/655/what-is-the-difference-between-def-and-newcommand)

so, Use `\newcommand`.


