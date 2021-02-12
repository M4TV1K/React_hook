# Description

The app consists of 4 pages: Accordion, List, Search, Translator

Each of the utilises approach of React Hooks.

## Search

Search is made with the Wikipedia API, so all the articles are being retrieved directly from it.

## Translator 

There is also translator which utilises Google's API in order to use Google Translator for translation.  
In order not to send too many requests on inputing new words in search line, there is special debounce feature used with the help of using id of TimeOut that is being cancelled in clean-up fuction that is being returned by useEffect(). Same with Search
