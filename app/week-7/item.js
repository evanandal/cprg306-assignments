export default function Item({ item }) {
    let { id, name, quantity, category } = item;

    return (
        <div className="px-4 py-2 m-4 w-90 bg-teal-900 rounded-xl shadow-md">
            <p className="text-lg font-bold text-white">{name}</p>
            <p className="text-white">Buy {quantity} in {category}</p>
        </div>
    );
}
