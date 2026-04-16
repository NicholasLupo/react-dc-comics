export default function CicleList({ array, className = "list-unstyled" }) {


    return (
        <ul className={className}>
            {
                array.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
            }
        </ul>
    );
}