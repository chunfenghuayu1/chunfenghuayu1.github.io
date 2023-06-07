import{_ as a,o as i,c as t,V as e}from"./chunks/framework.7cbf217e.js";const l="/assets/image-20220519155032272-16815007556021.8e451866.png",r="/assets/image-20220519155055354-16815007585192.4ca3a0c5.png",s="/assets/image-20220519160037761-16815007619503.31382ecc.png",o="/assets/image-20220519160434426-16815007695584.8918c97d.png",E=JSON.parse('{"title":"宏任务和微任务","description":"","frontmatter":{},"headers":[],"relativePath":"front-end/JavaScript/07-ES6~ES11/ES6模块化/05-宏任务和微任务.md","filePath":"front-end/JavaScript/07-ES6~ES11/ES6模块化/05-宏任务和微任务.md","lastUpdated":1683117492000}'),n={name:"front-end/JavaScript/07-ES6~ES11/ES6模块化/05-宏任务和微任务.md"},c=e('<h1 id="宏任务和微任务" tabindex="-1">宏任务和微任务 <a class="header-anchor" href="#宏任务和微任务" aria-label="Permalink to &quot;宏任务和微任务&quot;">​</a></h1><h2 id="什么是宏任务和微任务" tabindex="-1">什么是宏任务和微任务 <a class="header-anchor" href="#什么是宏任务和微任务" aria-label="Permalink to &quot;什么是宏任务和微任务&quot;">​</a></h2><p>JavaScript 把<strong>异步任务</strong>又做了进一步的划分，异步任务又分为两类，分别是：</p><ol><li>宏任务(macrotask) <ul><li>异步Ajax请求</li><li>setTimeout\\setInterval</li><li>文件操作</li><li>其他宏任务</li></ul></li><li>微任务(microtask) <ul><li>Promise.then\\.catch\\.finally</li><li>process.nextTick</li><li>其他微任务</li></ul></li></ol><p><img src="'+l+'" alt="image-20220519155032272"></p><h2 id="宏任务和微任务的执行顺序" tabindex="-1">宏任务和微任务的执行顺序 <a class="header-anchor" href="#宏任务和微任务的执行顺序" aria-label="Permalink to &quot;宏任务和微任务的执行顺序&quot;">​</a></h2><p><img src="'+r+'" alt="image-20220519155055354"></p><p>每一个宏任务执行完之后，都会检查是否存在待执行的微任务，如果有，则执行完所有微任务之后，再继续执行下一个宏任务。</p><h2 id="分析以下代码输出的顺序" tabindex="-1">分析以下代码输出的顺序 <a class="header-anchor" href="#分析以下代码输出的顺序" aria-label="Permalink to &quot;分析以下代码输出的顺序&quot;">​</a></h2><p><img src="'+s+'" alt="image-20220519160037761"></p><p>正确的输出顺序是：2431</p><p>分析：</p><ol><li>先执行所有的同步任务 <ul><li>执行第 6 行、第 12 行代码</li></ul></li><li>再执行微任务 <ul><li>执行第 9 行代码</li></ul></li><li>再执行下一个宏任务 <ul><li>执行第 2 行代码</li></ul></li></ol><h2 id="经典面试题" tabindex="-1">经典面试题 <a class="header-anchor" href="#经典面试题" aria-label="Permalink to &quot;经典面试题&quot;">​</a></h2><p>请分析以下代码输出的顺序（代码较长，截取成了左中右 3 个部分） ：</p><p><img src="'+o+'" alt="image-20220519160434426"></p><p>正确的输出顺序是：156234789</p>',17),p=[c];function _(d,m,h,u,g,S){return i(),t("div",null,p)}const b=a(n,[["render",_]]);export{E as __pageData,b as default};
