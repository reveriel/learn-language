# CMake

CMake, build 工具的 build.
可以用这个来生成 Makefile.

use `man cmake-**` to read manual.

最基础的命令:

``` cmake
add_executable(myexe s1.c s2.c)
```

`s1.c` `s2.c` 编译生成 myexe 可执行文件.

``` cmake
target_include_directories(myexe
   <PRIVATE|PUBLIC|INTERFACE> include)
```
相当于  `-I`.
至于 PRIVATE, PUBLIC, INTERFACE, 先不管了, 随便选一个也行.

``` cmake
include_directories(dir1 [dir2 ...])
```
这个也行.

加上 `CFLAGS`

``` cmake
set(CMAKE_C_FLAGS "${CMAKE_C_FLAGS} -O0 -ggdb")
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -O0 -ggdb")
```

打印变量的值. 这些是在执行 cmake 时打印, 不是 make 时.

``` cmake
message([<mode>] "message to display" ...)
# (none)         = Important information
# STATUS         = Incidental information
# WARNING        = CMake Warning, continue processing
# AUTHOR_WARNING = CMake Warning (dev), continue processing
# SEND_ERROR     = CMake Error, continue processing, but skip generation
# FATAL_ERROR    = CMake Error, stop processing and generation
# DEPRECATION    = CMake Deprecation Error or Warning if variable CMAKE_ERROR_DEPRECATED or
#                  CMAKE_WARN_DEPRECATED is enabled, respectively, else no message.
```







