#!/usr/bin/env python3
import pprint
import requests

# Setting authorization headers
# headers = {'Authorization': f'token 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'}


page = 1;
flag = True;
test = [];

while flag:

    # Fetching branches
    url = "https://api.github.com/repos/laravel/laravel/branches?per_page=100&page=" + str(page) ;
    response = requests.get(url)
    branches = response.json()

    if(response.status_code != 200 ) :
        print('Credentials or connection error')
        exit()

    for br in branches:
        test.append(br['name'])
    print(response.links)
    
    if(hasattr(response, 'links')):
        if(not 'last' in response.links) :
            flag = False;
        page += 1
    else :
        flag = False;

pprint.pprint(test)