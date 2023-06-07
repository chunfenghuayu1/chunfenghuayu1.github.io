import{_ as e,o as a,c as l,V as i}from"./chunks/framework.7cbf217e.js";const p=JSON.parse('{"title":"DOM重点核心","description":"","frontmatter":{},"headers":[],"relativePath":"front-end/JavaScript/04-JavaScript进阶之DOM技术/06-DOM重点核心.md","filePath":"front-end/JavaScript/04-JavaScript进阶之DOM技术/06-DOM重点核心.md","lastUpdated":1683117492000}'),t={name:"front-end/JavaScript/04-JavaScript进阶之DOM技术/06-DOM重点核心.md"},r=i('<h1 id="dom重点核心" tabindex="-1">DOM重点核心 <a class="header-anchor" href="#dom重点核心" aria-label="Permalink to &quot;DOM重点核心&quot;">​</a></h1><h2 id="创建元素-带引号" tabindex="-1">创建元素(带引号) <a class="header-anchor" href="#创建元素-带引号" aria-label="Permalink to &quot;创建元素(带引号)&quot;">​</a></h2><ol><li>document.write</li><li>innerHTML</li><li><strong>createElement</strong></li></ol><h2 id="增-不带引号" tabindex="-1">增(不带引号) <a class="header-anchor" href="#增-不带引号" aria-label="Permalink to &quot;增(不带引号)&quot;">​</a></h2><ol><li>appendChild</li><li>insertBefore</li></ol><h2 id="删-不带引号" tabindex="-1">删(不带引号) <a class="header-anchor" href="#删-不带引号" aria-label="Permalink to &quot;删(不带引号)&quot;">​</a></h2><ol><li>removeChild()</li><li>remove()</li></ol><h2 id="改" tabindex="-1">改 <a class="header-anchor" href="#改" aria-label="Permalink to &quot;改&quot;">​</a></h2><ul><li>主要修改dom的元素属性，dom元素的内容、属性、表单的值等</li></ul><ol><li>修改元素属性：src、href、title 等</li><li>修改普通元素内容：innerHTML、innerText</li><li>修改表单元素：value、type、disabled</li><li>修改元素样式：style、className</li></ol><h2 id="查" tabindex="-1">查 <a class="header-anchor" href="#查" aria-label="Permalink to &quot;查&quot;">​</a></h2><ul><li>主要获取查询dom的元素</li></ul><ol><li>DOM提供的API方法：getElementById、getElementsByTagName (古老用法，不推荐)</li><li>H5提供的新方法：querySelector、querySelectorAll (提倡)</li><li>利用节点操作获取元素：父(parentNode)、子(children)、兄(previousElementSibling、nextElementSibling) 提倡</li></ol><h2 id="属性操作" tabindex="-1">属性操作 <a class="header-anchor" href="#属性操作" aria-label="Permalink to &quot;属性操作&quot;">​</a></h2><ul><li>主要针对于自定义属性</li></ul><ol><li>setAttribute：设置dom的属性值</li><li>getAttribute：得到dom的属性值</li><li>removeAttribute：移除属性</li></ol>',16),o=[r];function n(d,s,c,h,m,u){return a(),l("div",null,o)}const b=e(t,[["render",n]]);export{p as __pageData,b as default};
