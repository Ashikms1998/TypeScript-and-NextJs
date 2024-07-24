export default function PrivateRoute(){
    return <h1>You cannot view this in the browser</h1>
}

//This is waht is called private folder
//This private folder indicates that it is a private implementation
//detail and should not be considered by the routing system that is 
//this folder and its sub folder is excluded from routing
//to create a private folder prefix folder name with an underscore

//For seperating UI logic from routing logic
//For Consistently organizing internal files across a project