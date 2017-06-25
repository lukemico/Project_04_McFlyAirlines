class AdminController < ApplicationController
before_action :authorize_admin

# def new
#   [User, Reservation, Flight, Airplane].each do |table|
#     table.destroy_all
#   end
# end

  def create
    [User, Reservation, Flight, Airplane].each do |table|
      table.create_all
    end
  end

  def destroy
    [User, Reservation, Flight, Airplane].each do |table|
      table.destroy_all
    end
  end
end

# private
# def authorize_admin
#   redirect_to root_path unless @current_user.present? && @current_user.admin
# end
# end
