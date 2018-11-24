##  变量

exported names 

大写开头就 export .. 太骚了吧. 感觉好多东西都是靠约定.

类型和 C 刚好相反.
``` go
func add(x, y int) int {
	return x + y
}
```

```go
func swap(x, y string) (string, string) {
	return y, x
}

func main() {
	a, b := swap("hello", "world")
	fmt.Println(a, b)
}
```
注意 `:=`, 好像这样就不用 `var` 了, 这个只能在函数内使用.

named return values


``` go
func split(sum int) (x, y int) {
	x = sum * 4 / 9
	y = sum - x
	return
}
```

变量,  without an explicit initial value are given their zero value
``` go
var c, python, java bool
const Pi = 3.243
```

```
bool string
int   int8   int16 int32 int64
uint  uint8...                   uintptr
byte // alias for uint8
rune // alias for int32
      // unicode code point
float32 float64
complex64 complex128
```

类型转换, 类型推断

``` go
i := 42
f := float64(i)
```

## 控制

循环只有for 语句, () 不要, {} 必须.
``` go
sum := 0
for i := 0; i < 10; i++ {
	sum += i
}
for sum < 1000 {
        sum += sum
            
}
for {
}

if x < 0 {
} else {
}

if v := math.Pow(x, n); v < lim {
}


switch os := runtime.GOOS; os {
    case "darwin":
		fmt.Println("OS X.")
	case "linux":
		fmt.Println("Linux.")
	default:
		// freebsd, openbsd,
		// plan9, windows...
		fmt.Printf("%s.\n", os)
	}
// 省略条件 等价于 switch true
```

defer ! defers the execution of a funciton until the surrounding function
returns

Deferred function calls are pushed onto a stack. When a function returns, its deferred
calls are executed in last-in-first-out order.

read this [blog](https://blog.golang.org/defer-panic-and-recover)
这个真是 C 程序的一个痛点, 被错误恢复逻辑打断的正经代码...

## 

`*T`, `nil` `var p *int`, 有指针, 但是没有指针算术.  

``` go
i := 42
p := &i
q := *p
```

``` go
type Vertex	struct {
	X int
	Y int
}
v := Vertex{1,2}
v.X = 43
p := &v
p.X = 3
```
结构体指针不需要使用 `p->f`, 或者`(*p).f` 直接 `p.f`

``` go
var (
	v1 = Vertex{1, 2}  // has type Vertex
	v2 = Vertex{X: 1}  // Y:0 is implicit
	v3 = Vertex{}      // X:0 and Y:0
	p  = &Vertex{1, 2} // has type *Vertex
)
```
Arrays `[n]T`   `Println(a)` 可以直接打印数组..
支持 slices `a[low: high]`, [low, high), 不复制数据.

slices literal.
``` go
q := []int{2, 3, 5, 7, 11, 13}
s := []struct {
	i int
	b bool
}{
	{2, true},
	{3, false},
	{5, true},
	{7, true},
	{11, false},
	{13, true},
}
```

a slice has a length `len(s)` and a capacity `cap(s)`.
length 是长度, capacity 是底下的array 的长度, 从 slice 的第一个元素起.
加上 capacity. 就可以允许延长 slice.

make! 动态分配的数组.
``` go
a := make([]int, 5)  // len(a) 5
b := make([]int, 0, 6) // len(b)=0, cap(b)=5
b = b[:cap(b)] // len(b) = 5;
b = b[1:] // 缩短了就回不去了!
append(s, x, ,x,x,x, ) // 如果长度不够会自动分配.
```

range over a slice or map

``` go
for i, v := range pow {
        fmt.Printf("2**%d = %d\n", i, v)
}
for i := range pow { }
for _, v := range pow { }
```

map !

``` go
var m map[string]Vertex
m = make(map[string]Vertex)
m["Bell Labs"] = Vertex{
	40.68433, -74.39967,
}

// literals
var m = map[string]Vertex{
	"Bell Labs": Vertex{
			40.68433, -74.39967,
	},
	"Google": Vertex{
			37.42202, -122.08408,
	},
}

// omit 
var m = map[string]Vertex{
    "Bell Labs": {40.68433, -74.39967},
    "Google":    {37.42202, -122.08408},
}
```

``` go
m[key] = elem
elem = m[key]
deltete(m, key)
elem, ok = m[key]
```



