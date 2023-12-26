/*
    Requirements:
    1. You are required to categorize people, given their date of birth, into three
    different age groups—Infants, Children, and Adults.
    2. Indicate with a true or false flag whether they are of a legal age to sign a contract.
    3. A person is deemed to be an infant if they are less than 2 years old.
    4. Infants cannot sign contracts.
    5. A person is deemed to be a child if they are less than 18 years old.
    6. Children cannot sign contracts either.
    7. A person is deemed to be an adult if they are more than 18 years of age.
    8. Only adults can sign contracts.
    9. For reporting purposes, each type of person must be able to print their details.
    This should include the following:
    Date of birth
    Category of person
    Whether they can sign contracts or not
  
 */

// Define type of person by enum
enum PersonCategory {
    Infant,
    Children,
    Adult
}

// Define interfact person for requirements
interface IPerson {
    category: PersonCategory;
    canSignContracts(): boolean;
    printDetails(): void;
}

export abstract class Person implements IPerson {
    abstract category: PersonCategory;
    private DateOfBirth: Date;
    constructor(dateOfBirth: Date) {
        this.DateOfBirth = dateOfBirth;
    }

    abstract canSignContracts(): boolean

    printDetails() : void {
        console.log(`Person : `);
        console.log(`Date of Birth : `
        + `${this.DateOfBirth.toDateString()}`);
        console.log(`Category : `
        + `${PersonCategory[this.category]}`);
        console.log(`Can sign : `
        + `${this.canSignContracts()}`);
        }
}

export class Infant extends Person {
    category = PersonCategory.Infant;
    constructor(dateOfBirth: Date) {
        super(dateOfBirth);
    }
    canSignContracts(): boolean { return false; }
}

export class Children extends Person {
    category = PersonCategory.Children;
    constructor(dateOfBirth: Date) {
        super(dateOfBirth);
    }
    canSignContracts(): boolean { return false; }
}

export class Adult extends Person {
    category = PersonCategory.Adult;
    constructor(dateOfBirth: Date) {
        super(dateOfBirth);
    }
    canSignContracts(): boolean { return true; }
}


export default class PersonFactory {
    getPerson(dateOfBirth: Date) : IPerson {
        let dateNow = new Date(); // defaults to now.
        let currentMonth = dateNow.getMonth() + 1;
        let currentDate = dateNow.getDate();
        let dateTwoYearsAgo = new Date(
        dateNow.getFullYear() - 2,
        currentMonth, currentDate);
        let date18YearsAgo = new Date(
        dateNow.getFullYear() - 18,
        currentMonth, currentDate);
        if (dateOfBirth >= dateTwoYearsAgo) {
            return new Infant(dateOfBirth);
        }
        if (dateOfBirth >= date18YearsAgo) {
            return new Children(dateOfBirth);
        }
        return new Adult(dateOfBirth);
    }
}