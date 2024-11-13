
const Partner = ({ partner }) => {

    if (partner) {
        const { image, name, description } = partner
        return (
            <>
                <img src={image} alt={name} style={{ width: "150px" }} />
                <div className="m-4">
                    <h5 className='fw-bold'>{name}</h5>
                    {description}
                </div>
            </>
        )
    }

    return null;


}

export default Partner

// a react component can only return a single js element
// a react fragment allows us to return 2 sibling elements

// All inline styling are objects
// Have to jump into javascript and put it in two {{}}
// Style is in quotes