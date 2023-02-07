import  {useLocation, useNavigate} from "react-router-dom"
import queryString from "query-string"
import { useForm } from "../../auth/hooks/useForm"
import { getHeroesByName } from "../helpers";
import { HeroCard } from "../components/HeroCard";


export const SearchPage = () => {

   const navigate = useNavigate();
   const location = useLocation();

   
   const {q = ''} = queryString.parse(location.search);
   
   
   const heroes  = getHeroesByName(q);
   
   const ShowSearch = (q.length === 0);

   const ShowError = (q.length > 0)&& heroes.length == 0;



   const {searchText,  onInputChange }=  useForm({

    searchText: q
   });

   const onSearchSubmit = (event) =>{
    event.preventDefault();
    //if(searchText.trim().length <= 1) return;
    console.log({searchText})

     navigate(`?q=${searchText}`)
   }

  return (
    <>

      <div className="row">

        <h1>Search</h1>
        <hr />
        <div className="col-5">

          <h1>Busqueda...</h1>
          <hr />


          <form  onSubmit={onSearchSubmit} action="">
            <input type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}

            />
            <button className="btn btn-outline-primary"

            >

              Search

            </button>
          </form>




        </div>

        <div className="col-7">

          <h4>Results</h4>
          <hr />
          
         

          <div className="alert alert-primary animate__animated animate__fadeIn"
          style={{display: ShowSearch ? '' :'none' }}
         
         >
         Search a hero
       </div>
       
       
       
       <div className="alert alert-danger animate__animated animate__fadeIn"
       style={{display: ShowError ? '': 'none'}}
       
       >
       No hero with  <b>{q}</b> 
      </div>
      


          
          

          

          {
       heroes.map (hero =>(
        <HeroCard key={hero.id}{...hero}/>

       ))


          }

        </div>


      </div>



    </>
  )
}
