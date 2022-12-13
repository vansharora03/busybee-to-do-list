(()=>{"use strict";const e=function(e,t){let n=0,d=[];return{setColor:function(e){t=e},getColor:function(){return t},setTitle:function(t){e=t},getTitle:function(){return e},registerTask:function(e){e.setIndex(d.length),d.push(e)},getTasks:function(){return d},removeTask:function(e){const t=e.getIndex();d.splice(t,1)},getIndex:function(){return n},setIndex:function(e){n=e}}};(function(t){let n=[],d=0,i=["#bef264","#fcd34d","#fda4af","#a5b4fc","#f87171","#86efac","#94a3b8"],c=0;const a=function(e,d){e.setIndex(n.length),n.push(e);const i=document.createElement("div");i.style.backgroundColor=d,i.classList.add("renderedHive"),i.id="hive-"+e.getIndex(),console.log(i.id);const c=document.createElement("h2");c.classList.add("renderedTitle"),c.textContent=e.getTitle(),i.appendChild(c);const a=document.createElement("div");a.classList.add("clickListen"),a.dataset.clickOf=i.id,a.addEventListener("click",l),i.appendChild(a),t.appendChild(i)},s=function(e){const t=e.target;t.remove();const d=document.createElement("div");d.classList.add("addTaskForm");const i=document.createElement("input");i.classList.add("addTaskTitle"),i.id="addTaskTitle",i.placeholder="Task Title",d.appendChild(i);const c=document.createElement("textarea");c.classList.add("addTaskDescription"),c.id="addTaskDescription",c.placeholder="Task Description",d.appendChild(c);const a=document.createElement("input");a.classList.add("addTaskDueDate"),a.id="addTaskDueDate",a.placeholder="Task Due Date",d.appendChild(a);const s=document.createElement("input");s.classList.add("addTaskPriority"),s.id="addTaskPriority",s.placeholder="Task Priority",d.appendChild(s);const r=document.createElement("button");r.classList.add("addTaskSubmitBtn"),r.id=e.target.id,r.textContent="+",r.addEventListener("click",(e=>{d.remove();const r=function(e,t,n,d){let i=0;return{setTitle:function(t){e=t},getTitle:function(){return e},setDescription:function(e){t=e},getDescription:function(){return t},setDueDate:function(e){n=e},getDueDate:function(){return n},getPriority:function(){return d},setPriority:function(e){d=e},setIndex:function(e){i=e},getIndex:function(){return i}}}(i.value,c.value,a.value,s.value);n[parseInt(e.target.id)].registerTask(r),o("#hive-"+e.target.id,r),document.querySelector("#hive-"+e.target.id).appendChild(t)})),d.appendChild(r),document.querySelector("#hive-"+e.target.id).appendChild(d)},o=function(e,t){const i=document.createElement("div");i.classList.add("renderedTask"),i.setAttribute("id","task-"+d);const c=document.createElement("h3");c.classList.add("renderedTaskTitle"),c.textContent=t.getTitle(),i.appendChild(c);const a=document.createElement("p");a.classList.add("renderedTaskDescription"),a.textContent=t.getDescription(),i.appendChild(a);const s=document.createElement("p");s.classList.add("renderedTaskDueDate"),s.textContent="Due: "+t.getDueDate(),i.appendChild(s);const o=document.createElement("p");o.classList.add("renderedTaskPriority"),o.textContent="Priority: "+t.getPriority(),i.appendChild(o);const r=document.createElement("button");r.classList.add("deleteTaskBtn"),r.textContent="-",r.setAttribute("id",d+""),r.addEventListener("click",(d=>{n[parseInt(e.substring(6))].removeTask(t),document.querySelector("#task-"+d.target.id).remove()})),i.appendChild(r),document.querySelector(e).appendChild(i),d++},r=function(){const n=document.querySelector("#addHiveBtn");n.remove();const d=document.createElement("div");d.classList.add("addHiveForm"),d.id="addHiveForm";const s=document.createElement("input");s.setAttribute("placeholder","Title"),s.id="newHiveTitle",s.classList.add("newHiveTitle"),d.appendChild(s);const o=document.createElement("input");o.type="color",o.value=i[c++],c=c>6?0:c,o.classList.add("newHiveColor"),d.appendChild(o);const r=document.createElement("button");r.textContent="+",r.classList.add("addHiveSubmit"),r.addEventListener("click",(()=>{const i=e(""===document.querySelector("#newHiveTitle").value?"New Hive":document.querySelector("#newHiveTitle").value);a(i,o.value),d.remove(),t.appendChild(n)})),d.appendChild(r),t.appendChild(d)},l=function(e){const d=document.querySelector("#"+e.target.dataset.clickOf);d.classList.add("expandedHive"),d.removeEventListener("click",l);const i=e.target;i.remove(),document.querySelector("body").style.overflow="hidden",t.style.overflowY="hidden",function(e){const t=document.createElement("button");t.textContent="+Task",t.setAttribute("id",e.id.substring(5)),t.classList.add("addTaskBtn"),t.addEventListener("click",s),e.appendChild(t)}(d),function(e){const t=document.createElement("button");t.classList.add("deleteHiveBtn");const d=document.createElement("img");d.src="images/trash.svg",t.appendChild(d),t.id=e.id.substring(5),t.addEventListener("click",(t=>{n.splice(parseInt(t.target.id),1),e.remove(),document.querySelector(".blurScreen").remove()})),e.appendChild(t)}(d),t.contains(document.querySelector(".deleteTaskBtn"))&&d.querySelectorAll(".deleteTaskBtn").forEach((e=>{e.style.visibility="visible"}));const c=document.createElement("div");c.classList.add("blurScreen"),t.appendChild(c),c.addEventListener("click",(()=>{c.remove(),d.classList.remove("expandedHive"),d.contains(document.querySelector(".addTaskForm"))&&d.querySelector(".addTaskForm").remove(),d.contains(document.querySelector(".addTaskBtn"))&&d.querySelector(".addTaskBtn").remove(),t.contains(document.querySelector(".deleteTaskBtn"))&&d.querySelectorAll(".deleteTaskBtn").forEach((e=>{e.style.visibility="hidden"})),document.querySelector("body").style.overflowY="auto",d.querySelector(".deleteHiveBtn").remove(),d.appendChild(i)}))};return{load:function(){const n=e("My First Hive!");a(n,i[6]),function(){const e=document.createElement("button");e.classList.add("addHiveBtn"),e.id="addHiveBtn",e.textContent="+",e.addEventListener("click",r),t.appendChild(e)}()}}})(document.querySelector("#content")).load()})();