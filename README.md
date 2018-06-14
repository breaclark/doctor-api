# Doctor API Project

#### A website that uses the BetterDoctor API and practices the use of promises and ui/logic separation. You can see it in action at  https://breatortilla.github.io/doctor-api/

#### By **Brea Clark**

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| Program can take in a keyword for a medical issue and display a list of doctors in the Portland area that fit that keyword search | "nose" | [["Michael", "Scott", "123 Internet Lane", "(555)879-2901", "www.doctormichael.com", "Accepting new patients"],["Jerry", "Williams", "124 Internet Lane", "(555)649-9012", "www.doctorjerry.com", "Not accepting new patients"],...] |
| Program can take in a doctor's name and display a list of doctors in the Portland area that fit that name search | "Michael" | [["Michael", "Scott", "123 Internet Lane", "(555)879-2901", "www.doctormichael.com", "Accepting new patients"],["Jerry", "Michaels", "124 Internet Lane", "(555)649-9012", "www.doctorjerry.com", "Not accepting new patients"],...] |
| Program can take in a search and return a fitting notification if there is an error with the API Call| "nose" | "A 404 error occurred" |
| Program can take in a search and return a fitting notification if no doctors meet the that search criteria | "Xavier" | "No doctors matched that search, please try again" |



## Setup/Installation Requirements

1. Clone this repository
2. Navigate into the local repository folder
3. Run npm install
4. Instantiate a .env file with the appropriate information
5. Run npm run start

## Known Bugs
* No known bugs.

## Technologies Used
* HTML
* CSS
* Javascript
* Jquery
* Webpack
* Jasmine
* Karma
* ESLint
* Ajax

## Support and contact details

_Email me at breatortilla@gmail.com for support_

### License

Copyright (c) 2018 **Brea Clark**
