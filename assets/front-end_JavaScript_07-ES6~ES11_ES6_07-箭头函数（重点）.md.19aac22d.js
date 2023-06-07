import{_ as s,o as n,c as a,V as l}from"./chunks/framework.7cbf217e.js";const A=JSON.parse('{"title":"箭头函数(重点)","description":"","frontmatter":{},"headers":[],"relativePath":"front-end/JavaScript/07-ES6~ES11/ES6/07-箭头函数（重点）.md","filePath":"front-end/JavaScript/07-ES6~ES11/ES6/07-箭头函数（重点）.md","lastUpdated":1683117492000}'),p={name:"front-end/JavaScript/07-ES6~ES11/ES6/07-箭头函数（重点）.md"},o=l(`<h1 id="箭头函数-重点" tabindex="-1">箭头函数(重点) <a class="header-anchor" href="#箭头函数-重点" aria-label="Permalink to &quot;箭头函数(重点)&quot;">​</a></h1><h2 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h2><p>ES6允许使用箭头(=&gt;)定义函数,箭头函数提供了一种更加简介的函数书写方式,箭头函数多用于匿名函数的定义</p><h2 id="箭头函数的注意点" tabindex="-1">箭头函数的注意点 <a class="header-anchor" href="#箭头函数的注意点" aria-label="Permalink to &quot;箭头函数的注意点&quot;">​</a></h2><ol><li>如果形参只有一个,则小括号可以省略</li><li>函数体如果只有一条语句,则花括号可以省略,函数的返回值为该条语句的执行结果;</li><li>箭头函数this指向声明时所在作用域下this值</li><li>箭头函数不能作为构造函数实例化</li><li>不能使用arguments</li></ol><h2 id="特性" tabindex="-1">特性 <a class="header-anchor" href="#特性" aria-label="Permalink to &quot;特性&quot;">​</a></h2><ol><li>箭头函数的this是静态的,始终指向函数声明时所在作用域下的this值</li><li>不能作为构造实例化对象</li><li>不能使用arguments变量</li></ol><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#A6ACCD;">DOCTYPE html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">charset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">utf-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">箭头函数</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">// ES6允许使用箭头（=&gt;）定义函数</span></span>
<span class="line"><span style="color:#A6ACCD;">// 传统写法：无参数</span></span>
<span class="line"><span style="color:#A6ACCD;">var say = function()</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello！</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">say();</span></span>
<span class="line"><span style="color:#A6ACCD;">// ES写法2：无参数</span></span>
<span class="line"><span style="color:#A6ACCD;">let speak = () =&gt; console.log(&quot;hello 哈哈！&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">speak();</span></span>
<span class="line"><span style="color:#A6ACCD;">// 传统写法：一个参数</span></span>
<span class="line"><span style="color:#A6ACCD;">var hello = function(name)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">return </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> name;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(hello(&quot;訾博&quot;));</span></span>
<span class="line"><span style="color:#A6ACCD;">// ES6箭头函数：一个参数</span></span>
<span class="line"><span style="color:#A6ACCD;">let hi = name =&gt; &quot;hi &quot; + name;</span></span>
<span class="line"><span style="color:#A6ACCD;">运行结果：</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(hi(&quot;訾博&quot;));</span></span>
<span class="line"><span style="color:#A6ACCD;">// 传统写法：多个参数</span></span>
<span class="line"><span style="color:#A6ACCD;">var sum = function(a,b,c)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">return a </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> c;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(sum(1,2,3));</span></span>
<span class="line"><span style="color:#A6ACCD;">// ES6箭头函数：多个参数</span></span>
<span class="line"><span style="color:#A6ACCD;">let he = (a,b,c) =&gt; a + b + c;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(he(1,2,3));</span></span>
<span class="line"><span style="color:#A6ACCD;">// 特性</span></span>
<span class="line"><span style="color:#A6ACCD;">// 1、箭头函数的this是静态的，始终指向函数声明时所在作用域下的this的值</span></span>
<span class="line"><span style="color:#A6ACCD;">const school = </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">name : </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">大哥</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// 传统函数</span></span>
<span class="line"><span style="color:#A6ACCD;">function getName()</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">getName：</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// 箭头函数</span></span>
<span class="line"><span style="color:#A6ACCD;">getName1 = () =&gt; console.log(&quot;getName1：&quot; + this.name);</span></span>
<span class="line"><span style="color:#A6ACCD;">window.name = &quot;訾博&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 直接调用</span></span>
<span class="line"><span style="color:#A6ACCD;">getName();</span></span>
<span class="line"><span style="color:#A6ACCD;">getName1();</span></span>
<span class="line"><span style="color:#A6ACCD;">// 使用call调用</span></span>
<span class="line"><span style="color:#A6ACCD;">getName.call(school);</span></span>
<span class="line"><span style="color:#A6ACCD;">getName1.call(school);</span></span>
<span class="line"><span style="color:#A6ACCD;">// 结论：箭头函数的this是静态的，始终指向函数声明时所在作用域下的this的值</span></span>
<span class="line"><span style="color:#A6ACCD;">// 2、不能作为构造实例化对象</span></span>
<span class="line"><span style="color:#A6ACCD;">// let Persion = (name,age) =&gt; </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// this.name = name;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// this.age = age;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// let me = new Persion(&quot;訾博&quot;,24);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(me);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 报错：Uncaught TypeError: Persion is not a constructor</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 3、不能使用 arguments 变量</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// let fn = () =&gt; console.log(arguments);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// fn(1,2,3);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 报错：Uncaught ReferenceError: arguments is not defined</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">html</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="从数组中返回偶数的元素" tabindex="-1">从数组中返回偶数的元素 <a class="header-anchor" href="#从数组中返回偶数的元素" aria-label="Permalink to &quot;从数组中返回偶数的元素&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#A6ACCD;">DOCTYPE html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">charset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">utf-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">箭头函数的实践和应用场景</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">div </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">width: 200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">height: 200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">background: #58a;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ad</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 需求-1 点击 div 2s 后颜色变成『粉色』</span></span>
<span class="line"><span style="color:#A6ACCD;">// 获取元素</span></span>
<span class="line"><span style="color:#A6ACCD;">let ad = document.getElementById(&#39;ad&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">// 绑定事件：这也是错误写法，这里的this还是window</span></span>
<span class="line"><span style="color:#A6ACCD;">// ad.addEventListener(&quot;click&quot;, () =&gt; </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// // ES6写法</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// // 定时器：参数1：回调函数；参数2：时间；</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// setTimeout(() =&gt; this.style.background = &#39;pink&#39;,2000);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// )</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 绑定事件</span></span>
<span class="line"><span style="color:#A6ACCD;">ad</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">click</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// ES6写法</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 定时器：参数1：回调函数；参数2：时间；</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 这个this才是ad</span></span>
<span class="line"><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">style</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">background</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pink</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2000</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//需求-2 从数组中返回偶数的元素</span></span>
<span class="line"><span style="color:#A6ACCD;">const arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">25</span><span style="color:#A6ACCD;">];</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// const result = arr.filter(function(item){</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// if(item % 2 === 0){</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// return true;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }else{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// return false;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// });</span></span>
<span class="line"><span style="color:#A6ACCD;">const result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">filter</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;font-style:italic;">item</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> item </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(result);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 箭头函数适合与 this 无关的回调. 定时器, 数组的方法回调</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 箭头函数不适合与 this 有关的回调. 事件回调, 对象的方法</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">html</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>`,10),t=[o];function e(c,r,D,y,i,F){return n(),a("div",null,t)}const h=s(p,[["render",e]]);export{A as __pageData,h as default};
