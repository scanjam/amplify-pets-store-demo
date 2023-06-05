import { useState } from "react";
import './App.css';
import { PetProfile, Pets } from './ui-components';
import { NavBar } from './ui-components';
import { Footer } from './ui-components';
import { AddPet } from './ui-components';
import { PetDetails } from './ui-components';

 
 <AddPet />

function App() { 
  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [pet, setPet] = useState();
  const [updatePet, setUpdatePet] = useState();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [about, setAbout] = useState("");
  const [color, setColor] = useState("");
  const [image, setImage] = useState("");
  

  const formOverride = {
    TextField29766922: {
      placeholder: name
    },
    TextField29766923: {
      placeholder: age
    },
    TextField29766924: {
      placeholder: about
    },
    TextField36712698: {
      placeholder: breed
    },
    TextField36702717: {
      placeholder: color
    },
    TextField36702724: {
    placeholder: image
    },
    image: {
      src:
        updatePet == null
          ? "https://img.icons8.com/plasticine/100/german-shepherd.png"
          : updatePet.image,
    },
    Button36702741: {
        isDisabled: !updatePet ? true : false
    },
    Button29766926: {
      isDisabled: !updatePet ? true : false
    },

    Icon: {
      style: {
        cursor: "pointer",
      },
      onClick: () => {
        setShowForm(!showForm);
      },
    },
  };

  const navbarOverrides = {
    image: {
      src: "https://img.icons8.com/plasticine/100/dog.png"
      },
      "Add Pet": {
        style: {
          cursor: "pointer",
        },
        onClick: () => {
          setShowForm(!showForm)
        },
      },  
  }
  const petProfileOverride = {
    "Breed": {color: "blue"},
  }
  return (
    <div className="App">
      <NavBar width={"100%"} overrides={navbarOverrides}/>
      <header className="App-header">
          { showDetails && <PetDetails
                pet={pet} 
                style={{
                    textAlign: "left",
                    margin: "1rem",
                }}
                overrides={{
                  Close: {
                    onClick: () => {
                      setShowDetails(false)
                    },
                    style: {
                      cursor: "pointer",
                    },
                  }
                }}
            />
          }
          {showForm && (
              <AddPet
              pet={updatePet}
              overrides={formOverride}
              style={{
                textAlign: "left",
                margin: "1rem"
              }}
             />
            )}
            <Pets
              overrideItems={({ item, index }) => ({
                overrides: {
                  Breed: {color: "blue"},
                  // This is the update pet button section
                  Button36552724: {
                    onClick: () => {
                      if (!showForm) setShowForm(true);
                      setUpdatePet(item);
                      setName(item.name);
                      setAge(item.ag);
                      setBreed(item.breed);
                      setAbout(item.about);
                      setColor(item.color);
                      setImage(item.image);
                    },
                  },
                  // This is the profile pet button section
                  Button36552688: {
                    onClick: () => {
                      setShowDetails(!showDetails);
                      setPet(item);
                    },
                  },
                },
            })}
            />
          
      </header>
      <Footer width={"100%"}/>
    </div>
  );
}

export default App;
