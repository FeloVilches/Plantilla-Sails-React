module.exports = {

	index: function(req, res){

		VisitCounterService.incrementCount();

		res.view('index', { visitCount: VisitCounterService.getCount() });

	},

	redirect: function(req, res){

		res.redirect('/spa');

	}
	
};
