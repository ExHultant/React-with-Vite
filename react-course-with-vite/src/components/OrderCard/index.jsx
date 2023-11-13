import { TrashIcon } from "@heroicons/react/24/solid";

export const OrderCard = (props) => {
  const { id, title, imageUrl, price, handleDelete } = props;
  let renderTrashIcon;
  if (handleDelete) {
    renderTrashIcon = <TrashIcon
        onClick={() => handleDelete(id)}
        className="w-4 h-4 cursor-pointer"
      />
  }

  return (
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full rounded-lg object-cover"
          />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium"> ${price}</p>
        {renderTrashIcon}
      </div>
    </div>
  );
};
