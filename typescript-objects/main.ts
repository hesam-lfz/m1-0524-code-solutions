interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

interface Pet {
  name?: string;
  kind?: string;
}

const s: StudentProps = { firstName: 'Bo', lastName: 'Jones', age: 10 };
const fullName: string = s.firstName + ' ' + s.lastName;
console.log(fullName, typeof fullName);

const vehicle: Vehicle = { make: 'Infiniti', model: 'G37', year: 2005 };
vehicle['color'] = 'Serenity Sand';
vehicle['isConvertible'] = false;

const joey: Pet = { name: 'Joey', kind: 'Cat' };
delete joey.name;
console.log(joey);
