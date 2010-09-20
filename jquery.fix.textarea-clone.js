// Textarea clone() bug workaround | Spencer Tipping
// Licensed under the terms of the MIT source code license

// Motivation.
// jQuery's clone() method works in most cases, but it fails to copy the value of textareas. This patch replaces jQuery's clone() method with a wrapper that fills in textarea values.

(function (original) {
  $.fn.clone = function () {
    var       result = original.apply (this, arguments),
        my_textareas = this.find('textarea'),
    result_textareas = result.find('textarea');

    for (var i = 0, l = my_textareas.length; i < l; ++i)
      $(result_textareas[i]).val ($(my_textareas[i]).val());

    return result;
  };
}) ($.fn.clone);

// Generated by SDoc 