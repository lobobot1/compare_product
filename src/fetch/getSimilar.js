
export async function getSimilar(similars,pagination){
    return await fetch(`http://localhost:3000/api/similars?similar=${similars}&pagination=${pagination}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
})
}