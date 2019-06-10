import { Component } from "@angular/core";

@Component({
  selector: "contact-list",
  templateUrl: "./contactList.component.html"
})
export class ContactList {
  contactList = [
    {
      firstname: "Claudia",
      lastname: "Wood"
    },
    {
      firstname: "Melissa",
      lastname: "Ramsey"
    },
    {
      firstname: "Lani",
      lastname: "Hodge"
    },
    {
      firstname: "Iris",
      lastname: "Manning"
    },
    {
      firstname: "Brianna",
      lastname: "Welch"
    },
    {
      firstname: "Noelani",
      lastname: "Suarez"
    },
    {
      firstname: "Keelie",
      lastname: "Douglas"
    },
    {
      firstname: "Alfreda",
      lastname: "Lopez"
    },
    {
      firstname: "Natalie",
      lastname: "Banks"
    },
    {
      firstname: "Kaye",
      lastname: "Stevens"
    },
    {
      firstname: "Anika",
      lastname: "Donovan"
    },
    {
      firstname: "Charissa",
      lastname: "Foley"
    },
    {
      firstname: "Jaden",
      lastname: "Morrow"
    },
    {
      firstname: "Cleo",
      lastname: "Tyler"
    },
    {
      firstname: "Lana",
      lastname: "Nichols"
    },
    {
      firstname: "Lani",
      lastname: "Booth"
    },
    {
      firstname: "Tasha",
      lastname: "Atkins"
    },
    {
      firstname: "Jayme",
      lastname: "Mckinney"
    },
    {
      firstname: "Jocelyn",
      lastname: "Sanford"
    },
    {
      firstname: "Doris",
      lastname: "Griffith"
    },
    {
      firstname: "Xaviera",
      lastname: "Becker"
    },
    {
      firstname: "Faith",
      lastname: "Mckinney"
    },
    {
      firstname: "Shafira",
      lastname: "Shepherd"
    },
    {
      firstname: "Kylan",
      lastname: "Huff"
    },
    {
      firstname: "Francesca",
      lastname: "Copeland"
    },
    {
      firstname: "Simone",
      lastname: "Mccarty"
    },
    {
      firstname: "Illiana",
      lastname: "Stephens"
    },
    {
      firstname: "Olympia",
      lastname: "Clements"
    },
    {
      firstname: "Lillian",
      lastname: "Kemp"
    },
    {
      firstname: "Mia",
      lastname: "Rosales"
    },
    {
      firstname: "Charlotte",
      lastname: "Mcdowell"
    },
    {
      firstname: "Emma",
      lastname: "Head"
    },
    {
      firstname: "Virginia",
      lastname: "Howe"
    },
    {
      firstname: "Lunea",
      lastname: "Kirby"
    },
    {
      firstname: "Courtney",
      lastname: "Orr"
    },
    {
      firstname: "Bell",
      lastname: "Reed"
    },
    {
      firstname: "Aimee",
      lastname: "Stout"
    },
    {
      firstname: "Stacey",
      lastname: "Gross"
    },
    {
      firstname: "Carol",
      lastname: "Burnett"
    },
    {
      firstname: "Shelley",
      lastname: "Shaffer"
    },
    {
      firstname: "Melissa",
      lastname: "Oneil"
    },
    {
      firstname: "Cameran",
      lastname: "Bennett"
    },
    {
      firstname: "Ramona",
      lastname: "Haney"
    },
    {
      firstname: "Venus",
      lastname: "Moss"
    },
    {
      firstname: "Kendall",
      lastname: "Reynolds"
    },
    {
      firstname: "Flavia",
      lastname: "Ferrell"
    },
    {
      firstname: "Meghan",
      lastname: "Silva"
    },
    {
      firstname: "Sophia",
      lastname: "Terrell"
    },
    {
      firstname: "Lisandra",
      lastname: "Curtis"
    },
    {
      firstname: "Ulla",
      lastname: "Emerson"
    },
    {
      firstname: "Rebekah",
      lastname: "Hudson"
    },
    {
      firstname: "Vera",
      lastname: "Murphy"
    },
    {
      firstname: "Candace",
      lastname: "Burnett"
    },
    {
      firstname: "Tamekah",
      lastname: "Farley"
    },
    {
      firstname: "Hanae",
      lastname: "Lindsay"
    },
    {
      firstname: "Hollee",
      lastname: "Atkinson"
    },
    {
      firstname: "Candace",
      lastname: "Mcgowan"
    },
    {
      firstname: "Lael",
      lastname: "Jennings"
    },
    {
      firstname: "Adara",
      lastname: "Nelson"
    },
    {
      firstname: "Britanni",
      lastname: "Cantu"
    },
    {
      firstname: "Willow",
      lastname: "Shepherd"
    },
    {
      firstname: "Dahlia",
      lastname: "Shelton"
    },
    {
      firstname: "Maryam",
      lastname: "Goodman"
    },
    {
      firstname: "Nichole",
      lastname: "Potter"
    },
    {
      firstname: "Alexis",
      lastname: "Cunningham"
    },
    {
      firstname: "Amela",
      lastname: "Henson"
    },
    {
      firstname: "Nevada",
      lastname: "Watson"
    },
    {
      firstname: "Mollie",
      lastname: "Franco"
    },
    {
      firstname: "Grace",
      lastname: "Craft"
    },
    {
      firstname: "Lana",
      lastname: "James"
    },
    {
      firstname: "Sydney",
      lastname: "Sexton"
    },
    {
      firstname: "Moana",
      lastname: "Chan"
    },
    {
      firstname: "Dahlia",
      lastname: "Oneil"
    },
    {
      firstname: "Dora",
      lastname: "Tanner"
    },
    {
      firstname: "Nayda",
      lastname: "Wyatt"
    },
    {
      firstname: "Fatima",
      lastname: "Day"
    },
    {
      firstname: "Madonna",
      lastname: "Lewis"
    },
    {
      firstname: "Keely",
      lastname: "Rosales"
    },
    {
      firstname: "Casey",
      lastname: "Sutton"
    },
    {
      firstname: "Francesca",
      lastname: "Lewis"
    },
    {
      firstname: "Savannah",
      lastname: "Velazquez"
    },
    {
      firstname: "Macey",
      lastname: "Kidd"
    },
    {
      firstname: "Whilemina",
      lastname: "Becker"
    },
    {
      firstname: "Kimberly",
      lastname: "Dillard"
    },
    {
      firstname: "Yoko",
      lastname: "Sloan"
    },
    {
      firstname: "Bree",
      lastname: "Wheeler"
    },
    {
      firstname: "Noelani",
      lastname: "Christian"
    },
    {
      firstname: "Martena",
      lastname: "Chandler"
    },
    {
      firstname: "Dahlia",
      lastname: "Justice"
    },
    {
      firstname: "Serina",
      lastname: "Burgess"
    },
    {
      firstname: "Hadley",
      lastname: "Mckee"
    },
    {
      firstname: "Zoe",
      lastname: "Nicholson"
    },
    {
      firstname: "Paula",
      lastname: "Cabrera"
    },
    {
      firstname: "Eden",
      lastname: "Miller"
    },
    {
      firstname: "Dai",
      lastname: "Daugherty"
    },
    {
      firstname: "Martina",
      lastname: "Hardy"
    },
    {
      firstname: "Jacqueline",
      lastname: "Marks"
    },
    {
      firstname: "Regan",
      lastname: "Lopez"
    },
    {
      firstname: "Nevada",
      lastname: "Roach"
    },
    {
      firstname: "Breanna",
      lastname: "Delaney"
    }
  ];
}
