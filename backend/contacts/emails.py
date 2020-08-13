from django.conf import settings

from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Email, To, Content, Mail


class BaseEmail:
    """
    Base Sendgrid e-mail class.
    """
    receiver = 'eyob@zede.tech'
    sender = None
    _subject = None
    _content = None

    def __init__(self, *args, **kwargs):
        self.sender = kwargs.get('sender', self.sender)
        self._subject = kwargs.get('subject', self._subject)
        self._content = kwargs.get('content', self._content)

    @property
    def subject(self):
        """Returns the e-mail subject."""
        return f'[Resume] {self._subject}'

    @property
    def content(self):
        """Returns the e-mail content."""
        return self._content

    def send(self):
        """Send the sendgrid email to the receiver."""
        try:
            # Sendgrid object
            sg = SendGridAPIClient(settings.SENDGRID_API)
            message = Mail(
                from_email=self.sender,
                to_emails=self.receiver,
                subject=self.subject,
                plain_text_content=self.content
            )
            sg.send(message)
        except Exception as e:
            print(e)


class ContactMessageEmail(BaseEmail):
    """
    E-mail sending for user contact messages.
    """

    def __init__(self, obj, *args, **kwargs):
        kwargs.update({
            'sender': (obj.email, obj.name),
            'subject': obj.subject,
            'content': obj.message
        })
        super().__init__(*args, **kwargs)
