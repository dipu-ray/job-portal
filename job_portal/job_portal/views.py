from django.shortcuts import render, redirect, HttpResponse

def homePage(request):
    return HttpResponse("Hello world!")