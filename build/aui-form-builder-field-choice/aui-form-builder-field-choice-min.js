YUI.add("aui-form-builder-field-choice",function(e,t){e.FormBuilderFieldChoice=e.Base.create("form-builder-field-choice",e.FormFieldChoice,[e.FormBuilderFieldBase],{_fillSettings:function(){this._settings.push({attrName:"required",editor:new e.BooleanDataEditor({label:"Required"})},{attrName:"type",editor:new e.TabsDataEditor({tabs:[{label:"Radio button",value:e.FormFieldChoice.TYPES.RADIO},{label:"Checkbox",value:e.FormFieldChoice.TYPES.CHECKBOX},{label:"List Select",value:e.FormFieldChoice.TYPES.LIST}]})},{attrName:"options",editor:new e.OptionsDataEditor({required:!0})},{attrName:"otherOption",editor:new e.BooleanDataEditor({label:'Add an option called "Other"'})})},_fillAdvancedSettings:function(){this._advancedSettings=[{attrName:"name",footerLabel:"Name",editor:new e.TextDataEditor({label:"Name"})}]}})},"3.0.3-deprecated.95",{requires:["aui-boolean-data-editor","aui-options-data-editor","aui-tabs-data-editor","aui-form-builder-field-base","aui-form-field-choice"]});
