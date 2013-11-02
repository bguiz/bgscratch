from django.contrib import admin
from .models import SignUp

class SignUpAdmin(admin.ModelAdmin):
	class Meta:
		model = SignUp

# /basic_code/urls.py enables registration of admin sites using admin.autodiscover()
admin.site.register(SignUp, SignUpAdmin)
