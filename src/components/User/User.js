
const User = ({user, setUserDetails, trigger}) => {
    const {id,name} = user

    const click = () =>{
        setUserDetails(user)
        trigger()
    }
    return (
        <div>
            <span>{id} - {name}</span>
            <button onClick={()=>click()} >Get details</button>
        </div>
    );
};

export {User};