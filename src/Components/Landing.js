import React from 'react';

function Landing(props) {
    const animalSelectionMapped = props.animalSelection.map((animal, i) => {
        // console.log(animal);
        return (
            <div key={i}>
                <h1>{animal.name}</h1>
                <img src={animal.img} alt='Loveable animal' />
            </div>
        )
    })

    // console.log(animalSelectionMapped);

    return (
        <main>
            <h3>Give us a home!</h3>
            {animalSelectionMapped}
        </main>
    )
}

export default Landing;