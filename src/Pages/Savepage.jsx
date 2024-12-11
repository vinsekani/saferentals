import Mysave from "../Comonents/Mysave";

export default function Savepage({savedItems,deleteItem}){
    return(
        <>
        <Mysave savedItems={savedItems} deleteItem={deleteItem}/>
        </>
    )
}