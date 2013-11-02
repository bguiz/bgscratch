from django.db import models

# Create your models here.
class SignUp(models.Model):
	name = models.CharField(max_length=300, null=True, blank=True)
	email = models.EmailField()
	timestamp = models.DateTimeField(auto_now_add=True)

	def __unicode__(self):
		return self.email

	class Meta:
		ordering = ['-timestamp']
