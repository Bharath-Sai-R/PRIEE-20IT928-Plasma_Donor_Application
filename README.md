# PRIEE-20IT928-Plasma_Donor_Application

# <h1> Important notes and changes to be made

# <h3> 1. App Engine links for the project
   https://priee-plasma-donor.el.r.appspot.com/
<br>
# <h3> 2. The Links are hardcoded to the fetch()
# <h3> 3. Always run below code if any client changes are made as we only deply the build folder to the AppEngine
```
npm run build
```
# <h3> 4. package.json needs to have the following defined during local testing
```
"scripts": {
    "start": "react-scripts --openssl-legacy-provider start",
    "build": "react-scripts --openssl-legacy-provider build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
```
# <h3> 5. Before deploying and after building use
```
"scripts": {
    "start": "react-scripts start",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
```
