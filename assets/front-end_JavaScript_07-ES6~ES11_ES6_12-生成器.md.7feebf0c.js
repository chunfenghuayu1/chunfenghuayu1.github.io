import{_ as s,o as a,c as n,V as l}from"./chunks/framework.7cbf217e.js";const C=JSON.parse('{"title":"生成器","description":"","frontmatter":{},"headers":[],"relativePath":"front-end/JavaScript/07-ES6~ES11/ES6/12-生成器.md","filePath":"front-end/JavaScript/07-ES6~ES11/ES6/12-生成器.md","lastUpdated":1683117492000}'),o={name:"front-end/JavaScript/07-ES6~ES11/ES6/12-生成器.md"},p=l(`<h1 id="生成器" tabindex="-1">生成器 <a class="header-anchor" href="#生成器" aria-label="Permalink to &quot;生成器&quot;">​</a></h1><p>生成器函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">gen</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">yield</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">一只没有耳朵</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">yield</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">一只没有尾巴</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">真奇怪</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> iterator </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">gen</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(iterator</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">next</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(iterator</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">next</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(iterator</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">next</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>代码说明：</p><ol><li>*的位置没有限制</li><li>生成器函数返回的结果是迭代器对象，调用迭代器对象的 next 方法可以得到 yield 语句后的值</li><li>yield 相当于函数的暂停标记，也可以认为是函数的分隔符，每调用一次 next 方法，执行一段代码</li><li>next 方法可以传递实参，作为 yield 语句的返回值</li></ol>`,5),e=[p];function t(c,r,F,D,y,i){return a(),n("div",null,e)}const _=s(o,[["render",t]]);export{C as __pageData,_ as default};
