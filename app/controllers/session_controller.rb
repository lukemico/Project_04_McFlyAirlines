class SessionController < ApplicationController
  # before_action :authorize_admin

  def new
  end

  def create
    user = User.find_by :email => params[:email]
    # raise "hell"
    if user.present? && user.authenticate(params[:password])
      session[:user_id] = user.id
      flash[:notice] = "Login successful!"
      redirect_to root_path
    else
      flash[:error] = "The password or email entered was incorrect!"
      # redirect_to session_path
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end
end





# def new
# end
#
# def create
#   email = params["email"]
#   password = params["password"]
#
#   user = User.find_by(email: email)
#   # If the user exists and you provided the right password
#   if user.present? && user.authenticate(password)
#
#     session[:user_id] = user.id
#     redirect_to "/users"
#
#   else
#     flash[:login_error] = "The password or email was incorrect"
#     # Show the login form again (potentially with a temporary message)
#     render :new # Show the new form
#   end
# end
#
# def destroy
#   session[:user_id] = nil
#   redirect_to "/users"
# end
# end
