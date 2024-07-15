export default function (amoWidget) {
  amoWidget.callbacks = {
    settings: function () { },
    init: function () {
      console.log('init')
      return true;
    },
    bind_actions: function () {
      return true;
    },
    render: function () {
      console.log('render')
      return true;
    },
    dpSettings: function () { },
    advancedSettings: function () { },
    destroy: function () { },
    contacts: {
      selected: function () { }
    },
    onSalesbotDesignerSave: function (handler_code, params) { },
    leads: {
      selected: function () { }
    },
    todo: {
      selected: function () { }
    },
    onSave: function () { return true; },
    onAddAsSource: function (pipeline_id) { }
  };
  return amoWidget
}
