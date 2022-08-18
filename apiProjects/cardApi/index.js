//First we need to install our modules Express, request, ejs
//Build a basic server
const express = require('express');
const request = require('request')
const app = express();
const PORT = process.env.PORT || 3000;
/* https://deckofcardsapi.com/ */


// Set the view engine allows us to leave off the .ejs when rendering
app.set('view engine', 'ejs');
app.use(express.static('public'));

/* Import our helpers, Destructing - aka unpacking from object  */
const { dealCards, sortHand, updateValue } = require('./helpers/dealer');

// Base url for the api
let baseURL = `https://deckofcardsapi.com/api/deck/`

/* Root Route */
app.get('/', (req, res, next) => {
    // Number of decks we want to draw
    let deck_count = 2
    // Build our endpoint
    let endpoint = `${baseURL}new/shuffle/?deck_count=${deck_count}`
    // Make the request to call our data
    request(endpoint, function (error, response, body) {
		/* IF there is no error and the resonse we get is 200 (status code) - do something else, lets handle the error*/
		if (!error && response.statusCode == 200) {
			/* Need to parse our data */
			let parsedData = JSON.parse(body);
			/* Can see what data we've gotten by logging our data */
			//console.log(parsedData)
			// Add the deck_id to the req object
			req.deck_id = parsedData.deck_id
			// Call next which will find the next similar route and run it, this works as long as we don't kill the req, res cycle
			next()
		} else {
			/* Want do do something more here maybe create an error page and render that?  */
			res.render('error', { error: "Oops something went wrong try again"})
		}
	});
})



// Now we have deck id, we called next
// This route will run and we will have access to req object where we stored the deck_id
// We need to draw cards now and send them to the home.ejs
app.get('/', (req, res) => {

	//can change draw count here instead of directly in our endpoint
	let draw_count = 10

	/* Get two decks of cards */
	let endpoint = `https://deckofcardsapi.com/api/deck/${req.deck_id}/draw/?count=${draw_count}`

	// Make the call to get our cards
	request(endpoint, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			let parsedData = JSON.parse(body);
			//console.log("OG Data", parsedData)
			/*   
			//BEFORE SORTING ALGO AND DEALER ALGO          
			let player = parsedData.cards.slice(0, 5)
			console.log("Player 1", player, "Computer",computer)
			let computer = parsedData.cards.slice(5, 10)
			res.render('home.ejs', { player, computer}) */

			//console.log(parsedData)
			//AFTER ALGOS

			// Update card values
			var updated = updateValue(parsedData.cards)
			//console.log("Update values....", updated)

			// Pass our updated array of data to the deal cards function
			let {player, computer} = dealCards(updated)
			//console.log("Player Hand is...", player)
			//console.log("Computer Hand is...", computer)

			// Pass player hand, comp hand, and sortHand function 
			res.render('home', {player, computer, sortHand})

		} else {
			
			console.log(error)
			res.render('error', { error: "Oops something went wrong try again"})
		}
	})

})

/* Listener */
app.listen(PORT, () => { console.log(`App listening on port: `, PORT) })

