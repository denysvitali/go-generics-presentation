---
theme: ./theme
background: ./pictures/bg-initial.jpg
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
title: Introduction To Go Generics
---

# Introduction to Go Generics

Denys Vitali - Data, Analytics & AI Engineer @ Swisscom
---
layout: image-right
background-size: contain
image: ./pictures/denysvitali-gh.png
---
# About Me

- Denys Vitali

- ❤️ Open Source

- Favorites Languages

  - Go
  - Rust

- Twitter: @DenysVitali

---
layout: image-right-small
background-size: contain
image: ./pictures/denysvitali-swisscom-go.png
---
# About Me @ Swisscom

- Data, Analytics & AI Engineer

- Mostly doing DevOps stuff

- I write lots of CLIs

- Lots of contributions to Open Source, whenever possible

- Lots of Go

---
layout: image-right-small
image: ./pictures/rotterdam-wtc.jpg
---

# About Swisscom

- 🇨🇭 Major Telecommunications Provider
- 👨‍💼 18k+ employees
- 📍 Multiple locations across Switzerland
  - Zurich, Bern, Basel, Lausanne, Bellinzona, ...
- 🌍 Multiple locations outside of Switzerland
  - 🇱🇻 DevOps Center - Riga, Latvia
  - 🇳🇱 DevOps Center - Rotterdam, Netherlands
  - 🇺🇸 Swisscom Outpost - California, USA
  - 🇨🇳 Swisscom Outpost - Shangai, China

---
layout: image-right-small
image: ./pictures/swisscom-building-har3.jpg
---


# We're hiring

- Innovative company

- Flexbile working

- Attractive Fringe Benefits

- Education Budget

But most importantly:

- _We're also looking for Go Software Engineers!_

<img 
  src="/pictures/swisscom-work.svg" 
  width="200"
  style="margin-left: auto; margin-right: auto;"  
/>

<p style="text-align: center">
  <a href="https://swisscom.ch/jobs">https://swisscom.ch/jobs</a>
</p>


---
layout: cover
background: ./pictures/pizza.jpg
---

# Thank you Swisscom!

📍 Location, 🍺 Drinks and 🍕 Pizzas are on us! Enjoy!

---
layout: fact
background: ./pictures/go-generics-background.jpg
---

# Generics in Go

---
layout: small-title
---

# Why are we talking about generics?

<img class="main-image" src="/pictures/go-generics-survey.png"/>

<style>
  img.main-image {
    max-height: 350px;
    margin-top: 2em;
    margin-left: auto;
    margin-right: auto;
  }
</style>

<p style="text-align: center; font-size: 0.8rem;">
  Source: Go Developer Survey 2020 Results
</p>

---
layout: small-title
---

# Why are we talking about generics? (2)

<div class="tweet-container">
  <Twitter tweetUrl="https://twitter.com/golang/status/1503787326060875782"/>
</div>


<style>
  div.tweet-container{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 400px;
    height: 450px;
    overflow: hidden;
  }
</style>

---
layout: small-title
---

# Why are we talking about generics? (3)

<img class="main-image" src="/pictures/release-notes-1-18.jpg"/>

<style>
  img.main-image {
    max-height: 600px;
    margin-top: 0;
    z-index: 0;
    margin-left: auto;
    margin-right: auto;
  }
</style>


---
layout: cover
background: https://i0.wp.com/comicsandmemes.com/wp-content/uploads/blank-meme-template-045-shocked-kevin-hart.jpg
---

# Wait a second...

<h3 v-click>... what the hell are generics?</h3>


---
layout: quote
---

# Generics

> Generics are abstract stand-ins for concrete types or other properties. 
> When we’re writing code, we can express the behavior of generics or how they relate to other 
> generics without knowing what will be in their place when compiling and running the code.

\- [The Rust Programming Language](https://doc.rust-lang.org/book/ch10-00-generics.html#generic-types-traits-and-lifetimes)


---
layout: cover
background: https://media3.giphy.com/media/xL7PDV9frcudO/giphy.gif?cid=790b76113d54f78832fb25dbf8ad312c01c147b35b17abac&rid=giphy.gif&ct=g
dim: false
---

---
layout: default
---

# Generics in Java

```java
List<String> l = new ArrayList<String>();
l.add("Hello :)");
```
<br/>

```java
/**
 * Generic version of the Box class.
 * @param <T> the type of the value being boxed
 */
public class Box<T> {
    // T stands for "Type"
    private T t;

    public void set(T t) { this.t = t; }
    public T get() { return t; }
}

```
<small>From <a href="https://docs.oracle.com/javase/tutorial/java/generics/types.html">Generic Types - Java Documentation</a></small>


---
layout: default
---

# Generics in Rust

```rust
fn largest<T>(list: &[T]) -> T {
    let mut largest = list[0];
    for &item in list {
        if item > largest {
            largest = item;
        }
    }
    largest
}
fn main() {
    let number_list = vec![34, 50, 25, 100, 65];
    let result = largest(&number_list);
    println!("The largest number is {}", result);

    let char_list = vec!['y', 'm', 'a', 'q'];
    let result = largest(&char_list);
    println!("The largest char is {}", result);
}
```
<small>From <a href="https://doc.rust-lang.org/book/ch10-01-syntax.html">Generics - The Rust Programming Language</a></small>


---
layout: default
---

# Generics in Javascript

```javascript
  
  
```

---
layout: default
---

# ~~Generics~~ Templates in C++

```cpp
#include <iostream>  
using namespace std;  
template<class T> T add(T &i,T &j)  
{  
  T res = i+j;  
  return res;
}  
int main()  
{  
  int x =2;  
  int y =3;  
  cout<<"The value of the addition of is: "<<add(x,y);  
  return 0;  
}
```

<small><a href="https://techvidvan.com/tutorials/cpp-templates/">C++ Templates - TechVidvan</a></small>


---
layout: default
---

# What do they all have in common?

```java
public class Box<T> {}
```

```rust
fn example<T>(list: &[T]) {}
```

```cpp
template<class T> void example(T &i,T &j) {}
```

---
layout: default
---

# Generics in Go

Well, sorry, Go uses `[]`

```go
type Tree[T any] struct {
	left, right *Tree[T]
	value       T
}

func (t *Tree[T]) Lookup(x T) *Tree[T] {
	// TODO: Write a meaningful implementation
	panic("not implemented")
}
```

---
layout: small-title
---

# Why do you need generics?

<br/>

You need to use generics only in a few cases, such as:

- Code deduplication

- Function generalization

---
layout: cover
background: https://techbit.pt/wp-content/uploads/2020/05/linus-torvalds-amd-1024x577.jpg
---

# "Talk is cheap, show me the code"

---
layout: code-slide
---

# Life Before Generics

<ReplitEditor :path="'@denysvitali/go-generics-example-1'" :file="'main.go'" />

---
layout: code-slide
---

# Life After Generics

<ReplitEditor :path="'@denysvitali/go-generics-example-2'" :file="'main.go'" />


---
layout: small-title
---

# When should I use generics?

<br/>

Honestly? Almost never.
<br/>
<br/>

<div style="margin-left: 1em; margin-right: 1em; margin-top: 2em;">

> Start writing the code without generics, then add them where needed

_\- Denys Vitali @ Gophers Zürich_

</div>

<div v-click style="margin-top: 4em">
  Seriously though, don't start writing generics unless you know for sure you'll need them
</div>


---
layout: small-title-center
slideTitle: Generics Syntax in Go 
---

```go
func example[T int | float](v T) {
  fmt.Printf("%v", v)
}
```

<div style="height: 2em;"></div>

```go
type MyCustomNumber interface {
  float64 | float32 | int32
}

func example2[T MyCustomNumber](v T) {
  fmt.Printf("%v", v)
}
```

---
layout: small-title-center
slideTitle: <code>[T any]</code>
---

```go
func x[T any](v T) {
  // TODO: Complete this function 
}
```

is exactly the same as:

```go
func x[T interface{}](v T) {
  // TODO: Complete this function 
}
```

---
layout: small-title-center
slideTitle: Proof that <code>any == interface{}</code>
---

```go
// From: /usr/lib/go/src/builtin/builtin.go (go 1.18)

// any is an alias for interface{} and is equivalent to interface{} in all ways.
type any = interface{}
```


---
layout: small-title-center
slideTitle: <code>[T comparable]</code>
---

```go
func IsEqual[T comparable](a, b T) bool {
    return a == b
}
```

```go
func TestIsEqual(t *testing.T) {
	assert.True(t, IsEqual(1, 1))
	assert.False(t, IsEqual(1, 2))
	assert.True(t, IsEqual("a", "a"))
	assert.False(t, IsEqual("a", "b"))

	// Compile error:
	// assert.False(t, IsEqual("a", 5))
}
```

---
layout: small-title-center
slideTitle: <code>comparable</code>
---

```go
// comparable is an interface that is implemented by all comparable types
// (booleans, numbers, strings, pointers, channels, arrays of comparable types,
// structs whose fields are all comparable types).
// The comparable interface may only be used as a type parameter constraint,
// not as the type of a variable.
type comparable interface{ comparable }
```

---
layout: small-title-center
slideTitle: <code>comparable</code> (2)
---

```go
func TestIsEqual(t *testing.T) {
  // Compile error:
  IsEqual(map[string]string{}, map[string]string{})
}
```

```shell
# go-generics-examples/examples/1-introduction [go-generics-examples/examples/1-introduction.test]
./example1_test.go:16:9: map[string]string does not implement comparable
```

---
layout: small-title-center
slideTitle: Do not 100% trust your IDE (yet!)
---

<img src="/pictures/comparable-maps.png"/>

---
layout: small-title-center
slideTitle: <code>~T</code>
---

### Approximation constraint element
> Listing a single type is useless by itself. For constraint satisfaction, we want to be able to say not just `int`, but “any type whose underlying type is int.
> <br/>
> To support this (...) we permit (...) a new syntactic construct: an approximation element, written as `~T`.  
> <br/>
> The type set of `~T` is the set of all types whose underlying type is `T`.
> 
> This new `~T` syntax will be the first use of `~` as a token in Go.

<small style="margin-top: 1em">
  <a href="https://go.googlesource.com/proposal/+/refs/heads/master/design/43651-type-parameters.md#approximation-constraint-element">
    Type Parameters Proposal
  </a>  
</small>

---
layout: cover
background: https://media2.giphy.com/media/glmRyiSI3v5E4/giphy.gif?cid=ecf05e47d5f8rryf8soxik8r3g9cp6osimmq8sf80yexm8b2&rid=giphy.gif&ct=g
---

# What?

---
layout: small-title-center
slideTitle: <code>~T</code>, example
---

```go
type TastyString string

func AlmostString[T ~string](x T) string {
	return fmt.Sprintf("Hello there, %s", x)
}

func OnlyTrueStrings(x string) string {
	return fmt.Sprintf("we only accept pure strings: %s", x)
}
```

---
layout: default
---

# Go Playground Example

<div class="editor-background">
  <iframe 
    src="https://play.golang.com/p/HmnNoBf0p1z" 
    height="100%"
    width="100%"
  >
  </iframe>
</div>

<style>
  div.editor-background {
    height: 300px;
    width: 100%;
    background-color: #FFF;
  }
</style>

---

# Themes

Slidev comes with powerful theming support. Themes can provide styles, layouts, components, or even configurations for tools. Switching between themes by just **one edit** in your frontmatter:

<div grid="~ cols-2 gap-2" m="-t-2">

```yaml
---
theme: default
---
```

```yaml
---
theme: seriph
---
```

<img border="rounded" src="https://github.com/slidevjs/themes/blob/main/screenshots/theme-default/01.png?raw=true">

<img border="rounded" src="https://github.com/slidevjs/themes/blob/main/screenshots/theme-seriph/01.png?raw=true">

</div>

Read more about [How to use a theme](https://sli.dev/themes/use.html) and
check out the [Awesome Themes Gallery](https://sli.dev/themes/gallery.html).

---
preload: false
---

# Animations

Animations are powered by [@vueuse/motion](https://motion.vueuse.org/).

```html
<div
  v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 0 }">
  Slidev
</div>
```

<div class="w-60 relative mt-6">
  <div class="relative w-40 h-40">
    <img
      v-motion
      :initial="{ x: 800, y: -100, scale: 1.5, rotate: -50 }"
      :enter="final"
      class="absolute top-0 left-0 right-0 bottom-0"
      src="https://sli.dev/logo-square.png"
    />
    <img
      v-motion
      :initial="{ y: 500, x: -100, scale: 2 }"
      :enter="final"
      class="absolute top-0 left-0 right-0 bottom-0"
      src="https://sli.dev/logo-circle.png"
    />
    <img
      v-motion
      :initial="{ x: 600, y: 400, scale: 2, rotate: 100 }"
      :enter="final"
      class="absolute top-0 left-0 right-0 bottom-0"
      src="https://sli.dev/logo-triangle.png"
    />
  </div>

  <div
    class="text-5xl absolute top-14 left-40 text-[#2B90B6] -z-1"
    v-motion
    :initial="{ x: -80, opacity: 0}"
    :enter="{ x: 0, opacity: 1, transition: { delay: 2000, duration: 1000 } }">
    Slidev
  </div>
</div>

<!-- vue script setup scripts can be directly used in markdown, and will only affects current page -->
<script setup lang="ts">
const final = {
  x: 0,
  y: 0,
  rotate: 0,
  scale: 1,
  transition: {
    type: 'spring',
    damping: 10,
    stiffness: 20,
    mass: 2
  }
}
</script>

<div
  v-motion
  :initial="{ x:35, y: 40, opacity: 0}"
  :enter="{ y: 0, opacity: 1, transition: { delay: 3500 } }">

[Learn More](https://sli.dev/guide/animations.html#motion)

</div>

---

# LaTeX

LaTeX is supported out-of-box powered by [KaTeX](https://katex.org/).

<br>

Inline $\sqrt{3x-1}+(1+x)^2$

Block
$$
\begin{array}{c}

\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &
= \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\

\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\

\nabla \cdot \vec{\mathbf{B}} & = 0

\end{array}
$$

<br>

[Learn more](https://sli.dev/guide/syntax#latex)

---

# Diagrams

You can create diagrams / graphs from textual descriptions, directly in your Markdown.

<div class="grid grid-cols-3 gap-10 pt-4 -mb-6">

```mermaid {scale: 0.5}
sequenceDiagram
    Alice->John: Hello John, how are you?
    Note over Alice,John: A typical interaction
```

```mermaid {theme: 'neutral', scale: 0.8}
graph TD
B[Text] --> C{Decision}
C -->|One| D[Result 1]
C -->|Two| E[Result 2]
```

```plantuml {scale: 0.7}
@startuml

package "Some Group" {
  HTTP - [First Component]
  [Another Component]
}

node "Other Groups" {
  FTP - [Second Component]
  [First Component] --> FTP
}

cloud {
  [Example 1]
}


database "MySql" {
  folder "This is my folder" {
    [Folder 3]
  }
  frame "Foo" {
    [Frame 4]
  }
}


[Another Component] --> [Example 1]
[Example 1] --> [Folder 3]
[Folder 3] --> [Frame 4]

@enduml
```

</div>

[Learn More](https://sli.dev/guide/syntax.html#diagrams)


---
layout: center
class: text-center
---

# Learn More

[Documentations](https://sli.dev) · [GitHub](https://github.com/slidevjs/slidev) · [Showcases](https://sli.dev/showcases.html)
