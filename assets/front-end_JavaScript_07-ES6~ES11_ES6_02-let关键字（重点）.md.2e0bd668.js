import{_ as s,o as a,c as n,V as l}from"./chunks/framework.7cbf217e.js";const A=JSON.parse('{"title":"let关键字(重点)","description":"","frontmatter":{},"headers":[],"relativePath":"front-end/JavaScript/07-ES6~ES11/ES6/02-let关键字（重点）.md","filePath":"front-end/JavaScript/07-ES6~ES11/ES6/02-let关键字（重点）.md","lastUpdated":1683117492000}'),p={name:"front-end/JavaScript/07-ES6~ES11/ES6/02-let关键字（重点）.md"},o=l(`<h1 id="let关键字-重点" tabindex="-1">let关键字(重点) <a class="header-anchor" href="#let关键字-重点" aria-label="Permalink to &quot;let关键字(重点)&quot;">​</a></h1><h2 id="特性" tabindex="-1">特性 <a class="header-anchor" href="#特性" aria-label="Permalink to &quot;特性&quot;">​</a></h2><p>let关键字用来声明变量，使用let声明的变量有几个特点：</p><ol><li>不允许重复声明</li><li>块级作用域(局部变量)</li><li>不存在变量提升</li><li>不影响作用域链</li></ol><h2 id="let创建变量代码示例" tabindex="-1">let创建变量代码示例 <a class="header-anchor" href="#let创建变量代码示例" aria-label="Permalink to &quot;let创建变量代码示例&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// let关键字使用示例：</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 单个声明</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">c</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">d</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 批量声明</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> e </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 单个声明并赋值</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> f </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">521</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> g </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">iloveyou</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> h </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> []</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 批量声明并赋值</span></span></code></pre></div><h2 id="不允许重复声明" tabindex="-1">不允许重复声明 <a class="header-anchor" href="#不允许重复声明" aria-label="Permalink to &quot;不允许重复声明&quot;">​</a></h2><p>代码实现:</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 1. 不允许重复声明；</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> dog </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">狗</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> dog </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">狗</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 报错：Uncaught SyntaxError: Identifier &#39;dog&#39; has already been</span></span>
<span class="line"><span style="color:#A6ACCD;">declared</span></span></code></pre></div><h2 id="块级作用域-局部变量" tabindex="-1">块级作用域(局部变量) <a class="header-anchor" href="#块级作用域-局部变量" aria-label="Permalink to &quot;块级作用域(局部变量)&quot;">​</a></h2><p>代码实现:</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 2. 块儿级作用域（局部变量）；</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cat</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">猫</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">cat</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(cat)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 报错：Uncaught ReferenceError: cat is not defined</span></span></code></pre></div><h2 id="不存在变量提升" tabindex="-1">不存在变量提升 <a class="header-anchor" href="#不存在变量提升" aria-label="Permalink to &quot;不存在变量提升&quot;">​</a></h2><h3 id="什么是变量提升" tabindex="-1">什么是变量提升 <a class="header-anchor" href="#什么是变量提升" aria-label="Permalink to &quot;什么是变量提升&quot;">​</a></h3><p>就是在变量创建之前使用(比如输出:输出的是默认值),let不存在,var存在</p><p>代码实现:</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 3. 不存在变量提升；</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 什么是变量提升：就是在变量创建之前使用（比如输出：输出的是默认值），let不存在，var存在；</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(people1)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 可输出默认值</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(people2)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 报错：Uncaught ReferenceError: people2 is not defined</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> people1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">大哥</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 存在变量提升</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> people2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">二哥</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 不存在变量提升</span></span></code></pre></div><h2 id="不影响作用域链" tabindex="-1">不影响作用域链 <a class="header-anchor" href="#不影响作用域链" aria-label="Permalink to &quot;不影响作用域链&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 4. 不影响作用域链；</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 什么是作用域链：很简单，就是代码块内有代码块，跟常规编程语言一样，上级代码块中的局部变量下级可用</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">p</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">大哥</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">fn</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">p</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 这里是可以使用的</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">fn</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="let案例-点击div更改颜色" tabindex="-1">let案例:点击div更改颜色 <a class="header-anchor" href="#let案例-点击div更改颜色" aria-label="Permalink to &quot;let案例:点击div更改颜色&quot;">​</a></h2><p>代码实现:</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#A6ACCD;">DOCTYPE html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">en</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">charset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UTF-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">viewport</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">width=device-width, initial-scale=1.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">let案例：点击div更改颜色</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">link</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">crossorigin</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">anonymous</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://cdn.bootcss.com/twitterbootstrap/3.3.7/css/bootstrap.min.css</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">rel</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">stylesheet</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        .item </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            width: 100px;</span></span>
<span class="line"><span style="color:#A6ACCD;">            height: 50px;</span></span>
<span class="line"><span style="color:#A6ACCD;">            border: solid 1px </span><span style="color:#82AAFF;">rgb</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">42</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">156</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">156</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            float: left;</span></span>
<span class="line"><span style="color:#A6ACCD;">            margin</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">right: 10px;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">container</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h2</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">page-header</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">let案例：点击div更改颜色</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h2</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 获取div元素对象</span></span>
<span class="line"><span style="color:#A6ACCD;">        let items = document.getElementsByClassName(&#39;item&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 遍历并绑定事件</span></span>
<span class="line"><span style="color:#A6ACCD;">        for (let i = 0; i &lt; items.length; i++) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            items[i]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onclick</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;font-style:italic;">// 修改当前元素的背景颜色</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;font-style:italic;">// this.style.background = &#39;pink&#39;; // 写法一：常规写法一般无异常</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">items</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">style</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">background</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pink</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 写法二</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;font-style:italic;">// 写法二：需要注意的是for循环内的i必须使用let声明</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;font-style:italic;">// 如果使用var就会报错，因为var是全局变量，</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;font-style:italic;">// 经过循环之后i的值会变成3，items[i]就会下标越界</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;font-style:italic;">// let是局部变量</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;font-style:italic;">// 我们要明白的是当我们点击的时候，这个i是哪个值</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;font-style:italic;">// 使用var相当于是：</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;font-style:italic;">// { var i = 0; }</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;font-style:italic;">// { var i = 1; }</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;font-style:italic;">// { var i = 2; }</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;font-style:italic;">// { var i = 3; }</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;font-style:italic;">// 下面的声明会将上面的覆盖掉，所以点击事件每次找到的都是3</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;font-style:italic;">// 而使用let相当于是：</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;font-style:italic;">// { let i = 0; }</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;font-style:italic;">// { let i = 1; }</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;font-style:italic;">// { let i = 2; }</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;font-style:italic;">// { let i = 3; }</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;font-style:italic;">// 由于let声明的是局部变量，每一个保持着原来的值</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;font-style:italic;">// 点击事件调用的时候拿到的是对应的i</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>`,22),t=[o];function e(c,r,D,y,F,i){return a(),n("div",null,t)}const d=s(p,[["render",e]]);export{A as __pageData,d as default};
