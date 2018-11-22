# 测试

一个 `#` 是 section.

## 字体

**bold** *italic*, **黑体**, *斜体*

`some_code` `TEST_`


## 列表 this is a subsection

Unordered list

* 列表 开头必须空一行
    * 列表
    * 列表

Ordered List

1. item one, must begin with a blank line .
    1. subitem
2. item two

## listing

``` python
def foo(a):
    if a > 0:
        return a
```

> 这个是quote

```
verbatim code
[  ]  --- [  ]
    +====+
```

## ref{#ref-label}

测试 ref, 在标题上加一个 `{#ref-label}` 就能在生成的latex 里面加 label 了.

这个来 [link 到本页](#ref-label), 

`\autoref` results in this \autoref{ref-label}.
`\ref` results in this \ref{ref-label}.

还能 include 文件, 见  \ref{include} 节.

## include

\input{ssec01}


