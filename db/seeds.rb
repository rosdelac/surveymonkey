# Este archivo sirve para crear registros de prueba
module Seeds
#===========================================================================
  def self.user
    User.transaction do
      user1 = User.new(name:'Maximiliano', email:'max@max.com')
      user1.password = 'max'
      user1.save
      user2 = User.new(name:'Rodrigo', email:'ro@ro.com')
      user2.password = 'rod'
      user2.save
    end    
  end
#===========================================================================
  def self.survey
    Survey.transaction do
      survey1 = Survey.create(title:'Encuesta',user_id: 1)
     end    
  end
#===========================================================================
  def self.question
    Question.transaction do
      q1 = Question.create(survey_id: 1,question:'¿Cómo se creó el mundo?')
      q2 = Question.create(survey_id: 1,question:'¿Cómo hacer un blog?')
      q3 = Question.create(survey_id: 1,question:'¿Cómo hacer un blog?')
      q4 = Question.create(survey_id: 1,question:'¿Cómo hacer un blog?')
      q5 = Question.create(survey_id: 1,question:'¿Cómo hacer un blog?')
      q6 = Question.create(survey_id: 1,question:'¿Cómo hacer un blog?')
      q7 = Question.create(survey_id: 1,question:'¿Cómo hacer un blog?')
      q8 = Question.create(survey_id: 1,question:'¿Cómo hacer un blog?')
      q9 = Question.create(survey_id: 1,question:'¿Cómo hacer un blog?')
      q10 = Question.create(survey_id: 1,question:'¿Cómo hacer un blog?')
    end    
  end
#===========================================================================
  def self.option
    Option.transaction do
      op1 = Option.create(question_id:1,option: "respuesta1preg1")
      op2 = Option.create(question_id:1,option: "respuesta1preg1")
      op3 = Option.create(question_id:1,option: "respuesta1preg1")
      op1 = Option.create(question_id:1,option: "respuesta1preg1")
      op2 = Option.create(question_id:1,option: "respuesta1preg1")
      op3 = Option.create(question_id:1,option: "respuesta1preg1")
      op1 = Option.create(question_id:1,option: "respuesta1preg1")
      op2 = Option.create(question_id:1,option: "respuesta1preg1")
      op3 = Option.create(question_id:1,option: "respuesta1preg1")
    end    
  end
#===========================================================================
  def self.participation
    Participation.transaction do
      p1 = Participation.create(user_id: 2,survey_id: 1)
      p2 = Participation.create(user_id: 3,survey_id: 1)
    end    
  end
#===========================================================================
  def self.response
    Response.transaction do
      r1 = Response.create(participation_id:1)
      r2 = Response.create(participation_id:2)
    end    
  end
#===========================================================================
  def self.relation
    Relation.transaction do
      re1 = Relation.create(option_id:1,response_id:1)
      re2 = Relation.create(option_id:1,response_id:2)
    end    
  end
#===========================================================================
end
#===========================================================================
Seeds.user
Seeds.survey
Seeds.question
Seeds.option
Seeds.participation
Seeds.response
Seeds.relation