#===============================
#== Controlador de encuestras ==
#===============================
post '/make/survey/title' do
  @title = params[:title]
  session[:title] = @title
  erb :survey, layout: false
end

post '/make/survey/question' do
  @question = params[:title]
  session[:title] = @title
  erb :survey, layout: false
end
#===============================
#== Controlador de encuestras ==
#===============================