YUI.add("aui-datasource-control-base-deprecated",function(e,t){var n=e.Lang,r=n.isFunction,i=n.isString,s="bindUI",o="renderUI",u="syncUI",a=function(){};a.ATTRS={dataSource:{value:null,setter:function(t){var n=this,s=t;if(t){var o=s,u=n.get("dataSourceType");s instanceof e.DataSource.Local||(u||(u="Local",r(o)?u="Function":i(o)&&(u="IO")),s=new e.DataSource[u]({source:o})),u=s.name;var a=n._schema;a&&s.plug(a),n.set("dataSourceType",u)}return s}},dataSourceType:{value:null},schema:{value:null,lazyAdd:!1,setter:function(t){var n=this,r=n.get("dataSource"),i=n._schema;r&&i&&(r.unplug(i),i=null,n._schema=null);if(t)if(t.fn)i=t,t=t.cfg.schema;else{var s=n.get("schemaType"),o={array:e.Plugin.DataSourceArraySchema,json:e.Plugin.DataSourceJSONSchema,text:e.Plugin.DataSourceTextSchema,xml:e.Plugin.DataSourceXMLSchema};s=s.toLowerCase()||"array",i={fn:o[s],cfg:{schema:t}}}return r&&i&&r.plug(i),n._schema=i,t}},schemaType:{value:"",lazyAdd:!1,validator:i}},a.prototype={initializer:function(){var e=this;e.publish(o),e.publish(s),e.publish(u)},renderUI:function(){var e=this;e.fire(o)},bindUI:function(){var e=this;e.publish("dataError"),e.publish("dataRequest"),e.publish("dataReturn"),e.fire(s)},syncUI:function(){var e=this;e.fire(u)}},e.DataSourceControl=a},"3.1.0-deprecated.63",{requires:["datasource","dataschema","aui-base-deprecated"]});
