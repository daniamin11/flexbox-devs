
export const PeopleCard = ({name, role, img}) => {
    return (
      <div className='card'> 
        <div>
              <img 
                  src={`assets/imgs/${img}`}
                  alt='avatar'
                  className="avatar"
              />
              <h1> {name} </h1>
              <span> {role} </span>
        
              <button className="btn">Conocer</button>   
        </div>
      </div>
    )
  }
  