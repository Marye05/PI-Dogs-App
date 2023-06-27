import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postDogs, getTemperaments } from "../../redux/actions";
import validate from "./validate"
import styles from "../Create/Create.module.css";

const Create = () => {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments);
  const [input, setInput] = useState({
    // Estado local para todos los inputs
    name: "",
    height: "",
    weight: "",
    life_span: "",
    image: "",
    temperament: [],
    
  });

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);


  const [errors, setErrors] = useState({});
  

  const handleChange = (event) => {
    // Manejo del input
    setInput({ ...input, [event.target.name]: event.target.value});
      // Manejo de errores
    setErrors(validate({ ...input, [event.target.name]: event.target.value }));
  };

  const handleSelect = (event) => {
    if (event.target.name === 'temperament' &&
      !input.temperament.includes(event.target.value)){

      } else if (event.target.value !== 'nada') {
        setInput({ ...input,
          [event.target.name]: [...input.temperament, event.target.value],
        });
    } else {
      setInput({
        ...input,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(input);

    if (Object.keys(validationErrors).length === 0) {
      dispatch(postDogs(input));
      setInput({
        name: "",
        height: "",
        weight: "",
        life_span: "",
        image: "",
        temperament: [],
      });
    }
  };



  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage}></div>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
            <h1 className={styles.title}>¡Crea tu propia raza!</h1>
            
            <div className={styles.field}>
              <label className={styles.label}>Raza:</label>
              <input
                type="text"
                value={input.name}
                name="name"
                onChange={handleChange}
                className={styles.input}
                placeholder="nombre" />
              {errors.name && <p className={styles.error}>{errors.name}</p>}
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Altura:</label>
              <input
                type="text"
                value={input.height}
                name="height"
                onChange={handleChange}
                className={styles.input}
                placeholder="número" />
              {errors.height && <p className={styles.error}>{errors.height}</p>}
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Peso:</label>
              <input
                type="text"
                value={input.weight}
                name="weight"
                onChange={handleChange}
                className={styles.input}
                placeholder="número" />
              {errors.weight && <p className={styles.error}>{errors.weight}</p>}
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Esperanza de vida:</label>
              <input
                type="text"
                value={input.life_span}
                name="life_span"
                onChange={handleChange}
                className={styles.input}
                placeholder="número" />
              {errors.life_span && <p className={styles.error}>{errors.life_span}</p>}
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Imagen URL:</label>
              <input
                type="text"
                value={input.image}
                name="image"
                onChange={handleChange}
                className={styles.input}
                placeholder="http://example.com" />
              {errors.image && <p className={styles.error}>{errors.image}</p>}
            </div>

            <div className={styles.field}>
              <label htmlFor="temperament" className={styles.label}>
                Temperamento:
              </label>
              {errors.temperaments && (
                <p className={styles.error}>{errors.temperaments}</p>
              )}
              <select
                name="temperament"
                onChange={handleSelect}
                className={styles.select}
              >
                <option value="nada">Seleccionar</option>
                {temperaments.map((temp) => (
                  <option key={temp} value={temp}>
                    {temp}
                  </option>
                ))}
              </select>
             
            </div>
            <button type="submit" className={styles.createButton}>
              Crear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default Create;