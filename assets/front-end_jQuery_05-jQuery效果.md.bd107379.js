import{_ as s,o as a,c as l,V as n}from"./chunks/framework.7cbf217e.js";const C=JSON.parse('{"title":"jQuery效果","description":"","frontmatter":{},"headers":[],"relativePath":"front-end/jQuery/05-jQuery效果.md","filePath":"front-end/jQuery/05-jQuery效果.md","lastUpdated":1683117492000}'),o={name:"front-end/jQuery/05-jQuery效果.md"},p=n(`<h1 id="jquery效果" tabindex="-1">jQuery效果 <a class="header-anchor" href="#jquery效果" aria-label="Permalink to &quot;jQuery效果&quot;">​</a></h1><h2 id="显示隐藏" tabindex="-1">显示隐藏 <a class="header-anchor" href="#显示隐藏" aria-label="Permalink to &quot;显示隐藏&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">show</span><span style="color:#A6ACCD;">([speed</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">[easing]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">[fn]])</span></span></code></pre></div><ul><li>参数都可以省略,无动画直接显示</li><li>speed:三种预定速度之一的字符串(&#39;slow&#39;,&#39;normal&#39;,or&#39;fast&#39;)或表示动画时长的毫秒数值(如:1000)</li><li>easing:(optional)用来指定切换效果,默认是&#39;swing&#39;,可用参数&#39;linear&#39;</li><li>fn:回调函数,在动画完成时执行的函数,每个元素执行一次</li></ul><blockquote><p>show()</p><p>hide()</p><p>toggle()</p></blockquote><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">$</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">button</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">eq</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">click</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#82AAFF;">$</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">div</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">hide</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">700</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">linear</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#82AAFF;">$</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">button</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">eq</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">click</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#82AAFF;">$</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">div</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">show</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">300</span><span style="color:#89DDFF;">,</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#82AAFF;">$</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">button</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">eq</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">click</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#82AAFF;">$</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">div</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toggle</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">300</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><h2 id="事件切换" tabindex="-1">事件切换 <a class="header-anchor" href="#事件切换" aria-label="Permalink to &quot;事件切换&quot;">​</a></h2><p>同时实现鼠标移入和移出</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">hover</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">over</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">]</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">}</span></span></code></pre></div><blockquote><ul><li><p>over:鼠标移动到元素上要触发的函数(mouseenter)</p></li><li><p>out:鼠标移出元素要触发的函数(mouseleave)</p></li></ul></blockquote><h2 id="滑动" tabindex="-1">滑动 <a class="header-anchor" href="#滑动" aria-label="Permalink to &quot;滑动&quot;">​</a></h2><blockquote><p>slideDown()//下滑</p><p>slideUp()//上滑</p><p>slideToggle()//切换</p></blockquote><h2 id="淡入淡出" tabindex="-1">淡入淡出 <a class="header-anchor" href="#淡入淡出" aria-label="Permalink to &quot;淡入淡出&quot;">​</a></h2><blockquote><p>fadeIn()//淡入</p><p>fadeOut()//淡出</p><p>fadeToggle()//淡入淡出切换</p><p>fadeTo()//调整透明度</p></blockquote><h2 id="自定义动画" tabindex="-1">自定义动画 <a class="header-anchor" href="#自定义动画" aria-label="Permalink to &quot;自定义动画&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">animate</span><span style="color:#A6ACCD;">(params</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">[speed]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">[easing]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">[fn])</span></span></code></pre></div><p>参数</p><p>params:想要修改的样式属性,以对象形式传递,必须写.属性名可以不用带引号,如果是复合属性则需要采用驼峰命名法borderLeft.其余参数可以省略</p><p>speed:三种预定速度之一的字符串(&#39;slow&#39;,&#39;normal&#39;,or&#39;fast&#39;)或表示动画时长的毫秒数之(如:1000)</p><h2 id="动画队列及其停止排队方法" tabindex="-1">动画队列及其停止排队方法 <a class="header-anchor" href="#动画队列及其停止排队方法" aria-label="Permalink to &quot;动画队列及其停止排队方法&quot;">​</a></h2><h3 id="动画或效果队列" tabindex="-1">动画或效果队列 <a class="header-anchor" href="#动画或效果队列" aria-label="Permalink to &quot;动画或效果队列&quot;">​</a></h3><p>动画或者效果一旦触发就会执行,如果多次触发,就造成多个动画或者效果排队执行</p><h3 id="停止排队" tabindex="-1">停止排队 <a class="header-anchor" href="#停止排队" aria-label="Permalink to &quot;停止排队&quot;">​</a></h3><blockquote><p>stop()</p></blockquote><ul><li>stop()方法用于停止动画或效果</li><li>注意:stop()写到动画或者效果的前面,相当于停止结束上一次动画</li></ul>`,25),e=[p];function t(r,c,F,y,D,i){return a(),l("div",null,e)}const d=s(o,[["render",t]]);export{C as __pageData,d as default};
