# Airplane Seed Data
Airplane.destroy_all

plane1 = Airplane.create({
    name: "737",
    rows: 30,
    columns: "A B C D E F"
  })

plane2 = Airplane.create({
    name: "A310",
    rows: 20,
    columns: "A B C D"
  })

plane3 = Airplane.create({
    name: "A380",
    rows: 70,
    columns: "A B C D E F G H"
  })

plane4 = Airplane.create({
    name: "G6",
    rows: 8,
    columns: "A B C D"
  })

puts "Airplane Count: #{Airplane.all.count}"


# Flight Seed Data
Flight.destroy_all

flight1 = Flight.create({
  airplane_id: plane1.id,
  flight_number: "QF 1",
  origin: "Sydney",
  destination: "Los Angeles"
  })

flight2 = Flight.create({
  airplane_id: plane2.id,
  flight_number: "VA 90",
  origin: "Melboure",
  destination: "Brisbane"
  })

flight3 = Flight.create({
  airplane_id: plane1.id,
  flight_number: "QF 2",
  origin: "Los Angeles",
  destination: "Sydney"
  })

flight4 = Flight.create({
  airplane_id: plane3.id,
  flight_number: "EKT 1",
  origin: "London",
  destination: "Dubai"
  })

flight5 = Flight.create({
  airplane_id: plane4.id,
  flight_number: "PR 2",
  origin: "New York",
  destination: "Las Vegas"
  })

puts "Flight Count: #{Flight.all.count}"


# User Seed Data
User.destroy_all


# u1 = User.create(name: "Bill", email: "bill@ga.co", password: "chicken", password_confirmation: "chicken")

# p u1.password_digest



user1 = User.create({
  first_name: "John",
  last_name: "Smith",
  password: "test",
  password_confirmation: "test",
  email: "john.smith@test.com"
  })

user2 = User.create({
  first_name: "Cameron",
  last_name: "Citizen",
  password: "test",
  password_confirmation: "test",
  email: "cameron.citizen@test.com"
  })

user3 = User.create({
  first_name: "Matthew",
  last_name: "Jones",
  password: "test",
  password_confirmation: "test",
  email: "matthew.jones@test.com"
  })

user4 = User.create({
  first_name: "Robert",
  last_name: "Howell",
  password: "test",
  password_confirmation: "test",
  email: "robert.howell@test.com"
  })

user5 = User.create({
  first_name: "Gary",
  last_name: "George",
  password: "test",
  password_confirmation: "test",
  email: "gary.george@test.com"
  })

user6 = User.create({
  first_name: "Mary",
  last_name: "Stewart",
  password: "test",
  password_confirmation: "test",
  email: "mary.stewart@test.com"
  })

user7 = User.create({
  first_name: "Myra",
  last_name: "James",
  password: "test",
  password_confirmation: "test",
  email: "myra.james@test.com"
  })

user8 = User.create({
  first_name: "Dawn",
  last_name: "Scott",
  password: "test",
  password_confirmation: "test",
  email: "dawn.scott@test.com"
  })

user9 = User.create({
  first_name: "Candice",
  last_name: "Bishop",
  password: "test",
  password_confirmation: "test",
  email: "candice.bishop@test.com"
  })

user10 = User.create({
  first_name: "Catherine",
  last_name: "Pendin",
  password: "test",
  password_confirmation: "test",
  email: "catherine.pendin@test.com"
  })

puts "User Count: #{User.all.count}"


# Reservation Seed Data
Reservation.destroy_all

res1 = Reservation.create({
  user_id: user1.id,
  flight_id: flight1.id,
  rows: 3,
  columns: "A"
  })

res2 = Reservation.create({
  user_id: user2.id,
  flight_id: flight2.id,
  rows: 16,
  columns: "B"
  })

res3 = Reservation.create({
  user_id: user2.id,
  flight_id: flight4.id,
  rows: 50,
  columns: "D"
  })

res4 = Reservation.create({
  user_id: user3.id,
  flight_id: flight3.id,
  rows: 15,
  columns: "A"
  })

res5 = Reservation.create({
  user_id: user4.id,
  flight_id: flight5.id,
  rows: 2,
  columns: "C"
  })

res6 = Reservation.create({
  user_id: user5.id,
  flight_id: flight4.id,
  rows: 13,
  columns: "D"
  })

res7 = Reservation.create({
  user_id: user6.id,
  flight_id: flight3.id,
  rows: 17,
  columns: "A"
  })

res8 = Reservation.create({
  user_id: user7.id,
  flight_id: flight1.id,
  rows: 2,
  columns: "F"
  })

res9 = Reservation.create({
  user_id: user8.id,
  flight_id: flight2.id,
  rows: 6,
  columns: "C"
  })

res10 = Reservation.create({
  user_id: user8.id,
  flight_id: flight4.id,
  rows: 7,
  columns: "D"
  })

res11 = Reservation.create({
  user_id: user9.id,
  flight_id: flight1.id,
  rows: 12,
  columns: "A"
  })

res12 = Reservation.create({
  user_id: user10.id,
  flight_id: flight5.id,
  rows: 3,
  columns: "C"
  })

puts "Reservation Count: #{Reservation.all.count}"
