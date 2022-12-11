(()=>{"use strict";const e=function(e,t,n,r){let i=0;return{setTitle:function(t){e=t},getTitle:function(){return e},setDescription:function(e){t=e},getDescription:function(){return t},setDueDate:function(e){n=e},getDueDate:function(){return n},getPriority:function(){return r},setPriority:function(e){r=e},setIndex:function(e){i=e},getIndex:function(){return i}}},t=function(e){let t=[],n=0;return{renderHive:function(r){t.push(r),r.setIndex=t.length;const i=document.createElement("div");i.id="hive-"+r.getIndex();const c=document.createElement("h2");c.textContent=r.getTitle(),i.appendChild(c);const o=document.createElement("button");o.textContent="-",o.id=r.getIndex()+"",o.addEventListener("click",(e=>{t.splice(parseInt(e.target.id),1),document.querySelector("#hive-"+e.target.id).remove()})),i.appendChild(o),r.getTasks().forEach((e=>{const t=document.createElement("div");t.setAttribute("id","task-"+n);const c=document.createElement("h3");c.textContent=e.getTitle(),t.appendChild(c);const o=document.createElement("p");o.textContent=e.getDescription(),t.appendChild(o);const d=document.createElement("p");d.textContent="Due: "+e.getDueDate(),t.appendChild(d);const s=document.createElement("button");s.textContent="-",s.setAttribute("id",n+""),s.addEventListener("click",(e=>{r.removeTask(parseInt(e.target.id)),document.querySelector("#task-"+e.target.id).remove()})),t.appendChild(s),i.appendChild(t),n++})),e.appendChild(i)},renderAddForm:function(){}}},n=document.querySelector("#content");document.querySelector("#addBtn").addEventListener("click",t(n).renderAddForm);const r=function(e){let t,n=[];return{setTitle:function(t){e=t},getTitle:function(){return e},registerTask:function(e){n.push(e)},getTasks:function(){return n},removeTask:function(e){n.splice(e,1)},getIndex:function(){return t},setIndex:function(e){t=e}}}("New Hive"),i=e("Task 1","This is the first task.","December 8, 2023","ksk"),c=e("Task 2","This is the second task.","December 9, 2023","ksk");r.registerTask(i),r.registerTask(c),t(n).renderHive(r)})();