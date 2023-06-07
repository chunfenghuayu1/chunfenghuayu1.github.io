import{_ as s,o as n,c as a,V as l}from"./chunks/framework.7cbf217e.js";const p="/assets/image-20220428210858863.b60b04c7.png",d=JSON.parse('{"title":"函数进阶","description":"","frontmatter":{},"headers":[],"relativePath":"front-end/JavaScript/06-JavaScript高级之面向对象/05-函数进阶.md","filePath":"front-end/JavaScript/06-JavaScript高级之面向对象/05-函数进阶.md","lastUpdated":1683117492000}'),o={name:"front-end/JavaScript/06-JavaScript高级之面向对象/05-函数进阶.md"},t=l('<h1 id="函数进阶" tabindex="-1">函数进阶 <a class="header-anchor" href="#函数进阶" aria-label="Permalink to &quot;函数进阶&quot;">​</a></h1><h2 id="函数的定义方式" tabindex="-1">函数的定义方式 <a class="header-anchor" href="#函数的定义方式" aria-label="Permalink to &quot;函数的定义方式&quot;">​</a></h2><ol><li>函数声明方式 function 关键字(命名函数)</li><li>函数表达式(匿名函数)</li><li>new Function()</li></ol><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> fn </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Function</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">参数1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">参数2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,.....,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">函数体</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><ul><li>Function 里面参数都必须是字符串格式</li><li>第三种方式执行效率低，也不方便书写，因此较少使用</li><li>所有函数都是 Function 的实例(对象)</li><li>函数也属于对象</li></ul><p><img src="'+p+`" alt="image-20220428210858863"></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        //  函数的定义方式</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        // 1. 自定义函数(命名函数) </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        function fn() </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        // 2. 函数表达式 (匿名函数)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        var fun = function() </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        // 3. 利用 new Function(&#39;参数1&#39;,&#39;参数2&#39;, &#39;函数体&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">		//             Function 里面参数都必须是字符串格式，执行效率低，较少写</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        var f = new Function(&#39;a&#39;, &#39;b&#39;, &#39;console.log(a + b)&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        f(1, 2);</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 4. 所有函数都是 Function 的实例(对象)</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.dir(f);</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 5. 函数也属于对象</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(f instanceof Object);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="函数的调用方式" tabindex="-1">函数的调用方式 <a class="header-anchor" href="#函数的调用方式" aria-label="Permalink to &quot;函数的调用方式&quot;">​</a></h2><ol><li>普通函数</li><li>对象的方法</li><li>构造函数</li><li>绑定事件函数</li><li>定时器函数</li><li>立即执行函数</li></ol><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 函数的调用方式</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        // 1. 普通函数</span></span>
<span class="line"><span style="color:#A6ACCD;">        function fn() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">人生的巅峰</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        // fn();   fn.call()</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 2. 对象的方法</span></span>
<span class="line"><span style="color:#A6ACCD;">        var o = </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            sayHi: </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">人生的巅峰</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        o.sayHi();</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 3. 构造函数</span></span>
<span class="line"><span style="color:#A6ACCD;">        function Star() </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        new Star();</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 4. 绑定事件函数</span></span>
<span class="line"><span style="color:#A6ACCD;">        // btn.onclick = function() </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">;   // 点击了按钮就可以调用这个函数</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 5. 定时器函数</span></span>
<span class="line"><span style="color:#A6ACCD;">        // setInterval(function() </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">, 1000);  这个函数是定时器自动1秒钟调用一次</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 6. 立即执行函数</span></span>
<span class="line"><span style="color:#A6ACCD;">        (function() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">人生的巅峰</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)();</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 立即执行函数是自动调用</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="函数内this指向" tabindex="-1">函数内this指向 <a class="header-anchor" href="#函数内this指向" aria-label="Permalink to &quot;函数内this指向&quot;">​</a></h2><ul><li><code>this</code>指向，是当我们调用函数的时候确定的，调用方式的不同决定了<code>this</code>的指向不同，一般我们指向我们的调用者</li></ul><table><thead><tr><th style="text-align:center;">调用方式</th><th style="text-align:center;">this指向</th></tr></thead><tbody><tr><td style="text-align:center;">普通函数调用</td><td style="text-align:center;">window</td></tr><tr><td style="text-align:center;">构造函数调用</td><td style="text-align:center;">实例对象，原型对象里面的方法也指向实例对象</td></tr><tr><td style="text-align:center;">对象方法调用</td><td style="text-align:center;">该方法所属对象</td></tr><tr><td style="text-align:center;">事件绑定方法</td><td style="text-align:center;">绑定事件对象</td></tr><tr><td style="text-align:center;">定时器函数</td><td style="text-align:center;">window</td></tr><tr><td style="text-align:center;">立即执行函数</td><td style="text-align:center;">window</td></tr></tbody></table><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">点击</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 函数的不同调用方式决定了this 的指向不同</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 1. 普通函数 this 指向window</span></span>
<span class="line"><span style="color:#A6ACCD;">        function fn() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">普通函数的this</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        window.fn();</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 2. 对象的方法 this指向的是对象 o</span></span>
<span class="line"><span style="color:#A6ACCD;">        var o = </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            sayHi: </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">对象方法的this:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        o.sayHi();</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 3. 构造函数 this 指向 ldh 这个实例对象 原型对象里面的this 指向的也是 ldh这个实例对象</span></span>
<span class="line"><span style="color:#A6ACCD;">        function Star() </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        Star.prototype.sing = function() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        var ldh = new Star();</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 4. 绑定事件函数 this 指向的是函数的调用者 btn这个按钮对象</span></span>
<span class="line"><span style="color:#A6ACCD;">        var btn = document.querySelector(&#39;button&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        btn.onclick = function() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">绑定时间函数的this:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 5. 定时器函数 this 指向的也是window</span></span>
<span class="line"><span style="color:#A6ACCD;">        window.setTimeout(function() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">定时器的this:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">, 1000);</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 6. 立即执行函数 this还是指向window</span></span>
<span class="line"><span style="color:#A6ACCD;">        (function() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">立即执行函数的this</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)();</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="改变函数内部this指向" tabindex="-1">改变函数内部this指向 <a class="header-anchor" href="#改变函数内部this指向" aria-label="Permalink to &quot;改变函数内部this指向&quot;">​</a></h2><p>JavaScript为我们专门提供了一些函数方法来帮我们更优雅的处理函数内部this的指向问题，常用的有<strong>bind(),call(),apply()</strong></p><h3 id="call-方法" tabindex="-1">call()方法 <a class="header-anchor" href="#call-方法" aria-label="Permalink to &quot;call()方法&quot;">​</a></h3><ul><li>call()方法调用一个对象，简单理解为调用函数的方式，但是它可以改变函数的this指向</li><li>fun.call(thisArg,arg1,arg2,.....)</li><li>thisArg: 在 fun 函数运行时指定的 this 值</li><li>arg1,arg2: 传递的其他参数</li><li>返回值就是函数的返回值，因为它就是调用函数</li><li>因此当我们想改变 this 指向，同时想调用这个函数的时候，可以使用 call，比如继承</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 改变函数内this指向  js提供了三种方法  call()  apply()  bind()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        // 1. call()</span></span>
<span class="line"><span style="color:#A6ACCD;">        var o = </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            name: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">andy</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        function fn(a, b) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">this</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(a </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> b);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        fn.call(o, 1, 2);</span></span>
<span class="line"><span style="color:#A6ACCD;">        // call 第一个可以调用函数 第二个可以改变函数内的this 指向</span></span>
<span class="line"><span style="color:#A6ACCD;">        // call 的主要作用可以实现继承</span></span>
<span class="line"><span style="color:#A6ACCD;">        function Father(uname, age, sex) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">uname </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> uname;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">age </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> age;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">sex </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> sex;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        function Son(uname, age, sex) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            Father</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">this,</span><span style="color:#A6ACCD;"> uname</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> age</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> sex);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        var son = new Son(&#39;刘德华&#39;, 18, &#39;男&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(son);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="apply-方法" tabindex="-1">apply()方法 <a class="header-anchor" href="#apply-方法" aria-label="Permalink to &quot;apply()方法&quot;">​</a></h3><ul><li>apply()方法调用一个函数，简单理解为调用函数的方式，但是它可以改变函数的 this指向</li><li>fun.apply(thisArg,[argsArray])</li><li>thisArg: 在 fun 函数运行时指定的 this 值</li><li>argsArray : 传递的值，必须包含在数组里面</li><li>返回值就是函数的返回值，因为它就是调用函数</li><li>因此 apply 主要跟数组有关系，比如使用 Math.max() 求数组的最大值</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 改变函数内this指向  js提供了三种方法  call()  apply()  bind()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        // 2. apply()  应用 运用的意思</span></span>
<span class="line"><span style="color:#A6ACCD;">        var o = </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            name: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">andy</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        function fn(arr) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">this</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(arr); </span><span style="color:#676E95;font-style:italic;">// &#39;pink&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        fn.apply(o, [&#39;pink&#39;]);</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 1. 也是调用函数 第二个可以改变函数内部的this指向</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 2. 但是他的参数必须是数组(伪数组)</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 3. apply 的主要应用 比如说我们可以利用 apply 借助于数学内置对象求数组最大值 </span></span>
<span class="line"><span style="color:#A6ACCD;">        // Math.max();</span></span>
<span class="line"><span style="color:#A6ACCD;">        var arr = [1, 66, 3, 99, 4];</span></span>
<span class="line"><span style="color:#A6ACCD;">        var arr1 = [&#39;red&#39;, &#39;pink&#39;];</span></span>
<span class="line"><span style="color:#A6ACCD;">        // var max = Math.max.apply(null, arr);</span></span>
<span class="line"><span style="color:#A6ACCD;">        var max = Math.max.apply(Math, arr);</span></span>
<span class="line"><span style="color:#A6ACCD;">        var min = Math.min.apply(Math, arr);</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(max, min);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="bind-方法-重点" tabindex="-1">bind()方法(重点) <a class="header-anchor" href="#bind-方法-重点" aria-label="Permalink to &quot;bind()方法(重点)&quot;">​</a></h3><p>bind()方法不会调用函数.但是能改变函数内部this指向</p><blockquote><p>fn.bind(thisArg,arg1,arg2,...)</p></blockquote><ul><li>thisArg:在fn函数运行时指定的this的值</li><li>arg1,arg2:传递的其他参数</li><li>返回由指定的this值和初始化参数改造的==原函数拷贝==</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">点击</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">点击</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">点击</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 改变函数内this指向  js提供了三种方法  call()  apply()  bind()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        // 3. bind()  绑定 捆绑的意思</span></span>
<span class="line"><span style="color:#A6ACCD;">        var o = </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            name: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">andy</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        function fn(a, b) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">this</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(a </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> b);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        var f = fn.bind(o, 1, 2);</span></span>
<span class="line"><span style="color:#A6ACCD;">        f();</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 1. 不会调用原来的函数   可以改变原来函数内部的this 指向</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 2. 返回的是原函数改变this之后产生的新函数</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 3. 如果有的函数我们不需要立即调用,但是又想改变这个函数内部的this指向此时用bind</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 4. 我们有一个按钮,当我们点击了之后,就禁用这个按钮,3秒钟之后开启这个按钮</span></span>
<span class="line"><span style="color:#A6ACCD;">        // var btn1 = document.querySelector(&#39;button&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        // btn1.onclick = function() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//     this.disabled = true; // 这个this 指向的是 btn 这个按钮</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//     // var that = this;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//     setTimeout(function() {</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//         // that.disabled = false; // 定时器函数里面的this 指向的是window</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//         this.disabled = false; // 此时定时器函数里面的this 指向的是btn</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//     }.bind(this), 3000); // 这个this 指向的是btn 这个对象</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"><span style="color:#A6ACCD;">        var btns </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelectorAll</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">button</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">for</span><span style="color:#A6ACCD;"> (var i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">; i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> btns</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length; i</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            btns</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">].onclick = function() {</span></span>
<span class="line"><span style="color:#F07178;">                this.disabled = true;</span></span>
<span class="line"><span style="color:#F07178;">                setTimeout(function() {</span></span>
<span class="line"><span style="color:#F07178;">                    this.disabled = false;</span></span>
<span class="line"><span style="color:#F07178;">                }.bind(this), 2000);</span></span>
<span class="line"><span style="color:#F07178;">            }</span></span>
<span class="line"><span style="color:#F07178;">        }</span></span>
<span class="line"><span style="color:#F07178;">    &lt;/script&gt;</span></span>
<span class="line"><span style="color:#F07178;">&lt;/body&gt;</span></span></code></pre></div><h3 id="call-apply-bind总结" tabindex="-1">call,apply,bind总结 <a class="header-anchor" href="#call-apply-bind总结" aria-label="Permalink to &quot;call,apply,bind总结&quot;">​</a></h3><p>相同点:</p><p>都可以改变函数内部的this指向</p><p>区别点:</p><ol><li>call和apply会调用函数,并且改变函数内部this指向</li><li>call和apply传递的参数不一样,call传递参数aru1,aru2...形式,apply必须数组形式[arg]</li><li>bind不会调用函数,可以改变函数内部this指向</li></ol><p>主要应用场景:</p><ol><li>call经常做继承</li><li>apply经常跟数组有关系,比如借助于数学对象实现数组最大值最小值</li><li>bind不调用函数,但是还想改变this指向,比如改变定时器内部的this指向</li></ol>`,34),e=[t];function c(r,D,y,i,A,F){return n(),a("div",null,e)}const h=s(o,[["render",c]]);export{d as __pageData,h as default};
