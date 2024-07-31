[![Top Language](https://img.shields.io/github/languages/top/cloudingenieur/microservices-appointments?style=flat-square)](https://github.com/cloudingenieur/microservices-appointments)
![](https://img.shields.io/badge/Keycloak-25.0-green) 

# About
Booking appointment applications are used across various industries and service areas to streamline scheduling 
and enhance customer experience. Some key areas include: 

**Healthcare** such as Doctor's appointments, Dental visits, Therapy sessions, Vaccination appointments.

**Beauty and Wellness** such as Haircuts and Styling, Massage therapy, Manicures and Pedicures, Spa treatments, etc.

**Professional Services** such as Legal consultations, Financial advising, Tax preparation, Real estate viewings,

**Education and Tutoring** such as tutoring, language lessons, private tutoring sessions, music lessons, language classes,
academic counseling, etc.

**Home Services** such as cleaning, plumbing, electrical work, home repairs and maintenance, etc.

**Fitness and Sports** such as yoga and fitness classes, sports coaching, physical therapy, automotive services, etc.

**Automotive** such as oil changes, tire replacements, car servicing, vehicle inspections, detailing and cleaning, tire
and oil changes, etc.

**Events and Entertainment** such as concerts, sports events, conferences, movie screenings, art exhibitions, etc.

**Hospitality** such as catering, dining, entertainment, etc.

**Pet Services** such as pet sitting, pet adoption, pet training, etc.



# Solution Architecture 🔍

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./docs/readme-assets/high-level-architecture-dark.png">
  <img src="./docs/finalv1_bookings_azure_diagram.png">
</picture>


# Dataflow Diagram 🔍

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./docs/readme-assets/high-level-architecture-dark.png">
  <img src="./docs/dataFlow_appointment_diagram.png">
</picture>

# Development Environment
## Prerequisite
- Maven 3.9.2
- Java 17+
- Spring Boot 3.3.1
- Docker
- KeyCloak 23.0.7

## How to Run Keycloak with Docker?
- `docker run -d --name keycloak -p 8080:8080  -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:23.0.7 start-dev`

## How to Build and Run locally?
- Clone Microservices-appointments

`GateWay Service`
- $ cd gateway project
- Run `$ mvn clean & mvn install & mvn spring-boot: run` to start the gateway service.
- visit http://localhost:8888 a redirect to keycloak login page, enter `spring` as username and `Spring_123` as
  password.

`Bookings Service`
- $ cd booking project
- Run `$ mvn clean & mvn install & mvn spring-boot: run` to start the booking service
- visit http://localhost:888/bookings/v1 a redirect to keycloak login page, enter `spring` as username and `Spring_123` as password.

`Orders Service`
- $ cd order project
- Run `$ mvn clean & mvn install & mvn spring-boot: run` to start the order service
- visit http://localhost:8888/orders/v1 a redirect to keycloak login page, enter `spring` as username and `Spring_123` as password.

`Notifications Service`
- $ cd notification project
- Run `$ mvn clean & mvn install & mvn spring-boot: run` to start the event service
- visit http://localhost:8888/notifications/v1 a redirect to keycloak login page, enter `spring` as username and `Spring_123` as password.


## How to Build and Run with Docker?
- Clone Microservices-appointments
- Run `$ docker-compose up` it will download fom docker hub and start all the services.
- visit http://localhost:8888 a redirect to keycloak login page, enter `spring` as username and `Spring_123` as password.


## How to Run Tests?

`Bookings Service Tests`
- $ cd booking project
- Run `$ mvn clean & mvn test` to run the booking service tests.

## Resources
- https://www.keycloak.org/
- https://spring.io/projects/spring-cloud-gateway


# MIT License

Copyright (c) [2024] [Cloudingenieur]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

