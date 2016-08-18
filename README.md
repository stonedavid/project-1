### TIMESTAMP MICROSERVICE
***
</br>
This project parses GET requests of the form: 
```https://project-1-dxstone.c9users.io/ <date in natural language || date in unixtime (seconds)```
</br>
returns a timestamp object with the form: 
</br>

```javascript
{ 
    "unix": <unix time in seconds>,
    "natural": <WW MM DD YYYY>
    }
```