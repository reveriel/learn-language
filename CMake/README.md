# CMake

CMake, build 工具的 build.
可以用这个来生成 Makefile.

use `man cmake-**` to read manual.

最基础的命令:

```
add_executable(myexe s1.c s2.c)
```

`s1.c` `s2.c` 编译生成 myexe 可执行文件.

```
target_include_directories(myexe
   <PRIVATE|PUBLIC|INTERFACE> include)
```
相当于  `-I`.
至于 PRIVATE, PUBLIC, INTERFACE, 先不管了, 随便选一个也行.

```
include_directories(dir1 [dir2 ...])
```
这个也行.



