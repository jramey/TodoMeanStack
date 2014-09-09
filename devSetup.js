db = connect("localhost/devs");
db.dropDatabase()
db = db.getSiblingDB('devs');
db.createCollection("devCollection");

var devs = [
	{
		first: "Jordan",
		last: "Ramey", 
		email: "jramey@qt.com"
	}, 
	{
		first: "Keith",
		last: "Williams", 
		email: "kwillaims@qt.com"
	}, 
	{
		first: "Tim",
		last: "Allen", 
		email: "tallen@qt.com"
	}, 
	{
		first: "Kevin",
		last: "Poston", 
		email: "kposton@qt.com"
	},
		{
		first: "Brandon",
		last: "Griffin", 
		email: "bgriffin@qt.com"
	}, 
	{
		first: "Allen",
		last: "Tuggle", 
		email: "dewayne@qt.com"
	},
		{
		first: "Elliott",
		last: "Fouts", 
		email: "efoutsqt.com"
	}, 
	{
		first: "Karl",
		last: "Speer", 
		email: "kspeerqt.com"
	},
];

db.devCollection.insert( devs );
print("Test data has been inserted.");