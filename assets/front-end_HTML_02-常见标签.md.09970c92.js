import{_ as t,o as l,c as s,V as e}from"./chunks/framework.7cbf217e.js";const a="/assets/image-20230413195648789.4e4e108d.png",F=JSON.parse('{"title":"常见标签","description":"","frontmatter":{},"headers":[],"relativePath":"front-end/HTML/02-常见标签.md","filePath":"front-end/HTML/02-常见标签.md","lastUpdated":1683117492000}'),n={name:"front-end/HTML/02-常见标签.md"},p=e(`<h1 id="常见标签" tabindex="-1">常见标签 <a class="header-anchor" href="#常见标签" aria-label="Permalink to &quot;常见标签&quot;">​</a></h1><h2 id="html语法" tabindex="-1">html语法 <a class="header-anchor" href="#html语法" aria-label="Permalink to &quot;html语法&quot;">​</a></h2><ol><li><p>常规标记、双标记</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">单标记</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">标记名</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">标记名</span><span style="color:#89DDFF;">  &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	双标记</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">标记名</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">文字内容</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">标记名</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">标记</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">属性</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">属性值</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">属性</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">属性值</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></li><li><p>标记的结构</p><p>标签：内容载体，可以看作一个一个小盒子 属性：定义盒子功能</p></li><li><p>标记嵌套结构（需要设置缩进）</p><p>一层：父子关系</p><p>多层：后代关系</p></li><li><p>html的框架结构</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></li></ol><h2 id="常见标签-1" tabindex="-1">常见标签 <a class="header-anchor" href="#常见标签-1" aria-label="Permalink to &quot;常见标签&quot;">​</a></h2><table><thead><tr><th style="text-align:center;"><strong>含义</strong></th><th style="text-align:center;"><strong>语法书写和语法</strong></th><th style="text-align:left;"></th><th style="text-align:center;"></th></tr></thead><tbody><tr><td style="text-align:center;">文本标题</td><td style="text-align:center;">&lt;h1&gt;文章或者重点标题&lt;/h1&gt; &lt;h2&gt;大模块的标题&lt;/h2&gt; &lt;h3&gt;小模块的标题&lt;/h3&gt;</td><td style="text-align:left;">&lt;h4&gt;标题H4&lt;/h4&gt; &lt;h5&gt;标题H5&lt;/h5&gt; &lt;h6&gt;标题H6&lt;/h6&gt;</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">段落</td><td style="text-align:center;">&lt;p&gt;段落文本内容&lt;/p&gt;</td><td style="text-align:left;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">加粗</td><td style="text-align:center;">&lt;b&gt;加粗的内容&lt;/b&gt;</td><td style="text-align:left;">&lt;strong&gt;加粗的内容&lt;/strong&gt;</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">倾斜</td><td style="text-align:center;">&lt;i&gt;倾斜的内容&lt;/i&gt;</td><td style="text-align:left;">&lt;em&gt;倾斜的内容&lt;/em&gt;</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">强制换行</td><td style="text-align:center;">&lt;br/&gt;</td><td style="text-align:left;">水平线</td><td style="text-align:center;">&lt;hr/&gt;</td></tr><tr><td style="text-align:center;">上标</td><td style="text-align:center;">&lt;sup&gt;&lt;/sup&gt;</td><td style="text-align:left;">下标</td><td style="text-align:center;">&lt;sub&gt;&lt;/sub&gt;</td></tr><tr><td style="text-align:center;">下划线</td><td style="text-align:center;">&lt;u&gt;下划线&lt;/u&gt;</td><td style="text-align:left;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">删除线</td><td style="text-align:center;">&lt;s&gt;删除线&lt;/s&gt;</td><td style="text-align:left;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">特殊符号</td><td style="text-align:center;">  空格 © 版权© &amp;reg； 商标®</td><td style="text-align:left;"></td><td style="text-align:center;"></td></tr></tbody></table><h2 id="常用标记嵌套规范" tabindex="-1">常用标记嵌套规范 <a class="header-anchor" href="#常用标记嵌套规范" aria-label="Permalink to &quot;常用标记嵌套规范&quot;">​</a></h2><ol><li><p>同类型标签相互嵌套</p></li><li><p>自动换行可以嵌套不换行的标签</p></li><li><p>自动换行</p><p>h1-h6、p</p></li><li><p>同行显示，不换行</p><table><thead><tr><th>i em</th><th>倾斜</th></tr></thead><tbody><tr><td>s</td><td>删除</td></tr><tr><td>u</td><td>下划线</td></tr><tr><td>sub和sup</td><td>下标和上标</td></tr></tbody></table></li></ol><h2 id="转义字符" tabindex="-1">转义字符 <a class="header-anchor" href="#转义字符" aria-label="Permalink to &quot;转义字符&quot;">​</a></h2><p>&amp;nbsp； 空格</p><p>&amp;copy； 版权信息</p><p>&amp;reg； 商标</p><p>&amp;gt；&amp;lt；大于小于</p><p><img src="`+a+'" alt="image-20230413195648789"></p>',13),o=[p];function r(c,d,i,g,y,h){return l(),s("div",null,o)}const x=t(n,[["render",r]]);export{F as __pageData,x as default};
