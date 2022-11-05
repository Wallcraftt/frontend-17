const firstButton = document.querySelector(".btn")

firstButton.addEventListener("click", (e)=>{
  firstButton.remove()
})

// task 2)

const firstImg = document.createElement("img")
firstImg.scr = 'https://picsum.photos/id/1/200/300'

const addBody = document.querySelector('body')
addBody.appendChild(firstImg)

// task 3)
const characters = [
	{
		first_name: "Harry",
		last_name: "Potter",
		house: "Gryffindor",
		image: "https://hp-api.herokuapp.com/images/harry.jpg",
		actor: "Daniel Radcliffe",
	},
	{
		first_name: "Hermione",
		last_name: "Granger",
		house: "Gryffindor",
		image: "https://hp-api.herokuapp.com/images/hermione.jpeg",
		actor: "Emma Watson",
	},
	{
		first_name: "Ron",
		last_name: "Weasley",
		house: "Gryffindor",
		image: "https://hp-api.herokuapp.com/images/ron.jpg",
		actor: "Rupert Grint",
	},
	{
		first_name: "Draco",
		last_name: "Malfoy",
		house: "Slytherin",
		image: "https://hp-api.herokuapp.com/images/draco.jpg",
		actor: "Tom Felton",
	},
];

function renderCharracters (arr){
  const renderChar = characters.map(char=>{
    return `
      <div>
        <h3> Name:  ${char.first_name}</h3>
        <h3>Last name:  ${char.last_name}</h3>
        <p>House:  ${char.house}</p>
        <img src="${char.image}" alt="" class="image-box">
      </div>
    `
  })
 
  const div = document.querySelector("#characters-list")
  div.innerHTML = renderChar.join("")
}
renderCharracters()