import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { deleteDogId, getById} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import style from "./DetailPage.module.css";

const Detail = () => {
    const dispatch = useDispatch();
    let dog = useSelector((state) => state.details);
   
    const [, setDogId] = useState();
    const { id } = useParams();
    useEffect(() => {
      dispatch(getById(id));
      setDogId({});
      return dispatch(deleteDogId());
    }, [dispatch, id]);
    return (
      <div className={style.detailAll}>
        <div className={style.contentContainer}>
          <h1 className={style.titleName}>{dog.name}</h1>
          <div className={style.imageContainer}>
            <img className={style.image} src={dog.reference_image_id} alt={dog.name} />
          </div>
          
          {dog.created && Array.isArray(dog.Temperaments) && dog.Temperaments.length 
        ? (
          <p className={style.temperaments}>
            Temperamento: {dog.Temperaments.map((temp) => temp.name).join(', ')}</p>) 
        : (
          <p className={style.temperaments}>
            Temperamento: {dog.temperament}
          </p>)}
          <p className={style.info}>Esperanza de vida: {dog.life_span}</p>
          <p className={style.info}>Altura: {dog.height} cm</p>
          <p className={style.info}>Peso: {dog.weight} kg</p>
        </div>
      </div>
    );
  };

export default Detail;