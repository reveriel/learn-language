# GO

## install

[install](https://golang.org/doc/install)

I'd rather use `brew install go`

## go tool basics

go tool, the standard way to fetch, build, and install go packages!
> 好评! 官方工具

- compile `go build`
- install :`go install`
- uninstall `go clean -i`

- **workspace**, keep all go code in a single workspace ? = =
  - **repo**, many repo()
    - **packages**, one or more packages, library
    - **command**, executable
      - **src** one or more go source files

a workspace, has bin/ and src/,
> 奇怪..

``` txt
bin/
    hello                          # command executable
    outyet                         # command executable
src/
    github.com/golang/example/
        .git/                      # Git repository metadata
        hello/
            hello.go               # command source
        outyet/
            main.go                # command source
            main_test.go           # test source
        stringutil/
            reverse.go             # package source
            reverse_test.go        # test source
    golang.org/x/image/
        .git/                      # Git repository metadata
        bmp/
            reader.go              # package source
            writer.go              # package source
    ... (many more repositories and packages omitted) ...
```

default `GOPATH` is `$HOME/go`. This is your workspace, SO I have to
put my code there?? _ _

import paths.  its location inside a workspace or in a remote repository ,
Always unique!

``` go
package main // 表示你是一个 command

import "fmt"

func main() {
    fmt.Println("Hello, world.")
}
```

`go install github.com/user/hello` or `cd github.com/user/hello; go install`

``` go
// Package stringutil contains utility functions for working with strings.
package stringutil

// Reverse returns its argument string reversed rune-wise left to right.
func Reverse(s string) string {
    r := []rune(s)
    for i, j := 0, len(r)-1; i < len(r)/2; i, j = i+1, j-1 {
        r[i], r[j] = r[j], r[i]
    }
    return string(r)
}
```

`go build`

``` go
package main

import (
    "fmt"

    "github.com/user/stringutil" // import 最后的名字作为 package name
)

func main() {
    fmt.Println(stringutil.Reverse("!oG ,olleH"))
}
```

### Testing

write a test file ending `_test.go`, contains functions `TestXXX`
with signature `func (t *testing.T)`.
The test framework runs each such function; if the function calls a failure function such
as `t.Error` or `t.Fail`, the test is considered to have failed.
> 漂亮!

``` go
package stringutil

import "testing"

func TestReverse(t *testing.T) {
    cases := []struct {
        in, want string
    }{
        {"Hello, world", "dlrow ,olleH"},
        {"Hello, 世界", "界世 ,olleH"},
        {"", ""},
    }
    for _, c := range cases {
        got := Reverse(c.in)
        if got != c.want {
            t.Errorf("Reverse(%q) == %q, want %q", c.in, got, c.want)
        }
    }
}
```

`go test [import path]`

remote packages:

``` shell
go get -v github.com/golang/example/hello
```

没有 `https://`  也没有, `.git`, 执行之后没有进度条, 所以建议加个 `-v`

## language

[tour](tour.md)
