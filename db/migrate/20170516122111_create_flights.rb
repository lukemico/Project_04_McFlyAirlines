class CreateFlights < ActiveRecord::Migration[5.0]
  def change
    create_table :flights do |t|
      t.integer :airplane_id
      t.string :flight_number
      t.string :origin
      t.string :destination
      t.date :departure_date
      t.time :departure_time
      t.date :arrival_date
      t.time :arrival_time

      t.timestamps
    end
  end
end
