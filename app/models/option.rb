class Option < ActiveRecord::Base
  belongs_to :question
  has_many :relations
  has_many :responses, through: :relations

  def has_been_selected
    self.relations.count
  end

  def percentage_selected(total)
    (has_been_selected*100.0/total).round(2)
  end
end