let formDataBlob = new Blob([], { type: "application/json" });

export function appendFormDataToBlob(formData) {
    
    const jsonData = JSON.stringify(formData);
    // formData.image = img;
    const formDataBlobPart = new Blob([jsonData, '\n'], { type: "application/json" });

    const blobParts = [formDataBlob, formDataBlobPart];

    formDataBlob = new Blob(blobParts, { type: "application/json" });


    //Lecture du document
    const reader = new FileReader();

    reader.onload = function (event) {
        const content = event.target.result;
        console.log("Contenu de Blob:", content);
    }

    reader.onerror = function(event) {
        console.error('Erreur lors de la lecture du Blob:', event.target.error);
    };
      
    reader.readAsText(formDataBlob);
}

//méthode de lecture des données 
export function readData(){

    const reader = new FileReader();

    reader.onload = function (event) {
        const content = event.target.result;
        console.log("Contenu de Blob:", content);
    }

    reader.onerror = function(event) {
        console.error('Erreur lors de la lecture du Blob:', event.target.error);
    };
      
    reader.readAsText(formDataBlob);
}