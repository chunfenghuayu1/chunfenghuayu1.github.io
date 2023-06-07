import{_ as t,o as e,c as a,V as i}from"./chunks/framework.7cbf217e.js";const h=JSON.parse('{"title":"迭代器","description":"","frontmatter":{},"headers":[],"relativePath":"front-end/JavaScript/07-ES6~ES11/ES6/13-迭代器.md","filePath":"front-end/JavaScript/07-ES6~ES11/ES6/13-迭代器.md","lastUpdated":1683117492000}'),r={name:"front-end/JavaScript/07-ES6~ES11/ES6/13-迭代器.md"},l=i('<h1 id="迭代器" tabindex="-1">迭代器 <a class="header-anchor" href="#迭代器" aria-label="Permalink to &quot;迭代器&quot;">​</a></h1><h2 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h2><p>遍历器(iterator)就是一种机制.它是一种接口,为各种不同的数据结构提供统一的访问机制.任何数据结构只要部署iterator接口,就可以完成遍历操作</p><ol><li>ES6创造了一种新的遍历命令for...of循环,iterator接口主要供for...of消费</li><li>原生具备iterator接口的数据(可用for of遍历)</li></ol><ul><li>Array</li><li>Arguments</li><li>Set</li><li>Map</li><li>String</li><li>TypedArray</li><li>Nodelist</li></ul><p>3.工作原理</p><ul><li>创建一个指针对象,指向当前数据结构的起始位置</li><li>第一次调用对象的next方法,指针自动指向数据结构的第一个成员</li><li>接下来不断调用next方法,指针一直往后移动,直到指向最后一个成员</li><li>每调用next方法返回一个包含value和done属性的对象</li></ul><p><strong>需要自定义遍历数据时,要想到迭代器</strong></p>',8),o=[l];function n(_,s,d,c,p,S){return e(),a("div",null,o)}const u=t(r,[["render",n]]);export{h as __pageData,u as default};
