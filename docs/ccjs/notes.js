


records - an object containing several individual albums
id - a number representing a specific album in the records object
prop - a string representing the name of the album’s property to update
value - a string containing the information used to update the album’s property
Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.



Your function must always return the entire records object.
If value is an empty string, delete the given prop property from the album.


If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
If prop is tracks and value isn't an empty string, but the album doesn't have a tracks property, create an empty array and add value to it.
If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
function updateRecords(records, id, prop, value) {
	if (value=="") {
		delete prop;
	} else if (prop != id.tracks && value != "") {
		id.prop == value;
	} else if (prop == id.tracks && value != "" && hasOwnProperty(id.tracks) == false) {
		let id.tracks = [];
	  id.tracks.push(item1, item2);
	} else if (prop == id.tracks && value != "") {
	  id.tracks.push(item1, item2)
	}
	return records
}