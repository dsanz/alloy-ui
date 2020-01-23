YUI.add("aui-parse-content",function(e,t){var n=e.Lang,r=n.isString,i=e.config.doc,s="<div>_</div>",o={"":1,"text/javascript":1,"text/parsed":1},u=e.Component.create({NAME:"ParseContent",NS:"ParseContent",ATTRS:{queue:{value:null},preserveScriptNodes:{validator:n.isBoolean,value:!1}},EXTENDS:e.Plugin.Base,prototype:{initializer:function(){var t=this;u.superclass.initializer.apply(this,arguments),t.set("queue",new e.AsyncQueue),t._bindAOP()},globalEval:function(t){var r=e.getDoc(),s=r.one("head")||r.get("documentElement"),o=i.createElement("script");o.type="text/javascript",t&&(o.text=n.trim(t)),s.appendChild(o).remove()},parseContent:function(e){var t=this,n=t._extractScripts(e);return t._dispatch(n),n},_addInlineScript:function(e){var t=this;t.get("queue").add({args:e,context:t,fn:t.globalEval,timeout:0})},_bindAOP:function(){var t=this,n=function(n){var r=Array.prototype.slice.call(arguments),i=t.parseContent(n);return r.splice(0,1,i.fragment),new e.Do.AlterArgs(null,r)};this.doBefore("insert",n),this.doBefore("replaceChild",n);var r=function(n){var r=t.parseContent(n);return new e.Do.AlterArgs(null,[r.fragment])};this.doBefore("replace",r),this.doBefore("setContent",r)},_extractScripts:function(t){var n=this,i=e.Node.create("<div></div>"),u={},a=n.get("preserveScriptNodes");return r(t)?(t=s+t,e.DOM.addHTML(i,t,"append")):(i.append(s),i.append(t)),u.js=i.all("script").filter(function(e){var t=o[e.getAttribute("type").toLowerCase()];return a&&e.setAttribute("type","text/parsed"),t}),a||u.js.each(function(e){e.remove()}),i.get("firstChild").remove(),u.fragment=i.get("childNodes").toFrag(),u},_dispatch:function(t){var n=this,r=n.get("queue"),i=[];t.js.each(function(t){var s=t.get("src");if(s)i.length&&(n._addInlineScript(i.join(";")),i.length=0),r.add({autoContinue:!1,fn:function(){e.Get.script(s,{onEnd:function(e){e.purge(),r.run()}})},timeout:0});else{var o=t._node;i.push(o.text||o.textContent||o.innerHTML||"")}}),i.length&&n._addInlineScript(i.join(";")),r.run()}}});e.namespace("Plugin").ParseContent=u},"3.1.0-deprecated.73",{requires:["async-queue","plugin","io-base","aui-component","aui-node-base"]});
