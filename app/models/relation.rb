class Relation < ActiveRecord::Base
  belongs_to :option
  belongs_to :response
end
