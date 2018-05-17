import {InjectionToken} from '@angular/core';

export const BaseUrl = 'http://hackages-bookstore-api.azurewebsites.net/api/v1/';
export const BaseUrlToken = new InjectionToken(BaseUrl);


export const SearchAPI = 'books/?title=';
export const SearchAPIToken = new InjectionToken(SearchAPI);
