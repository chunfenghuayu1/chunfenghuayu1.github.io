import{_ as s,o as n,c as a,V as l}from"./chunks/framework.7cbf217e.js";const d=JSON.parse('{"title":"变量和对象的解构赋值","description":"","frontmatter":{},"headers":[],"relativePath":"front-end/JavaScript/07-ES6~ES11/ES6/04-变量和对象的解构赋值.md","filePath":"front-end/JavaScript/07-ES6~ES11/ES6/04-变量和对象的解构赋值.md","lastUpdated":1683117492000}'),p={name:"front-end/JavaScript/07-ES6~ES11/ES6/04-变量和对象的解构赋值.md"},t=l(`<h1 id="变量和对象的解构赋值" tabindex="-1">变量和对象的解构赋值 <a class="header-anchor" href="#变量和对象的解构赋值" aria-label="Permalink to &quot;变量和对象的解构赋值&quot;">​</a></h1><h2 id="什么是解构赋值" tabindex="-1">什么是解构赋值 <a class="header-anchor" href="#什么是解构赋值" aria-label="Permalink to &quot;什么是解构赋值&quot;">​</a></h2><p>ES6允许按照一定模式,从数组和对象中提取值,对变量进行赋值,这被称为解构赋值</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;meta charset=&quot;utf-8&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;title&gt;解构赋值&lt;/title&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">// ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构赋值；</span></span>
<span class="line"><span style="color:#A6ACCD;">// 1、数组的解构赋值</span></span>
<span class="line"><span style="color:#A6ACCD;">const F4 = [&quot;大哥&quot;,&quot;二哥&quot;,&quot;三哥&quot;,&quot;四哥&quot;];</span></span>
<span class="line"><span style="color:#A6ACCD;">let [a,b,c,d] = F4;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 这就相当于我们声明4个变量a,b,c,d，其值分别对应&quot;大哥&quot;,&quot;二哥&quot;,&quot;三哥&quot;,&quot;四哥&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(a + b + c + d); // 大哥二哥三哥四哥</span></span>
<span class="line"><span style="color:#A6ACCD;">// 2、对象的解构赋值</span></span>
<span class="line"><span style="color:#A6ACCD;">const F3 = {</span></span>
<span class="line"><span style="color:#A6ACCD;">name : &quot;大哥&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">age : 22,</span></span>
<span class="line"><span style="color:#A6ACCD;">sex : &quot;男&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">xiaopin : function(){ // 常用</span></span>
<span class="line"><span style="color:#A6ACCD;">应用场景：</span></span>
<span class="line"><span style="color:#A6ACCD;">频繁使用对象方法、数组元素，就可以使用解构赋值形式；</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(&quot;我会演小品！&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let {name,age,sex,xiaopin} = F3; // 注意解构对象这里用的是{}</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(name + age + sex + xiaopin); // 大哥22男</span></span>
<span class="line"><span style="color:#A6ACCD;">xiaopin(); // 此方法可以正常调用</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/html&gt;</span></span></code></pre></div>`,4),o=[t];function e(c,i,r,C,A,_){return n(),a("div",null,o)}const y=s(p,[["render",e]]);export{d as __pageData,y as default};
