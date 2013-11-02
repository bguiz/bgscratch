# Create your views here.

from django.template import RequestContext
from django.shortcuts import render_to_response
from django.http import HttpResponseRedirect

from .forms import SignUpForm

def home(request):
	form  =SignUpForm(request.POST or None)
	if (form.is_valid()):
		new_sign_up = form.save(commit=False)
		new_sign_up.save()
		return HttpResponseRedirect('http://google.com')

	return render_to_response('form.html', locals(), context_instance=RequestContext(request))
