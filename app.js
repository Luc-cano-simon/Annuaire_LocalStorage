// console.log("Coucou");


// var annuaire = 
// [
// {
// 	Nom: 'Ahmed',
// 	Prenom: 'Dania',
// 	Email:'94daniak@live.fr',
// 	Ville: 'Auch',
// 	Téléphone: '06.18.86.01.78'

// },

// {
// 	Nom: 'Badji',
// 	Prenom: 'Adeline',
// 	Email:'adeline.annuaire@gmail.com',
// 	Ville: 'Auch',
// 	Téléphone: '06.84.62.33.30'
// },

// {
// 	Nom: 'Cano-Simon',
// 	Prenom: 'Luc',
// 	Email:'luc.cano@hotmail.fr',
// 	Ville: 'Fleurance',
// 	Téléphone: '06.89.02.63.87'
// },

// {
// 	Nom: 'Chirot',
// 	Prenom: 'Aurelien',
// 	Email:'achirot@simplon.co',
// 	Ville: 'Auch',
// 	Téléphone: ' 06.77.13.21.22'
// },

// {
// 	Nom: 'Clerc',
// 	Prenom: 'Nathan',
// 	Email:'clerc-nathan@hotmail.fr',
// 	Ville: 'Beaupuy',
// 	Téléphone: '06 95 65 08 23'
// },

// {
// 	Nom: 'Gatien',
// 	Prenom: 'Océane',
// 	Email:'ogatien@simplon.co',
// 	Ville: 'Polastron',
// 	Téléphone: '06.42.48.98.08'
// },

// {
// 	Nom: 'Gouzenne',
// 	Prenom: 'Dylan',
// 	Email:'dylan.gouzenne@gmail.com',
// 	Ville: 'Marciac',
// 	Téléphone: '06.69.70.58.13'
// },

// {
// 	Nom: 'Kurowski',
// 	Prenom: 'Alexandra',
// 	Email:'alexandrakuro@gmail.com',
// 	Ville: 'Auch',
// 	Téléphone: '06.61.52.19.76'
// },

// {
// 	Nom: 'Lasportes',
// 	Prenom: 'Nicolas',
// 	Email:'nicolas.lasportes@gmail.com',
// 	Ville: 'Saint Sauvy',
// 	Téléphone: '06.95.57.69.37'
// },

// {
// 	Nom: 'Lupi',
// 	Prenom: 'Marc',
// 	Email:'marc.lupi@protonmail.com',
// 	Ville: 'Auch',
// 	Téléphone: '07.82.10.80.37'
// },

// {
// 	Nom: 'Morais',
// 	Prenom: 'Helder',
// 	Email:'morais.helder@hotmail.fr',
// 	Ville: 'Auch',
// 	Téléphone: '06.15.77.07.42'
// },

// {
// 	Nom: 'Oliveira Ribeiro',
// 	Prenom: 'Marco',
// 	Email:'marcorib1@hotmail.com',
// 	Ville: 'Auch',
// 	Téléphone: '06.15.28.88.63'
// },

// {
// 	Nom: 'Philippe',
// 	Prenom: 'Jonathan',
// 	Email:'philippe1jonathan@gmail.com',
// 	Ville: 'Aubiet',
// 	Téléphone: '06.12.39.50.35'
// },

// {
// 	Nom: 'Sandras',
// 	Prenom: 'Benjamin',
// 	Email:'bensand77@hotmail.fr',
// 	Ville: 'Auch',
// 	Téléphone: '07.83.86.63.53'
// },

// {
// 	Nom: 'Segond',
// 	Prenom: 'Zakia',
// 	Email:'segondzakia@live.fr',
// 	Ville: 'Auch',
// 	Téléphone: '07.88.75.74.92'
// },

// {
// 	Nom: 'Taha',
// 	Prenom: 'Max',
// 	Email:'tahamohamedfr@gmail.com',
// 	Ville: 'Toulouse',
// 	Téléphone: '07.53.30.17.28'
// },

// {
// 	Nom: 'Zarrik',
// 	Prenom: 'Houssine',
// 	Email:'houssine.zarrik@orange.fr',
// 	Ville: 'Castera-Verduzan',
// 	Téléphone: '07.85.70.24.93'
// },
// ];



$(".table").hide()

function afficherTab(){

	var annuaire = JSON.parse(window.localStorage.getItem("annuaire"));
	// $(".table").empty();
	// $(".table").show();
	if (annuaire == null)
	{
		var annuaire = [] ;
	}
	else{
		for (var i = 0; i<annuaire.length; i++)
		{
			$(".table").show();
		}
	}
};

$('#afficher').click(function()

{
	afficherTab();
	$(".table").show();
	
})




var annuaire = JSON.parse(window.localStorage.getItem("contact"));

function ajouterElement()
{
	var annuaire = JSON.parse(window.localStorage.getItem("contact"));
	$(".table").empty();
	if (annuaire == null) 
	{
		var annuaire = [];
	}
	annuaire.push({Nom : $("#nom").val(),Prenom : $("#prenom").val(), Email : $("#email").val(), Ville : $("#ville").val(), Téléphone: $("telephone").val()});
	for (var i = 0; i < annuaire.length; i++)
		window.localStorage.setItem("contact", JSON.stringify(annuaire));
	{
		$(".table").show();
	}
	console.log(annuaire);
};


$("#send").click(function()
{
	ajouterElement();
	alert('Vous êtes ajoutés aux contact merci de votre visite');
	$(".table").show();
	console.log(annuaire);
});


//fonction anti reload

// $("#send").click(function()
// {
// 	annuaire.preventDefault();
// 	$(".table").show();
// });















//fonction afficher le formulaire d'inscription 

$("#formAdd").hide()

$('#afficherF').click(function()

{
	
	$("#formAdd").show();
})


//fonction recherche

$('.recherche').click(function()
{
	$(".table").show();
	$(".table").empty();
	
	for(i=0; i < annuaire.length;i++)
	{
		var trouver=$(".search").val().toUpperCase();
		var comparer=annuaire[i].Nom.toUpperCase();
		var comparer2=annuaire[i].Prenom.toUpperCase();
		if (trouver==comparer || trouver == comparer2) 
		{ 	
			$(".table").append('<tr><td>'+annuaire[i].Nom+'</td><td>'+annuaire[i].Prenom+'</td><td>'+annuaire[i].Email+'</td><td>'+annuaire[i].Ville+'</td><td>'+annuaire[i].Téléphone+'</td></tr>;')
			return false;

		}
	}		
});



//fonction sans local storage =>

		

//ajouter un membre à l'annuaire

// function ajouterElement()
// {
	
// 	annuaire.push({Nom : $("#nom").val(),Prenom : $("#prenom").val(), Ville : $("#ville").val(), Email : $("#email").val(), Téléphone: $("telephone").val()});
// 	$(".table").empty();

// 	for (var i = 0; i < annuaire.length; i++)
// 	{
// 		$(".table").append('<tr><td>'+annuaire[i].Nom+'</td><td>'+annuaire[i].Prenom+'</td><td>'+annuaire[i].Email+'</td><td>'+annuaire[i].Ville+'</td><td>'+annuaire[i].Téléphone+'</td></tr>;')
		
// 	}

// };


//fonction click pour l'ajout de membre	 et anti reload

// $("#send").click(function()
// {
// 	ajouterElement();
// 	$(".table").show();
// 	alert('annuaire ajouté Merci et à bientôt');
// 	console.log(annuaire);
// });


// $("#send").click(function(table)
// {
// 	table.preventDefault();
// 	$(".table").show();
// });
