import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonIcon, IonButton } from '@ionic/react';
import { add} from 'ionicons/icons';

import './Tab1.css';

// const [state, setState] = useState();


const menu =
  {
    "id": "EMFATZU2IJKRW2C32T2QDHY5",
    "title": "Specialty Coffee Drinks",
    "shortDescription": "Specialty Coffee Drinks",
    "modifiers": [],
    "products": [
      {
        "id": "54MYF2I3RPU7D4NX5L7LGX7A",
        "title": "Macchiato",
        "shortDescription": "Fresh espresso softened with free-poured velvety steamned milk.",
        "price": 3.75,
        "modifiers": [],
        "perks": [],
        "taxIds": [
          "foo"
        ],
        "nutrition": [],
        "tags": [],
        "complements": [],
        "sort": 13,
        "available": true
      },
      {
        "id": "D6LREJRMXEDZWQGCIW4WGQSZ",
        "title": "Cortado",
        "shortDescription": "A wonderfully flavourful proportion of espresso to steamed milk.",
        "price": 3.5,
        "modifiers": [],
        "perks": [
          "5cdd6a30ed168a0dc2408d96",
          "5cdd319c2bd1df0d97c66141"
        ],
        "taxIds": [
          "foo"
        ],
        "nutrition": [],
        "tags": [],
        "complements": [],
        "sort": 14,
        "available": true,
        "imageUrl": "https://s3.eu-west-1.amazonaws.com/media.ssmctech.com/tenants/5afaf0590863fa68704a2c7d/content/4f87944e-1e9e-4368-825a-c1aa9d673f99.png"
      },
      {
        "id": "LEXOGUW7IXRUGK5QX6AAFCOQ",
        "title": "Espresso",
        "shortDescription": "An intense, bittersweet concentrated coffee extraction (ristretto style). ",
        "price": 4,
        "modifiers": [],
        "perks": [],
        "taxIds": [
          "foo"
        ],
        "nutrition": [],
        "tags": [],
        "complements": [],
        "sort": 15,
        "available": true
      },
      {
        "id": "ZFHGOJGWGY5MVCQVYMP4WYSY",
        "title": "Cappuccino",
        "shortDescription": "Our version of the delicious classic: espresso, steamed milk, microfoam.",
        "price": 2.5,
        "modifiers": [],
        "perks": [],
        "taxIds": [
          "foo"
        ],
        "nutrition": [],
        "tags": [],
        "complements": [],
        "sort": 16,
        "available": true,
        "imageUrl": "https://s3.eu-west-1.amazonaws.com/media.ssmctech.com/tenants/5afaf0590863fa68704a2c7d/content/d3dd99a8-6635-459e-b506-4c7ebadcb83f.png"
      },
      {
        "id": "PUWEOZQE4IPNH24J2C3EFDLM",
        "title": "Dolce Latte",
        "shortDescription": "Our signature double shot latte gently sweetened with housemate natural cane sugar syrup.",
        "price": 3.5,
        "modifiers": [],
        "perks": [],
        "taxIds": [
          "foo"
        ],
        "nutrition": [],
        "tags": [],
        "complements": [],
        "sort": 17,
        "available": true,
        "allergens": [
          "crustaceans",
          "gluten",
          "eggs"
        ]
      },
      {
        "id": "OFVNWSQB4GXQV66HPLGG4V7Z",
        "title": "Mocha",
        "shortDescription": "Housemade chocolate sauce, double espresso, steamed milk and whipped cream.",
        "price": 3.4,
        "modifiers": [],
        "perks": [],
        "taxIds": [
          "foo"
        ],
        "nutrition": [],
        "tags": [],
        "complements": [],
        "sort": 18,
        "available": true,
        "imageUrl": "https://s3.eu-west-1.amazonaws.com/media.ssmctech.com/tenants/5afaf0590863fa68704a2c7d/content/8320d0bc-793e-499c-95ca-045f0cc917d1.png"
      }
    ]
}

const Tab1: React.FC = () => {

  const [state, setState] = useState(menu);

  async function fetchMenu() {
    const res = await fetch(
      'https://beta-menu.pepperhq.com/menu?tenantId=5afaf0590863fa68704a2c7d&locationId=5c055b71ffafd20d7eb1994b',
    )
    const menu = await res.json()
    console.log(menu.categories.flat());
    setState(menu.categories[1]);
  }

  useEffect(() => {
    fetchMenu();

  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu Tab</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          {state.products.map((value, index) => {
            return <IonItem key={index}>
               <IonCard>
                {value.imageUrl ? <img src={value.imageUrl} /> : <img src="https://devourlisbonfoodtours.com/wp-content/uploads/Best-Coffee-Lisbon-Latte-e1541081956467.jpg"/>} 
                <IonCardHeader>
                  <IonCardTitle>{value.title}</IonCardTitle>
                  <IonCardSubtitle>{value.shortDescription}</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  {value.price}
                </IonCardContent>
                <IonButton size="large" expand="block" color="dark"  fill="outline" ><IonIcon icon={add} /></IonButton>
              </IonCard>
              </IonItem>
          })}
      </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
