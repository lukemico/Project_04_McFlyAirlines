json.extract! flight, :id, :airplane_id, :flight_number, :origin, :destination, :departure_date, :departure_time, :created_at, :updated_at
json.url flight_url(flight, format: :json)
json.airplane flight.airplane
json.reservations flight.reservations
