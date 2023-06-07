import{_ as s,o as n,c as a,V as l}from"./chunks/framework.7cbf217e.js";const F=JSON.parse('{"title":"const关键字(重点)","description":"","frontmatter":{},"headers":[],"relativePath":"front-end/JavaScript/07-ES6~ES11/ES6/03-const关键字（重点）.md","filePath":"front-end/JavaScript/07-ES6~ES11/ES6/03-const关键字（重点）.md","lastUpdated":1683117492000}'),p={name:"front-end/JavaScript/07-ES6~ES11/ES6/03-const关键字（重点）.md"},o=l(`<h1 id="const关键字-重点" tabindex="-1">const关键字(重点) <a class="header-anchor" href="#const关键字-重点" aria-label="Permalink to &quot;const关键字(重点)&quot;">​</a></h1><h2 id="特性" tabindex="-1">特性 <a class="header-anchor" href="#特性" aria-label="Permalink to &quot;特性&quot;">​</a></h2><p>const关键字用来声明<strong>常量</strong>,const声明有以下特点:</p><ol><li>声明必须赋初始值</li><li>标识符一般为大写(习惯)</li><li>不允许重复声明</li><li>值不允许修改 <ul><li>对数组元素的修改和对对象内部的修改是可以的(数组和对象存的是引用地址)</li></ul></li><li>块级作用域(局部变量)</li></ol><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#A6ACCD;">DOCTYPE html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">charset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">utf-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">const</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        // const声明常量</span></span>
<span class="line"><span style="color:#A6ACCD;">        const DOG = &quot;旺财&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(DOG);</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 1. 声明必须赋初始值；</span></span>
<span class="line"><span style="color:#A6ACCD;">        // const CAT;</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 报错：Uncaught SyntaxError: Missing initializer in const declaration</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 2. 标识符一般为大写（习惯）；</span></span>
<span class="line"><span style="color:#A6ACCD;">        // const dog = &quot;旺财&quot;; // 小写也不错</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 3. 不允许重复声明；</span></span>
<span class="line"><span style="color:#A6ACCD;">        //应用场景：声明对象类型使用 const，非对象类型声明选择 let；</span></span>
<span class="line"><span style="color:#A6ACCD;">        //3、变量和对象的解构赋值 什么是解构赋值：</span></span>
<span class="line"><span style="color:#A6ACCD;">        //ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构赋值；</span></span>
<span class="line"><span style="color:#A6ACCD;">        //代码演示及相关说明：</span></span>
<span class="line"><span style="color:#A6ACCD;">        // const CAT = &quot;喵喵&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">        // const CAT = &quot;喵喵&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 报错：Uncaught SyntaxError: Identifier &#39;CAT&#39; has already been declared</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 4. 值不允许修改；</span></span>
<span class="line"><span style="color:#A6ACCD;">        // const CAT = &quot;喵喵&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">        // CAT = &quot;咪咪&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 报错：Uncaught TypeError: Assignment to constant variable.</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 5. 块儿级作用域（局部变量）；</span></span>
<span class="line"><span style="color:#A6ACCD;">        // </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// const CAT = &quot;喵喵&quot;;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// console.log(CAT);</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// console.log(CAT);</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 报错：Uncaught ReferenceError: CAT is not defined</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">html</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>`,5),t=[o];function e(c,r,i,D,y,C){return n(),a("div",null,t)}const d=s(p,[["render",e]]);export{F as __pageData,d as default};
