post '/user/reg' do
  @user = User.new(name:params[:name],email:params[:email])
  @user.password = params[:password]
  if @user.save
    session[:user_id] = @user.id
    return  erb :mainpage, layout: true
  else
    return erb :error , layout: false
  end
end

post '/user/ini' do
  @user = User.authenticate(params[:email],params[:password])
  if @user
    session[:user_id] = @user.id
    return erb :mainpage, layout: true
  else
    return erb :error , layout: false
  end
end

get '/surveys/all' do
  if session[:user_id]
    @user = User.find(session[:user_id])
    @surveys = Survey.all
    erb :surveys, layout: true
  else
    erb :error, layout: false
  end
end

get '/surveys/:survey_id' do
  if session[:user_id]
    @user = User.find(session[:user_id])
    @survey = Survey.find(params[:survey_id])
    erb :survey, layout: true
  else
    erb :error, layout: false
  end
end

post '/survey/submit' do
  p "*" * 50
  p params
  p params.count
  p "*" * 50
  @user = User.find(session[:user_id])
  @survey = Survey.find(params[:survey])
  @participation = Participation.create(user_id: @user.id,survey_id: @survey.id)
  response = Response.create(participation_id: @participation.id)
  params[:question].each do |x,y|
    Relation.create(option_id: y,response_id: response.id)
  end
  "you submitted the form thanks"
end