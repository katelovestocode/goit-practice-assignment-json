import { Section } from "./App.styled"
import allUsers from "../utils/allUsers.json";
import {UserGallery} from "./UserGallery/UserGallery"


export const App = () => {
  
return ( 
  
<Section > 
<UserGallery users={allUsers}/> 
</Section>

  )
}


