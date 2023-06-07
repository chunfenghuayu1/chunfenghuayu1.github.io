import{_ as s,o as a,c as n,V as l}from"./chunks/framework.7cbf217e.js";const C=JSON.parse('{"title":"作用域","description":"","frontmatter":{},"headers":[],"relativePath":"front-end/JavaScript/02-JavaScript函数与作用域/02-作用域.md","filePath":"front-end/JavaScript/02-JavaScript函数与作用域/02-作用域.md","lastUpdated":1683117492000}'),p={name:"front-end/JavaScript/02-JavaScript函数与作用域/02-作用域.md"},o=l(`<h1 id="作用域" tabindex="-1">作用域 <a class="header-anchor" href="#作用域" aria-label="Permalink to &quot;作用域&quot;">​</a></h1><h2 id="作用域-1" tabindex="-1">作用域 <a class="header-anchor" href="#作用域-1" aria-label="Permalink to &quot;作用域&quot;">​</a></h2><p>通常来说,一段代码程序中所用到的名字并不总是有效和可用的,而限定这个名字的<strong>可用性的代码范围</strong>就是这个名字的作用域.</p><p>作用域的使用提高了程序逻辑的局部性,增强了程序的可靠性,减少了名字冲突</p><h3 id="_1-全局作用域" tabindex="-1">1.全局作用域 <a class="header-anchor" href="#_1-全局作用域" aria-label="Permalink to &quot;1.全局作用域&quot;">​</a></h3><p>整个script标签或者是一个单独的js文件</p><h3 id="_2-局部作用域-函数作用域" tabindex="-1">2.局部作用域(函数作用域) <a class="header-anchor" href="#_2-局部作用域-函数作用域" aria-label="Permalink to &quot;2.局部作用域(函数作用域)&quot;">​</a></h3><p>在函数内部就是局部作用域,这个代码的名字只在函数内部起效果和作用</p><h2 id="变量的作用域" tabindex="-1">变量的作用域 <a class="header-anchor" href="#变量的作用域" aria-label="Permalink to &quot;变量的作用域&quot;">​</a></h2><h3 id="_1-全局变量" tabindex="-1">1.全局变量 <a class="header-anchor" href="#_1-全局变量" aria-label="Permalink to &quot;1.全局变量&quot;">​</a></h3><p>在全局作用域下的变量</p><p><strong>如果在函数内部没有声明直接赋值的变量也属于全局变量</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fun</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">num1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">num2</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">fun</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(num2)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//如果在函数内部没有声明直接赋值的变量也属于全局变量</span></span></code></pre></div><h3 id="_2-局部变量" tabindex="-1">2.局部变量 <a class="header-anchor" href="#_2-局部变量" aria-label="Permalink to &quot;2.局部变量&quot;">​</a></h3><p>在局部作用域下的变量 只能在函数内部使用</p><p><strong>函数的形参也可以看作是局部变量</strong></p><h3 id="_3-从执行效率来看全局变量和局部变量" tabindex="-1">3.从执行效率来看全局变量和局部变量 <a class="header-anchor" href="#_3-从执行效率来看全局变量和局部变量" aria-label="Permalink to &quot;3.从执行效率来看全局变量和局部变量&quot;">​</a></h3><p>1.全局变量只有在浏览器关闭的时候才会销毁,比较占内存资源</p><p>2.局部变量,当我们程序执行完毕就会销毁,会比较节约内存资源</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> num </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//全局变量</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fn</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">num</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">//全局变量在函数内部可以使用</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fun</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">aru</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#676E95;font-style:italic;">//形参属于函数内部的局部变量</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">num1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">//局部变量 只能在函数内部调用</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">num2</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">//全局变量 未声明的变量</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">fun</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(num1)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//无法调用 局部变量</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(num2)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//全局可以使用 全局变量</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(aru)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//无法使用 局部变量</span></span></code></pre></div><h3 id="_4-js现阶段没有块级作用域-es6新增" tabindex="-1">4.js现阶段没有块级作用域(ES6新增) <a class="header-anchor" href="#_4-js现阶段没有块级作用域-es6新增" aria-label="Permalink to &quot;4.js现阶段没有块级作用域(ES6新增)&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//块级作用域 外面不能调用</span></span>
<span class="line"><span style="color:#A6ACCD;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">if{}</span></span>
<span class="line"><span style="color:#A6ACCD;">for{}</span></span></code></pre></div><h2 id="作用域链" tabindex="-1">作用域链 <a class="header-anchor" href="#作用域链" aria-label="Permalink to &quot;作用域链&quot;">​</a></h2><p>只要有代码,就有一个作用域</p><p>写在函数内部叫做局部作用域</p><p>如果函数中还有函数,那么在这个作用域里面会新增一个作用域</p><p>根据内部函数可以访问外部函数变量的这种机制,用链式查找决定哪些数据能被内部函数访问,就称作作用域链</p><blockquote><p><strong>就近原则</strong></p></blockquote>`,28),e=[o];function t(c,r,i,y,F,D){return a(),n("div",null,e)}const h=s(p,[["render",t]]);export{C as __pageData,h as default};
