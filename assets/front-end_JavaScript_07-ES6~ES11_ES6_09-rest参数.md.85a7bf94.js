import{_ as s,o as a,c as n,V as l}from"./chunks/framework.7cbf217e.js";const u=JSON.parse('{"title":"rest参数","description":"","frontmatter":{},"headers":[],"relativePath":"front-end/JavaScript/07-ES6~ES11/ES6/09-rest参数.md","filePath":"front-end/JavaScript/07-ES6~ES11/ES6/09-rest参数.md","lastUpdated":1683117492000}'),t={name:"front-end/JavaScript/07-ES6~ES11/ES6/09-rest参数.md"},p=l(`<h1 id="rest参数" tabindex="-1">rest参数 <a class="header-anchor" href="#rest参数" aria-label="Permalink to &quot;rest参数&quot;">​</a></h1><h2 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h2><p>ES6引入rest参数,用于获取函数的实参,用来代替arguments</p><div class="language-JavaScript"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#A6ACCD;">DOCTYPE html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">charset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">utf-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">rest参数</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">// ES6 引入 rest 参数，用于获取函数的实参，用来代替 arguments；</span></span>
<span class="line"><span style="color:#A6ACCD;">// ES5获取实参的方式</span></span>
<span class="line"><span style="color:#A6ACCD;">function data()</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(arguments);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">data(&quot;大哥&quot;,&quot;二哥&quot;,&quot;三哥&quot;,&quot;四哥&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">// ES6的rest参数...args，rest参数必须放在最后面</span></span>
<span class="line"><span style="color:#A6ACCD;">function data(...args)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(args); </span><span style="color:#676E95;font-style:italic;">// fliter some every map</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">data(&quot;大哥&quot;,&quot;二哥&quot;,&quot;三哥&quot;,&quot;四哥&quot;);</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>`,4),o=[p];function e(c,r,D,F,y,i){return a(),n("div",null,o)}const A=s(t,[["render",e]]);export{u as __pageData,A as default};
