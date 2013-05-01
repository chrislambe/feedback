class User < ActiveRecord::Base
  has_many :submissions
  attr_accessible :email, :name
end
