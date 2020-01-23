if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-linkedset/aui-linkedset.js']) {
   __coverage__['build/aui-linkedset/aui-linkedset.js'] = {"path":"build/aui-linkedset/aui-linkedset.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":25},"end":{"line":1,"column":44}}},"2":{"name":"(anonymous_2)","line":30,"loc":{"start":{"line":30,"column":17},"end":{"line":30,"column":28}}},"3":{"name":"(anonymous_3)","line":45,"loc":{"start":{"line":45,"column":15},"end":{"line":45,"column":31}}},"4":{"name":"(anonymous_4)","line":83,"loc":{"start":{"line":83,"column":18},"end":{"line":83,"column":34}}},"5":{"name":"(anonymous_5)","line":111,"loc":{"start":{"line":111,"column":12},"end":{"line":111,"column":23}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":128,"column":53}},"2":{"start":{"line":19,"column":0},"end":{"line":123,"column":7}},"3":{"start":{"line":31,"column":8},"end":{"line":31,"column":28}},"4":{"start":{"line":33,"column":8},"end":{"line":33,"column":30}},"5":{"start":{"line":34,"column":8},"end":{"line":34,"column":31}},"6":{"start":{"line":46,"column":8},"end":{"line":50,"column":18}},"7":{"start":{"line":52,"column":8},"end":{"line":66,"column":9}},"8":{"start":{"line":53,"column":12},"end":{"line":57,"column":14}},"9":{"start":{"line":59,"column":12},"end":{"line":59,"column":44}},"10":{"start":{"line":61,"column":12},"end":{"line":63,"column":13}},"11":{"start":{"line":62,"column":16},"end":{"line":62,"column":44}},"12":{"start":{"line":65,"column":12},"end":{"line":65,"column":33}},"13":{"start":{"line":70,"column":8},"end":{"line":70,"column":26}},"14":{"start":{"line":72,"column":8},"end":{"line":72,"column":64}},"15":{"start":{"line":84,"column":8},"end":{"line":87,"column":34}},"16":{"start":{"line":89,"column":8},"end":{"line":89,"column":29}},"17":{"start":{"line":91,"column":8},"end":{"line":93,"column":9}},"18":{"start":{"line":92,"column":12},"end":{"line":92,"column":45}},"19":{"start":{"line":94,"column":8},"end":{"line":96,"column":9}},"20":{"start":{"line":95,"column":12},"end":{"line":95,"column":46}},"21":{"start":{"line":100,"column":8},"end":{"line":100,"column":26}},"22":{"start":{"line":102,"column":8},"end":{"line":102,"column":67}},"23":{"start":{"line":112,"column":8},"end":{"line":114,"column":24}},"24":{"start":{"line":116,"column":8},"end":{"line":119,"column":9}},"25":{"start":{"line":117,"column":12},"end":{"line":117,"column":40}},"26":{"start":{"line":118,"column":12},"end":{"line":118,"column":32}},"27":{"start":{"line":121,"column":8},"end":{"line":121,"column":22}},"28":{"start":{"line":125,"column":0},"end":{"line":125,"column":24}}},"branchMap":{"1":{"line":52,"type":"if","locations":[{"start":{"line":52,"column":8},"end":{"line":52,"column":8}},{"start":{"line":52,"column":8},"end":{"line":52,"column":8}}]},"2":{"line":61,"type":"if","locations":[{"start":{"line":61,"column":12},"end":{"line":61,"column":12}},{"start":{"line":61,"column":12},"end":{"line":61,"column":12}}]},"3":{"line":91,"type":"if","locations":[{"start":{"line":91,"column":8},"end":{"line":91,"column":8}},{"start":{"line":91,"column":8},"end":{"line":91,"column":8}}]},"4":{"line":94,"type":"if","locations":[{"start":{"line":94,"column":8},"end":{"line":94,"column":8}},{"start":{"line":94,"column":8},"end":{"line":94,"column":8}}]}},"code":["(function () { YUI.add('aui-linkedset', function (A, NAME) {","","/**"," * The Collection Utility"," *"," * @module aui-collection"," * @submodule aui-linkedset"," */","","/**"," * A base class for LinkedSet."," *"," * @class A.LinkedSet"," * @extends A.Set"," * @param {Object} config Object literal specifying widget configuration"," *     properties."," * @constructor"," */","var LinkedSet = A.Base.create('linkedset', A.Set, [], {","    _header: null,","    _entries: null,","","    /**","     * Construction logic executed during `A.LinkedSet` instantiation.","     * Lifecycle.","     *","     * @method initializer","     * @protected","     */","    initializer: function() {","        var instance = this;","","        instance._header = {};","        instance._entries = {};","    },","","    /**","     * Implements the `add` custom event behavior. Appends the specified element","     * to the end of this linked set.","     *","     * @method _defAddFn","     * @param event","     * @protected","     */","    _defAddFn: function(event) {","        var instance = this,","            value = event.value,","            hash = instance._map._getHash(value),","            header = instance._header,","            entry;","","        if (!instance.has(value, hash)) {","            entry = {","                after: header.after,","                before: header,","                value: value","            };","","            instance._entries[hash] = entry;","","            if (header.after) {","                header.after.before = entry;","            }","","            header.after = entry;","        }","","        // The hash was already calculated, pass it to avoid recompute it","        // during remove chain. Good to improve performance on linear cases","        event.hash = hash;","","        A.LinkedSet.superclass._defAddFn.apply(this, arguments);","    },","","    /**","     * Implements the `remove` custom event behavior. Removes the element and","     * reorders the linked set.","     *","     * @method _defRemoveFn","     * @param event","     * @protected","     */","    _defRemoveFn: function(event) {","        var instance = this,","            hash = instance._map._getHash(event.value),","            entries = instance._entries,","            entry = entries[hash];","","        delete entries[hash];","","        if (entry.before) {","            entry.before.after = entry.after;","        }","        if (entry.after) {","            entry.after.before = entry.before;","        }","","        // The hash was already calculated, pass it to avoid recompute it","        // during remove chain. Good to improve performance on linear cases","        event.hash = hash;","","        A.LinkedSet.superclass._defRemoveFn.apply(this, arguments);","    },","","    /**","     * Gets a list view of the values contained in this linked set.","     *","     * @method values","     * @return {Array}","     */","    values: function() {","        var instance = this,","            entry = instance._header.after,","            values = [];","","        while (entry) {","            values.unshift(entry.value);","            entry = entry.after;","        }","","        return values;","    }","}, {});","","A.LinkedSet = LinkedSet;","","","}, '3.1.0-deprecated.73', {\"requires\": [\"aui-set\"]});","","}());"]};
}
var __cov_BESqRl6j_ax2jWiChQgtTg = __coverage__['build/aui-linkedset/aui-linkedset.js'];
__cov_BESqRl6j_ax2jWiChQgtTg.s['1']++;YUI.add('aui-linkedset',function(A,NAME){__cov_BESqRl6j_ax2jWiChQgtTg.f['1']++;__cov_BESqRl6j_ax2jWiChQgtTg.s['2']++;var LinkedSet=A.Base.create('linkedset',A.Set,[],{_header:null,_entries:null,initializer:function(){__cov_BESqRl6j_ax2jWiChQgtTg.f['2']++;__cov_BESqRl6j_ax2jWiChQgtTg.s['3']++;var instance=this;__cov_BESqRl6j_ax2jWiChQgtTg.s['4']++;instance._header={};__cov_BESqRl6j_ax2jWiChQgtTg.s['5']++;instance._entries={};},_defAddFn:function(event){__cov_BESqRl6j_ax2jWiChQgtTg.f['3']++;__cov_BESqRl6j_ax2jWiChQgtTg.s['6']++;var instance=this,value=event.value,hash=instance._map._getHash(value),header=instance._header,entry;__cov_BESqRl6j_ax2jWiChQgtTg.s['7']++;if(!instance.has(value,hash)){__cov_BESqRl6j_ax2jWiChQgtTg.b['1'][0]++;__cov_BESqRl6j_ax2jWiChQgtTg.s['8']++;entry={after:header.after,before:header,value:value};__cov_BESqRl6j_ax2jWiChQgtTg.s['9']++;instance._entries[hash]=entry;__cov_BESqRl6j_ax2jWiChQgtTg.s['10']++;if(header.after){__cov_BESqRl6j_ax2jWiChQgtTg.b['2'][0]++;__cov_BESqRl6j_ax2jWiChQgtTg.s['11']++;header.after.before=entry;}else{__cov_BESqRl6j_ax2jWiChQgtTg.b['2'][1]++;}__cov_BESqRl6j_ax2jWiChQgtTg.s['12']++;header.after=entry;}else{__cov_BESqRl6j_ax2jWiChQgtTg.b['1'][1]++;}__cov_BESqRl6j_ax2jWiChQgtTg.s['13']++;event.hash=hash;__cov_BESqRl6j_ax2jWiChQgtTg.s['14']++;A.LinkedSet.superclass._defAddFn.apply(this,arguments);},_defRemoveFn:function(event){__cov_BESqRl6j_ax2jWiChQgtTg.f['4']++;__cov_BESqRl6j_ax2jWiChQgtTg.s['15']++;var instance=this,hash=instance._map._getHash(event.value),entries=instance._entries,entry=entries[hash];__cov_BESqRl6j_ax2jWiChQgtTg.s['16']++;delete entries[hash];__cov_BESqRl6j_ax2jWiChQgtTg.s['17']++;if(entry.before){__cov_BESqRl6j_ax2jWiChQgtTg.b['3'][0]++;__cov_BESqRl6j_ax2jWiChQgtTg.s['18']++;entry.before.after=entry.after;}else{__cov_BESqRl6j_ax2jWiChQgtTg.b['3'][1]++;}__cov_BESqRl6j_ax2jWiChQgtTg.s['19']++;if(entry.after){__cov_BESqRl6j_ax2jWiChQgtTg.b['4'][0]++;__cov_BESqRl6j_ax2jWiChQgtTg.s['20']++;entry.after.before=entry.before;}else{__cov_BESqRl6j_ax2jWiChQgtTg.b['4'][1]++;}__cov_BESqRl6j_ax2jWiChQgtTg.s['21']++;event.hash=hash;__cov_BESqRl6j_ax2jWiChQgtTg.s['22']++;A.LinkedSet.superclass._defRemoveFn.apply(this,arguments);},values:function(){__cov_BESqRl6j_ax2jWiChQgtTg.f['5']++;__cov_BESqRl6j_ax2jWiChQgtTg.s['23']++;var instance=this,entry=instance._header.after,values=[];__cov_BESqRl6j_ax2jWiChQgtTg.s['24']++;while(entry){__cov_BESqRl6j_ax2jWiChQgtTg.s['25']++;values.unshift(entry.value);__cov_BESqRl6j_ax2jWiChQgtTg.s['26']++;entry=entry.after;}__cov_BESqRl6j_ax2jWiChQgtTg.s['27']++;return values;}},{});__cov_BESqRl6j_ax2jWiChQgtTg.s['28']++;A.LinkedSet=LinkedSet;},'3.1.0-deprecated.73',{'requires':['aui-set']});
