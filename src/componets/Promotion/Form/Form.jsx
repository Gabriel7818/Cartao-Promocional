import React , {useEffect,useState} from 'react';
import FormCss from './Form.module.css';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import UIButton from '../../UI/Button/Button';

const initialValue = {
    title: '',
    imageUrl:'',
    url: '',
    price: 0,
}



const PromotionForm = ({id}) => {
    const[values, setValues] = useState(initialValue);
    const navigate = useNavigate();
    console.log(values);
    function onChange(ev){
        const{name, value} = ev.target;

        // console.log({name, value});
        setValues({...values, [name]: value})
    }
    useEffect( ()=>{
        if(id){
            axios.get(`http://localhost:5000/promotions/${id}`)
            .then( (response) => {
                setValues(response.data);
            })
        }

    }, [id])



    function onSubmit(ev){
        ev.preventDefault();

        const method = id ? 'put' : 'post';
        const url = id
          ?`http://localhost:5000/promotions/${id}`
          :'http://localhost:5000/promotions'

          axios[method](url, values)
          .then( (response) => {
              navigate('/');
          })

        // ev.preventDefault();
        // axios.post('http://localhost:5000/promotions/', values)
        // .then( (response) => {
        //     navigate('/')
        // })


    }
    return(
        <div>
            <h1>Promo show</h1>
            <h2> Nova promoção</h2>
            <form onSubmit={onSubmit}>
                <div className={FormCss.PromotionFormGroup}>
                <label htmlFor="title">titulo</label>
                <input type="text" id="title" name="title" value={values.title} onChange={onChange} />
                </div>

                <div className={FormCss.PromotionFormGroup}>
                <label htmlFor="title">Url Image</label>
                <input type="text" id="imageUrl" name="imageUrl" value={values.imageUrl} onChange={onChange} />
                </div>

                <div className={FormCss.PromotionFormGroup}>
                <label htmlFor="url">Url</label>
                <input type="text" id="url" name="url" value={values.url} onChange={onChange} />
                </div>

                <div className={FormCss.PromotionFormGroup}>
                <label htmlFor="price">Price</label>
                <input type="number" step="any" id="price" name="price" value={values.price} onChange={onChange} />
                </div>

                <div className={FormCss.PromotionFormButton}>
                    <UIButton type="submit" component="button">
                        Salvar
                    </UIButton>
                    <UIButton
                    to="/"
                    component={Link}
                    theme="border-warning"
                    >
                        Voltar
                    </UIButton>
                </div>

               
               

            </form>
        </div>
    )
}

export default PromotionForm;