
export async function GET_ALL_EVENTS(){
    const response = await fetch('http://localhost:3000/api/events');
    return response.json()
}