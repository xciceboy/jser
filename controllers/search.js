"use strict";

/**
 * 活动控制器
 **/
var SearchController = module.exports = function () { };

/**
 * 默认 action
 **/
SearchController.prototype.index = function () {
    var self = this;
    var keyword = self.context.data('keyword');
    self.render("search.html", {
        keyword: keyword
    });

};