export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(app => {
        return {
            params: { id: app.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: { app: data }
    }
}

const Details = ({ app }) => {
    return ( 
        <div>
            <h1>{ app.name }</h1>
            <p>{ app.email }</p>
            <p>{ app.website }</p>
            <p>{ app.address.city }</p>
        </div>
     );
}
 
export default Details;