var Filter = module.exports = function () { };

Filter.prototype.onMvcHandle = function (context, next) {
	var self = this;
    context.session.get('user', function (user) {
		context.user = user;
		if (!context.user && self.requiredHas(context, 'signed')) {
			context.redirect('/signin');
		} else {
			next();
		}
	});
};

Filter.prototype.requiredHas = function (context, name) {
	return context.route &&
		context.route.required &&
		context.route.required.some(function (item) {
			return item == name;
		});
};