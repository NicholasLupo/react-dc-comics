export default function CicleObject({ object, className = "list-unstyled" }) {


    return (
        <ul className={className}>
            {
                object.map((item, index) => (
                    <li key={index}>
                        <img src={item.img} alt="" />
                        <span>{item.type}</span>
                    </li>
                ))
            }
        </ul>
    );
}