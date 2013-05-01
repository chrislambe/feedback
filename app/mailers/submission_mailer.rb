class SubmissionMailer < ActionMailer::Base
  default from: "clambe@escalation-point.com"

  def submission_notification submission
    @submission = submission
    mail to:submission.user.email, subject:"You've gotten some feedback!"
  end
end
