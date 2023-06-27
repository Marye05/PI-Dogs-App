const validate = (input) => {
    const error = {};

            if (!input.name) {
                error.name = "El nombre de la raza es obligatorio";
            }
         
            if (!input.height) {
                error.height = "La altura es obligatoria";
            }
          
            if (!input.weight) {
                error.weight = "El peso es obligatorio";
            }
       
            if (!input.life_span) {
                error.life_span = "La edad es obligatoria";
            }
           
            if (!input.image) {
                error.image = "La URL de la imagen es obligatoria";
            } else if (input.image.length > 250) {
                error.image = "La URL de la imagen no puede exceder los 250 caracteres";
            } else if (!/^https?:\/\/\S+$/.test(input.image)) {
                error.image = "URL de imagen inválida";
            }

            //if (!input.temperaments) {
            //    error.temperaments = "Seleccionar al menos 1 temperamento";
            //}
            

    return error;
};

export default validate;