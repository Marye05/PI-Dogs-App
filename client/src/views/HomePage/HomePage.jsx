import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs, filterByTemperament, getTemperaments, orderByWeight, filterByOrigin, orderByName } from "../../redux/actions";
import Pagination from "../../components/Pagination/Pagination";
import Dogs from "../../components/Dogs/Dogs";
import styles from "./HomePage.module.css";


const Home = () => {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);
  const tempState = useSelector((state) => state.temperaments);
 
  //Paginado
  const [currentPage, setCurrentPage] = useState(1); // Página actual, comienza en 1
  const [dogsPerPage] = useState(8); // Cantidad de perros por página

  const lastDogIndex = currentPage * dogsPerPage;
  const firstDogIndex = lastDogIndex - dogsPerPage;
  const currentDogs = allDogs.slice(firstDogIndex, lastDogIndex);

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const resetPagination = () => {
    setCurrentPage(1);
  };

  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperaments());
  }, [dispatch]);

  const handleClick = (event) => {
    // Cargar perros de nuevo
    event.preventDefault();
    resetPagination();
    dispatch(getDogs());
    window.location.reload()
  };

  const handleFilterByTemperament = (event) => {
    event.preventDefault();
    resetPagination();
    dispatch(filterByTemperament(event.target.value));
  };

  const handleFilterByWeight = (event) => {
    event.preventDefault();
    resetPagination();
    dispatch(orderByWeight(event.target.value));
  };


  const handleFilteredByOrigin = (event) => {
    event.preventDefault();
    resetPagination();
    dispatch(filterByOrigin(event.target.value));
  };

  const handleFilterByName = (event) => {
    event.preventDefault();
    resetPagination();
    dispatch(orderByName(event.target.value));
  };



  return (
    <div className={styles.homeAll}>
      <div className={styles.filterContainer}>

        <div className={styles.filterOption}>
          <h3 className={styles.filterTitle}>Ordenar:</h3>
          <div className={styles.selectContainer}>
            <label className={styles.filterLabel}>Alfabéticamente:</label>
            <select className={styles.filterSelect}
              onChange={(event) => handleFilterByName(event)}>
              <option value="">Seleccionar</option>
              <option value="Asc">Ascendente</option>
              <option value="Dec">Descendente</option>
            </select>
          </div>

          <div className={styles.selectContainer}>
            <label className={styles.filterLabel}>Peso:</label>
            <select className={styles.filterSelect}
              onChange={(event) => handleFilterByWeight(event)}>
              <option value="">Seleccionar</option>
              <option value="max">Peso Max-Min</option>
              <option value="min">Peso Min-Max</option>
            </select>
          </div>

        </div>
        <div className={styles.filterOption}>
          <h3 className={styles.filterTitle}>Filtrar:</h3>
          <div className={styles.selectContainer}>
            <label className={styles.filterLabel}>Origen:</label>
            <select className={styles.filterSelect}
              onChange={(event) => handleFilteredByOrigin(event)}>
              <option value="">Seleccionar</option>
              <option value="all">Todos</option>
              <option value="api">API</option>
              <option value="created">Creado</option>
            </select>
          </div>

          <div className={styles.selectContainer}>
            <label className={styles.filterLabel}>Temperamento:</label>
            <select className={styles.filterSelect}
              onChange={(event) => handleFilterByTemperament(event)}>
              <option value="">Seleccionar</option>
              <option value="All">Todos los temperamentos</option>
              {tempState?.sort().map((temp) => (
                <option key={temp} value={temp}>
                  {temp}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>¡Bienvenidos!</h1>
      </div>

      <button className={styles.reloadButton}
        onClick={(event) => handleClick(event)} >
        Cargar perros de nuevo
      </button>

      <div className={styles.dogsContainer}>
        {currentDogs?.map((dog) => (
          <Dogs
            key={dog.id}
            id={dog.id}
            name={dog.name}
            image={dog.reference_image_id}
            weight={dog.weight}
            height={dog.height}
            temperament={dog.temperament}
            Temperaments={dog.Temperaments}
            created={dog.created}
          />
        ))}
      </div>
      <Pagination
        dogs={allDogs.length}
        dogsPerPage={dogsPerPage}
        currentPage={currentPage}
        pagination={pagination}
      />
    </div>
  );
};

export default Home;