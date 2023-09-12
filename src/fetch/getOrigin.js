 export async function getOrigin(origin,id_origin){
    return await fetch(`http://localhost:3000/api/origin?origin=${origin}&id_origin=${id_origin}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}