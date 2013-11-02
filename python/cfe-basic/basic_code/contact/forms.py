from django import forms

from .models import SignUp

class SignUpForm(forms.ModelForm):
	#by extending the model form, all we need to provide is meta info
	#to tell it which modelit is for, and the form is generated automatically
	class Meta:
		model = SignUp
