import{_ as s,o as a,c as n,V as l}from"./chunks/framework.7cbf217e.js";const A=JSON.parse('{"title":"简化对象和函数写法(重点)","description":"","frontmatter":{},"headers":[],"relativePath":"front-end/JavaScript/07-ES6~ES11/ES6/06-简化对象和函数写法（重点）.md","filePath":"front-end/JavaScript/07-ES6~ES11/ES6/06-简化对象和函数写法（重点）.md","lastUpdated":1683117492000}'),p={name:"front-end/JavaScript/07-ES6~ES11/ES6/06-简化对象和函数写法（重点）.md"},o=l(`<h1 id="简化对象和函数写法-重点" tabindex="-1">简化对象和函数写法(重点) <a class="header-anchor" href="#简化对象和函数写法-重点" aria-label="Permalink to &quot;简化对象和函数写法(重点)&quot;">​</a></h1><h2 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h2><p>ES6允许在大括号里面,直接写入变量和函数,作为对象的属性和方法,这样书写更加简洁</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#A6ACCD;">DOCTYPE html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">charset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">utf-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">简化对象写法</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">// ES6允许在对象的大括号内直接写入变量和函数作为对象的属性和方法</span></span>
<span class="line"><span style="color:#A6ACCD;">// 变量和函数</span></span>
<span class="line"><span style="color:#A6ACCD;">let name = &quot;訾博&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">let change = function()</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">活着就是为了改变世界！</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">//创建对象</span></span>
<span class="line"><span style="color:#A6ACCD;">const school = </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 完整写法</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// name:name,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// change:change</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 简化写法</span></span>
<span class="line"><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">change</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 声明方法的简化</span></span>
<span class="line"><span style="color:#82AAFF;">say</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">言行一致！</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">);</span></span>
<span class="line"><span style="color:#F07178;">}</span></span>
<span class="line"><span style="color:#F07178;">}</span></span>
<span class="line"><span style="color:#F07178;">school.change();</span></span>
<span class="line"><span style="color:#F07178;">school.say();</span></span>
<span class="line"><span style="color:#F07178;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#F07178;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#F07178;">&lt;/html&gt;</span></span></code></pre></div>`,4),t=[o];function e(c,r,F,y,D,i){return a(),n("div",null,t)}const C=s(p,[["render",e]]);export{A as __pageData,C as default};
