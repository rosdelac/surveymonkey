class Survey < ActiveRecord::Base
  has_many :questions, dependent: :destroy
  has_many :participations
  has_many :users, through: :participations
  belongs_to :user

  def taken?
    if self.participations.count > 0
      true
    else
      false
    end
  end

  def taken_times
    self.participations.count
  end

  def get_options
    if self.taken?
      options = []
      questions = self.questions
      questions.each do |q|
        q.options.each do |op|
          options << op
        end
      end
      options
    else
      nil
    end
  end
end