# mScroll plug-in
ページ内リンクをスムーズスクロールにするためのjQueryプラグインです。

This is jQuery plug-in that it can modify inner link to smooth scroll link.


## デモ/Demo
http://hommaam.github.io/mScroll/


## 使用方法/How to use
jQuery本体の読み込み後、jquery.mScroll.jsを読み込みます。
スムーズスクロールをさせたい`<a>`要素に対し、`mScroll()`メソッドを使用することで、スムーズスクロールが適応されます。

`<a>`要素のhref属性にはリンク先のIDが指定されている必要があります。`<a>`要素のname属性によるリンクには対応していません。
href属性内のID名以前の文字列は無視されます。  
`<a>`要素のhref属性が`#`の場合は、ページトップへスムーズスクロールします。

また、メソッドではなくて関数`$.mScroll()`として機能させることもできます。  
その場合は第一引数にID名またはスクロール位置を数値で指定します。  
`$.mScroll(#section1);`  
`$.mScroll(1280);`


You load jquery.mScroll.js file, after loading jQuery library.
Apply `mScroll()` method for `<a>` element that it will have smooth scroll.

The href attribute of `<a>` element must be element ID. This plug-in does not correspond to link of name attribute.
The string before ID in href attribute is ignored.  
It have smooth scroll when the href attribute of `<a>` element match `#`.

In addition, you can use this plug-in not as method but as `$.mScroll()` function.  
Then you must specify element ID or number of scroll position as first argument.  
`$.mScroll(#section1);`  
`$.mScroll(1280);`

## サンプル/Sample


```
	<nav>
		<ul>
			<li><a href="#box1">SCROLL TO BOX1</a></li>
		</ul>
	</nav>

	<div id="box1">
		<p>BOX 1</p>
	</div>
```
