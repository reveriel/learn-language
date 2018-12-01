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
high order function: 

``` go
func compute(fn func(float64, float64) float64) float64 {
    return fn(3, 4);
}
func main() {
    hypot:= func(x, y float64) float64 {
        return math.Sqrt(x*x + y*y)
    }
    compute(hypot);
}
```

and, of course: Function closures

``` go
func adder() func(int) int {
	sum := 0
	return func(x int) int {
		sum += x
		return sum
	}
}
```

Go does not have classes. but has **methods**.
A method is a function with a special receiver argument.
The receiver appears in its own argument list between the func keyword and the method name.

``` go
// 多了一个括号, 里面放 receiver 参数
func (v Vertex) Abs() float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}
v.Abs()

// receiver 必须是同一个 package 里面的.
type MyFloat float64

func (f MyFloat) Abs() float64 {
	if f < 0 {
		return float64(-f)
	}
	return float64(f)
}<Paste>
```
这样可以在代码的任何地方给一个类型加函数了(并不, 同一文件)... 也没什么不好.
本来 class 把数据和方法放在一起也没什么必要. 只是调用和一个类型相关的函数时 方便一些, 可以用 obj.func() 这种语法.

Methods with pointer receivers can modify the value to which the receiver points.
一般 receiver 是指针了类型.

``` go
var v Vertex
v.Scale(5)
p := &v
p.Scale(10)
```

不管是 v 还是 p, 自动调用 pointer 的那个. 问题,  receiver 是不是指针决定了是
传值还是传引用调用.


**Interfaces!**

An interface type is defined as a set of method signatures.
A value of interface type can hold any value that implements those methods.

``` go
type Abser interface {
    Abs() float64
}
```

A type implements an interface by implementing its methods. There is no explicit
declaration of intent, no "implements" keyword. 实现了那个interface 你就是那个类型,
但是也失去了一些检查和限制.

Interface values 如果是 nil 也没问题, 不会出现deref 空指针.

**Empty interfaces** `interface{}` are used by code that handles values of unknown type

**Type assertions**,  downcast.

``` go
t := i.(T) // 失败会 panic!
t, ok := i.(T)
// If i holds a T, then t will be the underlying value and ok will be true.
// If not, ok will be false and t will be the zero value of type T, and no panic occurs.
```

**Type switches**, 超便利じゃん

``` go
switch v := i.(type) {
	case T:
    // here v has type T
    case S:
	// here v has type S
	default:
    // no match; here v has the same type as i
}
```

特殊的 Stringers . 实现了这个就能 print 了.

``` go
type Stringer interface {
    String() string
}
```

这种 convention, 函数返回一个  `error`. bananice!

``` go
type error interface {
	Error() string
}

i, err := strconv.Atoi("42")
if err != nil {
    fmt.Printf("couldn't convert number: %v\n", err)
    return
}
fmt.Println("Converted integer:", i)
// 返回一个 error, 感觉这种设计能够使处理错误的代码简化好多
func Sqrt(x float64) (float64, error) {
    return 0, nil

}
```

Readers interface.
``` go
func (T) Read(b []byte) (n int, err error)

func main() {
    r := strings.NewReader("Hello, Reader!")

	b := make([]byte, 8)
	for {
		n, err := r.Read(b)
		fmt.Printf("n = %v err = %v b = %v\n", n, err, b)
		fmt.Printf("b[:n] = %q\n", b[:n])
		if err == io.EOF {
			break
		}
	}
}
```

Goroutines, A goroutine is a lightweight thread managed by the Go runtime.
语言里面的线程.

``` go
go f(x,y,z)
```

Channels. Channels are a typed conduit through which you can send and receive values with
the channel operator, `<-`.
语言里面的 pipe..

``` go
ch := make(chan int)
ch <- v
v := <-ch
```

``` go
func sum(s []int, c chan int) {
    sum := 0
    for _, v := range s {
		sum += v
    }
	c <- sum // send sum to c
}

func main() {
    s := []int{7, 2, 8, -9, 4, 0}

	c := make(chan int)
	go sum(s[:len(s)/2], c)
	go sum(s[len(s)/2:], c)
	x, y := <-c, <-c // receive from c
	fmt.Println(x, y, x+y)
}
```

Ruffered channels : `ch := make(chan int, 100)`

A sender can close a channel to indicate that no more values will be sent

`v, ok := <-ch`

The loop `for i := range c` receives values from the channel repeatedly until it is closed.

**Select** !

The `select` statement lets a goroutine wait on multiple communication operations.
A `select` blocks until one of its cases can run, then it executes that case. It chooses one
at random if multiple are ready.

``` go
func fibonacci(c, quit chan int) {
    x, y := 0, 1
    for {
		select {
		case c <- x:
			x, y = y, x+y
		case <-quit:
			fmt.Println("quit")
			return
		default:
			// The default case in a select is run if no other case is ready.
		}
    }
}

func main() {
    c := make(chan int)
	quit := make(chan int)
	go func() {
	for i := 0; i < 10; i++ {
		fmt.Println(<-c)
	}
		quit <- 0
	}()
	fibonacci(c, quit)
}
```


`sync.Mutex` !

But what if we don't need communication? What if we just want to make sure only one
goroutine can access a variable at a time to avoid conflicts?
We can also use `defer` to ensure the mutex will be unlocked as in the Value method.

``` go
// SafeCounter is safe to use concurrently.
type SafeCounter struct {
    v   map[string]int
    mux sync.Mutex
}

// Inc increments the counter for the given key.
func (c *SafeCounter) Inc(key string) {
    c.mux.Lock()
    // Lock so only one goroutine at a time can access the map c.v.
    c.v[key]++
    c.mux.Unlock()
}
```



