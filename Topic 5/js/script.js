/* 
Week 5 - Coding Assignment
Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements.
::::Use at least one array.
::::Use at least two classes.
::::Your menu should have the options to create, view, and delete elements.
*/

class Pugilist { //Boxer class to describe name and postion
    constructor(name, weight) { //parameters to hold name and weight
        this.name = name; 
        this.weight = weight;
    }

    describe() { //describes the pugilist
        return `${this.name} fights at ${this.weight}.`; //template literal for our return
    }
}

class PrizedFighter {
    constructor(name) {
        this.name = name;
        this.pugilists = []; //blank array to hold all pugilists
    }

    addPugilist(pugilist) {
        if (pugilist instanceof Pugilist) { //instanceof - to hold array of pugilists, not just a string or number, but a pugilist
            this.pugilists.push(pugilist); //push a pugilist to it
        } else { //if not pugilist, throw error
            throw new Error(`You can only add an instance of Pugilist. Argument is not a pugilist: ${pugilist}`);
        }
    }

    describe() { //describes the PrizedFighter
        return `${this.name} has ${this.pugilists.length} pugilists.`; //template literal for name and the length (how many) of pugilists
    }
}

class Menu {
    constructor() { //not take any argument unlike prizedfighter and Pugilist
        this.prizedfighters = []; //an array of prizedfighters
        this.selectedPrizedFighter = null; //create a variable for prizedfighter we have selected and manage one prizedfighter at a time; null - no prizedfighter is selected
    }

    start() { //entry point to our application
        let selection = this.showMainMenuOptions(); //jumps to showMainMenuOptions function (line 70)
        while (selection != 0) {
            switch (selection) {
                case '1': //if selects 1, then create prizedfighter
                    this.createPrizedFighter();
                    break;
                case '2': //if selects 2, view a specific prizedfighter
                    this.viewPrizedFighter();
                    break;
                case '3': //if 3, then delete prizedfighter
                    this.deletePrizedFighter();
                    break;
                case '4': //if 4, then display all prizedfighters
                    this.displayPrizedFighters();
                    break;
                default: //if anything else, set selection to zero
                    selection = 0;
            }
            selection = this.showMainMenuOptions(); //get selection outside our switch, but inside our loop
        }

        alert('Goodbye & Goodnight!'); //if selects zero
    }

    showMainMenuOptions() { 
        return prompt(`
        0) exit
        1) create new prized fighter
        2) view prized fighter
        3) delete prized fighter
        4) display all prized fighters
        `);
    } //jumps back to while (line 47)

    showPrizedFighterMenuOptions(prizedfighterInfo) {
        return prompt(`
        0) back
        1) create pugilist
        2) delete pugilist
        --------------------
        ${prizedfighterInfo}
        `);
    } //jumps back to selection

    displayPrizedFighters() {
        let prizedfighterString = ''; //use a blank string, so we can build a string
        for (let i = 0; i < this.prizedfighters.length; i++) { //i less than the length of prized fighters, iterate through our prized fighters
            prizedfighterString += i + ') ' + this.prizedfighters[i].name + '\n'; //concatenate variable, create prized fighter and new line for each one
        }
        alert(prizedfighterString); //outside our for loop
    }

    createPrizedFighter() { //if 1 is selected from the switch case
        let name = prompt('Enter name for new prized fighter:'); //prompts name
        this.prizedfighters.push(new PrizedFighter(name)); //push to our prized fighters array
    }

    viewPrizedFighter() { //view prizedfighter method
        let index = prompt('Enter the index of the prized fighter you wish to view:'); //what prizedfighter they wish to view
        if (index > -1 && index < this.prizedfighters.length) {
            this.selectedPrizedFighter = this.prizedfighters[index]; //validated PrizedFighter
            let description = 'PrizedFighter Name: ' + this.selectedPrizedFighter.name + '\n'; //description = concatenate

            for (let i = 0; i < this.selectedPrizedFighter.pugilists.length; i++) { //length of pugilists from selectedPrizedFighter
                description += i + ') ' + this.selectedPrizedFighter.pugilists[i].name 
                + ' - ' + this.selectedPrizedFighter.pugilists[i].weight + '\n';
            }

            let selection = this.showPrizedFighterMenuOptions(description); //when viewing the prized fighters, this allows for creating a new fighter or delete fighter
            switch (selection) { //selection is different, submenu
                case '1': //create a new pugilist
                    this.createPugilist();
                    break;
                case '2': //delete a pugilist
                    this.deletePugilist();
            }
        }
    }

    deletePrizedFighter() {
        let index = prompt('Enter the index of the prized fighter you wish to delete:');
        if (index > -1 && index < this.prizedfighter.length) {
            this.prizedfighters.splice(index, 1);
        }
    } //if 3 is selected, then delete prizedfighter

    createPugilist() {
        let name = prompt('Enter name for new pugilist:');
        let weight = prompt('Enter weight for new pugilist:');
        this.selectedPrizedFighter.pugilists.push(new Pugilist(name, weight)); //pushes to the Pugilist class
    }

    deletePugilist() {
        let index = prompt('Enter the index of the pugilist you wish to delete:');
        if (index > -1 && index < this.selectedPrizedFighter.pugilists.length) { //validate it
            this.selectedPrizedFighter.pugilists.splice(index, 1); //move at 1
        }
    }
}

let menu = new Menu(); //starting a menu
menu.start();

/*
https://github.com/RalphRebel/testRepository
*/