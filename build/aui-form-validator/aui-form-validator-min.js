YUI.add("aui-form-validator",function(e,t){var n=e.Lang,r=e.Object,i=n.isBoolean,s=n.isDate,o=r.isEmpty,u=n.isFunction,a=n.isNode,f=n.isObject,l=n.isString,c=n.trim,h=e.namespace("config.FormValidator"),p=e.DOM._getRegExp,d=e.getClassName,v=d("form","group"),m=d("has","error"),g=d("error","field"),y=d("has","success"),b=d("success","field"),w=d("help","block"),E=d("form-validator","stack"),S='<div role="alert"></div>',x='<div class="'+[E,w].join(" ")+'"></div>';Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector),e.mix(h,{STRINGS:{DEFAULT:"Please fix {field}.",acceptFiles:"Please enter a value with a valid extension ({0}) in {field}.",alpha:"Please enter only alpha characters in {field}.",alphanum:"Please enter only alphanumeric characters in {field}.",date:"Please enter a valid date in {field}.",digits:"Please enter only digits in {field}.",email:"Please enter a valid email address in {field}.",equalTo:"Please enter the same value again in {field}.",iri:"Please enter a valid IRI in {field}.",max:"Please enter a value less than or equal to {0} in {field}.",maxLength:"Please enter no more than {0} characters in {field}.",min:"Please enter a value greater than or equal to {0} in {field}.",minLength:"Please enter at least {0} characters in {field}.",number:"Please enter a valid number in {field}.",range:"Please enter a value between {0} and {1} in {field}.",rangeLength:"Please enter a value between {0} and {1} characters long in {field}.",required:"{field} is required.",url:"Please enter a valid URL in {field}."},REGEX:{alpha:/^[a-z_]+$/i,alphanum:/^\w+$/,digits:/^\d+$/,email:new RegExp("^((([a-z]|\\d|[!#\\$%&'\\*\\+\\-\\/=\\?\\^_`{\\|}~]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])+(\\.([a-z]|\\d|[!#\\$%&'\\*\\+\\-\\/=\\?\\^_`{\\|}~]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])+)*)|((\\x22)((((\\x20|\\x09)*(\\x0d\\x0a))?(\\x20|\\x09)+)?(([\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x7f]|\\x21|[\\x23-\\x5b]|[\\x5d-\\x7e]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(\\\\([\\x01-\\x09\\x0b\\x0c\\x0d-\\x7f]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]))))*(((\\x20|\\x09)*(\\x0d\\x0a))?(\\x20|\\x09)+)?(\\x22)))@((([a-z]|\\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(([a-z]|\\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])*([a-z]|\\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])))\\.)+(([a-z]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(([a-z]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])*([a-z]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])))\\.?$","i"),iri:new RegExp("^([a-z]([a-z]|\\d|\\+|-|\\.)*):(\\/\\/(((([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(%[\\da-f]{2})|[!\\$&'\\(\\)\\*\\+,;=]|:)*@)?((\\[(|(v[\\da-f]{1,}\\.(([a-z]|\\d|-|\\.|_|~)|[!\\$&'\\(\\)\\*\\+,;=]|:)+))\\])|((\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5]))|(([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(%[\\da-f]{2})|[!\\$&'\\(\\)\\*\\+,;=])*)(:\\d*)?)(\\/(([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(%[\\da-f]{2})|[!\\$&'\\(\\)\\*\\+,;=]|:|@)*)*|(\\/((([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(%[\\da-f]{2})|[!\\$&'\\(\\)\\*\\+,;=]|:|@)+(\\/(([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(%[\\da-f]{2})|[!\\$&'\\(\\)\\*\\+,;=]|:|@)*)*)?)|((([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(%[\\da-f]{2})|[!\\$&'\\(\\)\\*\\+,;=]|:|@)+(\\/(([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(%[\\da-f]{2})|[!\\$&'\\(\\)\\*\\+,;=]|:|@)*)*)|((([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(%[\\da-f]{2})|[!\\$&'\\(\\)\\*\\+,;=]|:|@)){0})(\\?((([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(%[\\da-f]{2})|[!\\$&'\\(\\)\\*\\+,;=]|:|@)|[\\uE000-\\uF8FF]|\\/|\\?)*)?(\\#((([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(%[\\da-f]{2})|[!\\$&'\\(\\)\\*\\+,;=]|:|@)|\\/|\\?)*)?$","i"),number:/^[+\-]?(\d+([.,]\d+)?)+([eE][+-]?\d+)?$/,url:new RegExp("^(https?|ftp):\\/\\/(((([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(%[\\da-f]{2})|[!\\$&'\\(\\)\\*\\+,;=]|:)*@)?(((\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5]))|((([a-z]|\\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(([a-z]|\\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])*([a-z]|\\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])))\\.)*(([a-z]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(([a-z]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])*([a-z]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])))\\.?)(:\\d*)?)(\\/((([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(%[\\da-f]{2})|[!\\$&'\\(\\)\\*\\+,;=]|:|@)+(\\/(([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(%[\\da-f]{2})|[!\\$&'\\(\\)\\*\\+,;=]|:|@)*)*)?)?(\\?((([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(%[\\da-f]{2})|[!\\$&'\\(\\)\\*\\+,;=]|:|@)|[\\uE000-\\uF8FF]|\\/|\\?)*)?(\\#((([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(%[\\da-f]{2})|[!\\$&'\\(\\)\\*\\+,;=]|:|@)|\\/|\\?)*)?$","i")},RULES:{acceptFiles:function(t,n,r){var i=null;if(l(r)){var s=r.replace(/\./g,"").split(/,\s*|\b\s*/);s=e.Array.map(s,e.Escape.regex),i=p("[.]("+s.join("|")+")$","i")}return i&&i.test(t)},date:function(e){var t=new Date(e);return s(t)&&t!=="Invalid Date"&&!isNaN(t)},equalTo:function(t,n,r){var i=e.one(r);return i&&c(i.val(
))===t},hasValue:function(t,n){var r=this;if(e.FormValidator.isCheckable(n)){var i=n.get("name"),s=e.all(r.getFieldsByName(i));return s.filter(":checked").size()>0}return!!t},max:function(e,t,r){return n.toFloat(e)<=r},maxLength:function(e,t,n){return e.length<=n},min:function(e,t,r){return n.toFloat(e)>=r},minLength:function(e,t,n){return e.length>=n},range:function(e,t,r){var i=n.toFloat(e);return i>=r[0]&&i<=r[1]},rangeLength:function(e,t,n){var r=e.length;return r>=n[0]&&r<=n[1]},required:function(e,t,n){var r=this;return n===!0?h.RULES.hasValue.apply(r,[e,t]):!0}}});var T=e.Component.create({NAME:"form-validator",ATTRS:{boundingBox:{setter:e.one},containerErrorClass:{value:m,validator:l},containerValidClass:{value:y,validator:l},errorClass:{value:g,validator:l},extractRules:{value:!0,validator:i},fieldContainer:{value:"."+v},fieldStrings:{value:{},validator:f},labelCssClass:{validator:l,value:"control-label"},messageContainer:{getter:function(t){return e.Node.create(t).clone()},value:S},rules:{getter:function(e){var t=this;return t._rulesAlreadyExtracted||t._extractRulesFromMarkup(e),e},validator:f,value:{}},selectText:{value:!0,validator:i},showMessages:{value:!0,validator:i},showAllMessages:{value:!1,validator:i},skipValidationTargetSelector:{value:"a[class~=btn-cancel]"},stackErrorContainer:{getter:function(t){return e.Node.create(t).clone()},value:x},strings:{valueFn:function(){return h.STRINGS}},validateOnBlur:{value:!0,validator:i},validateOnInput:{value:!1,validator:i},validClass:{value:b,validator:l}},_setCustomRules:function(t){e.each(t,function(t,n){e.config.FormValidator.RULES[n]=t.condition,e.config.FormValidator.STRINGS[n]=t.errorMessage})},addCustomRules:function(e){var t=this;f(e)&&t._setCustomRules(e)},isCheckable:function(e){var t=e.get("type").toLowerCase();return t==="checkbox"||t==="radio"},EXTENDS:e.Base,prototype:{initializer:function(){var e=this;e.errors={},e._blurHandlers=null,e._fileBlurHandlers=null,e._fileInputHandlers=null,e._inputHandlers=null,e._rulesAlreadyExtracted=!1,e._stackErrorContainers={},e.bindUI(),e._uiSetValidateOnBlur(e.get("validateOnBlur")),e._uiSetValidateOnInput(e.get("validateOnInput"))},bindUI:function(){var t=this,n=t.get("boundingBox"),r=n.delegate("focus",function(){t._setARIARoles(),r.detach()},"input,select,textarea,button");t.publish({errorField:{defaultFn:t._defErrorFieldFn},validField:{defaultFn:t._defValidFieldFn},validateField:{defaultFn:t._defValidateFieldFn}}),n.on({reset:e.bind(t._onFormReset,t),submit:e.bind(t._onFormSubmit,t)}),t.after({extractRulesChange:t._afterExtractRulesChange,validateOnBlurChange:t._afterValidateOnBlurChange,validateOnInputChange:t._afterValidateOnInputChange})},addFieldError:function(e,t){var n=this,r=n.errors,i=e.get("name");r[i]||(r[i]=[]),r[i].push(t)},clearFieldError:function(e){var t=a(e)?e.get("name"):e;l(t)&&delete this.errors[t]},eachRule:function(t){var n=this;e.each(n.get("rules"),function(e,r){u(t)&&t.apply(n,[e,r])})},findFieldContainer:function(e){var t=this,n=t.get("fieldContainer");if(n)return e.ancestor(n)},focusInvalidField:function(){var e=this,t=e.get("boundingBox"),n=t.one("."+g);n&&(n=e.findFieldContainer(n),e.get("selectText")&&n.selectText(),n.focus(),n.scrollIntoView(!1),window.scrollBy(0,n.getDOM().scrollHeight))},getField:function(t){var n=this;return l(t)&&(t=n.getFieldsByName(t),t&&t.length&&!t.name&&(t=t[0])),e.one(t)},getFieldsByName:function(e){var t=this,n=t.get("boundingBox").getDOM();return n.elements[e]},getFieldError:function(e){var t=this;return t.errors[e.get("name")]},getFieldStackErrorContainer:function(e){var t=this,n=a(e)?e.get("name"):e,r=t._stackErrorContainers;return r[n]||(r[n]=t.get("stackErrorContainer")),r[n]},getFieldErrorMessage:function(t,r){var i=this,s=t.get("name"),o=i.get("fieldStrings")[s]||{},u=i.get("rules")[s],a=i._findFieldLabel(t),f=i.get("strings"),l={};a&&(l.field=a);if(r in u){var c=e.Array(u[r]);e.each(c,function(e,t){l[t]=[e].join("")})}var h=o[r]||f[r]||f.DEFAULT;return n.sub(h,l)},hasErrors:function(){var e=this;return!o(e.errors)},highlight:function(t,n){var r=this,i,s,o;t&&(i=r.findFieldContainer(t),s=t.get("name"),this.validatable(t)?(o=e.all(r.getFieldsByName(s)),o.each(function(e){r._highlightHelper(e,r.get("errorClass"),r.get("validClass"),n)}),i&&r._highlightHelper(i,r.get("containerErrorClass"),r.get("containerValidClass"),n)):t.val()||r.resetField(s))},normalizeRuleValue:function(e,t){var n=this;return u(e)?e.apply(n,[t]):e},unhighlight:function(e){var t=this;t.highlight(e,!0)},printStackError:function(t,n,r){var i=this;i.get("showAllMessages")||(e.Array.indexOf(r,"required")!==-1?r=["required"]:r=r.slice(0,1)),n.empty(),e.Array.each(r,function(e){var r=i.getFieldErrorMessage(t,e),s=i.get("messageContainer").addClass(e);n.append(s.html(r))})},resetAllFields:function(){var e=this;e.eachRule(function(t,n){e.resetField(n)})},resetField:function(t){var n=this,r,i,s,o;r=a(t)?t.get("name"):t,r&&(i=n.get("rules")[r],i&&(n.clearFieldError(r),o=n.getFieldStackErrorContainer(r),o.remove(),s=e.all(n.getFieldsByName(r)),s.each(function(e){n.resetFieldCss(e),e.removeAttribute("aria-errormessage"),e.removeAttribute("aria-invalid")})))},resetFieldCss:function(t){var n=this,r=n.findFieldContainer(t),i=function(t,r){t&&e.each(r,function(e){t.removeClass(n.get(e))})};i(t,["validClass","errorClass"]),i(r,["containerValidClass","containerErrorClass"])},validatable:function(e){var t=this,n=!1,r=t.get("rules")[e.get("name")];return r&&(n=t.normalizeRuleValue(r.required,e)||h.RULES.hasValue.apply(t,[e.val(),e])),!!n},validate:function(){var e=this;e.eachRule(function(t,n){e.validateField(n)}),e.focusInvalidField()},validateField:function(e){var t,n;this.resetField(e),t=l(e)?this.getField(e):e,a(t)&&(n=this.validatable(t),n&&this.fire("validateField",{validator:{field:t}}))},_afterExtractRulesChange:function(e){var t=this;t._uiSetExtractRules(e.newVal)},_afterValidateOnBlurChange:function(e){var t=this;t._uiSetValidateOnBlur(e.newVal)},_afterValidateOnInputChange
:function(e){var t=this;t._uiSetValidateOnInput(e.newVal)},_defErrorFieldFn:function(t){var n=this,r,i,s,o,u;i=n.get("labelCssClass"),u=t.validator,r=u.field,n.highlight(r);if(n.get("showMessages")){o=r,s=n.getFieldStackErrorContainer(r),e.FormValidator.isCheckable(o)&&(o=r.ancestor("."+m).get("lastChild"));var a=r.get("id")+"Helper";s.set("id",a),o.placeAfter(s),n.printStackError(r,s,u.errors)}},_defValidFieldFn:function(e){var t=this,n=e.validator.field;t.unhighlight(n)},_defValidateFieldFn:function(t){var n=this,r=t.validator.field,i=n.get("rules")[r.get("name")];e.each(i,function(e,t){var i=h.RULES[t],s=c(r.val());e=n.normalizeRuleValue(e,r),u(i)&&!i.apply(n,[s,r,e])&&n.addFieldError(r,t)});var s=n.getFieldError(r);s?n.fire("errorField",{validator:{field:r,errors:s}}):n.fire("validField",{validator:{field:r}})},_findFieldLabel:function(t){var n="."+this.get("labelCssClass"),r=e.one("label[for="+t.get("id")+"]")||t.ancestor().previous(n);r||(r=t.ancestor("."+m),r&&(r=r.one(n)));if(r)return r.get("text")},_highlightHelper:function(e,t,n,r){var i=this;r?(e.removeClass(t).addClass(n),n===b&&(e.removeAttribute("aria-errormessage"),e.removeAttribute("aria-invalid"))):(e.removeClass(n).addClass(t),t===g&&(e.set("aria-errormessage",e.get("id")+"Helper"),e.set("aria-invalid",!0)))},_extractRulesFromMarkup:function(e){var t=this,n=t.get("boundingBox").getDOM(),i=n.elements,s=r.keys(h.RULES),o=s.join("|"),u=p("field-("+o+")","g"),a,f,l=[],c=function(e,t){l.push(t)};for(a=0,f=i.length;a<f;a++){var d=i[a],v=d.name;d.className.replace(u,c);if(l.length){var m=e[v],g,y;m||(m={},e[v]=m);for(g=0,y=l.length;g<y;g++){var b=l[g];b in m||(m[b]=!0)}l.length=0}}t._rulesAlreadyExtracted=!0},_onFieldInput:function(e){var t=this,n=t.get("skipValidationTargetSelector");(!e.relatedTarget||!e.relatedTarget.getDOMNode().matches(n))&&setTimeout(function(){t.validateField(e.target)},300)},_onFormSubmit:function(e){var t=this,n={validator:{formEvent:e}};t.validate(),t.hasErrors()?(n.validator.errors=t.errors,t.fire("submitError",n),e.halt()):t.fire("submit",n)},_onFormReset:function(){var e=this;e.resetAllFields()},_setARIARoles:function(){var e=this;e.eachRule(function(t,n){var r=e.getField(n),i=e.normalizeRuleValue(t.required,r);i&&r&&!r.attr("aria-required")&&r.attr("aria-required",!0)})},_uiSetExtractRules:function(e){var t=this;e&&t._extractRulesFromMarkup(t.get("rules"))},_uiSetValidateOnInput:function(e){var t=this,n=t.get("boundingBox");e?(t._inputHandlers||(t._inputHandlers=n.delegate("input",t._onFieldInput,'input:not([type="file"]),select,textarea,button',t)),t._fileInputHandlers||(t._fileInputHandlers=n.delegate("change",t._onFieldInput,'input[type="file"]',t))):(t._inputHandlers&&t._inputHandlers.detach(),t._fileInputHandlers&&t._fileInputHandlers.detach())},_uiSetValidateOnBlur:function(e){var t=this,n=t.get("boundingBox");e?(t._blurHandlers||(t._blurHandlers=n.delegate("blur",t._onFieldInput,'input:not([type="file"]),select,textarea,button',t)),t._fileBlurHandlers||(t._fileBlurHandlers=n.delegate("change",t._onFieldInput,'input[type="file"]',t))):(t._blurHandlers&&t._blurHandlers.detach(),t._fileBlurHandlers&&t._fileBlurHandlers.detach())}}});e.each(h.REGEX,function(e,t){h.RULES[t]=function(e){return h.REGEX[t].test(e)}}),e.FormValidator=T},"3.1.0-deprecated.73",{requires:["escape","selector-css3","node-event-delegate","aui-node","aui-component","aui-event-input"]});
