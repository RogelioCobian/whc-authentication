export class PassService {
  users: Array<object> = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'stopReadingMyCode@saysMe.com',
      password: ''
    }
  ];

  // Once values are catched it will push it into this array.
  // Should add (maybe) a for loop that checks through list
  // If the value is equal to one of the objects email and password then login

  // constructor(private passService: PassService) {}


  // addAccount(firstName: string,
  //            lastName: string,
  //            email: string,
  //            password: string) {

  //   this.users.push({firstName, lastName, email, password});

  // }

  // checkAccount(name: string, password: string) {

  // }

}
