# roff

Unix 上的文本处理程序, 可能算是 TeX 的祖先.

`nroff` 生成纯文本, 用于屏幕输出或行式打印机(没见过..).
`troff` 生成 PS 之类的东西吧. 用于激光打印机.

Linux 上称为 GNU troff, 或 `groff`.

发现这个东西是因为看到 [MIT XV6-book](https://github.com/mit-pdos/xv6-book),
里面不是 `.tex` 文件, 而是奇怪的 `.t` 文件, 初看还以为是生成的文件..
这也太硬核了吧.

把文件后缀改成 `.man` 能够正常高亮, Vim 显示使用的syntax 是 `nroff`.
看来 ManPage 也是用这种语言写的, 难怪有点眼熟.

[Writing man Pages Using groff, 1995](https://www.linuxjournal.com/article/1158)

[groff(7) - Linux man page](https://linux.die.net/man/7/groff)

完整文档见 groff info.

roff 语言是基于行的语言。 只有两种行，控制行和文本行。 
控制行以控制字符开头，默认为句点 `.` 所有其他行都是文本行.

控制行表示命令，可带参数:

``` roff
.command_name arg1 arg2
```

文本行表示要打印的内容, 可以有转义, 转移开头为 `\\`
, 用来内嵌一些格式或函数, 也可以带参数. 



## 语法

### 段落

```man
.lp
The first paraphah
.pp
nomal paragraph are indented
```

### 字体

字体 markup 需要单独一行.

``` roff
.pp
this is
.i italics
and
.b bold
text
```









