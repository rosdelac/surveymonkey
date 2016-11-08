#===============================
#== Controlador de encuestras ==
#===============================
post '/make/survey/title' do
  @survey = Survey.create(title:params[:title],user_id: session[:user_id])
  if @survey  
    erb :survey, layout: false
  else
    erb :error, layout: false
  end
end

post '/make/survey/question' do
  @survey = Survey.last
  @question = Question.create(survey_id: @survey.id,question:params[:question])
  if @question  
    erb :survey, layout: false
  else
    erb :error, layout: false
  end
end
post '/make/survey/option' do
  @survey = Survey.last
  @question = @survey.questions.last
  option = Option.create(question_id:@question.id,option: params[:option])
  if option 
    @options = @question.options
    erb :survey, layout: false
  else
    erb :error, layout: false
  end
end
#===============================
#== Controlador de encuestras ==
#===============================