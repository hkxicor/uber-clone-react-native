# uber-clone-react-native
Uber UI/UX Clone in React Native

## Sample
![Screenshot](image.png)
![Screenshot](image2.png)

## TODO
   * [x] Find a solution to the @override error
   * [x] Update React.checkPropTypes to prop-types since React 16 has complete removed
   * [x] Update React.createClass to create-react-class since React 16 has complete removed
   * [ ] Create backend to add Login and Signup option
   * [ ] Display available vehicles on map
   * [ ] Search results should display suggestions from google places api

## Steps to run the project

### First Step
`git clone https://github.com/hkxicor/uber-clone-react-native.git`

`cd uber-clone-react-native`

### Second Step
Open project folder on console and run

```sh
npm install
npm link
```

### Third Step
Run the Android or IOS project if you get an @override error relative to <\br>
node_modules\react-native-maps\lib\android\src\main\java\com\airbnb\android\react\maps\MapsPackage.java
then delete @override on line 27 from this file MapsPackage.java

Made with ❤️ and React Native.
