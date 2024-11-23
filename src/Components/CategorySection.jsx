import ManCategory from "../assets/Images/man.png";
import WomanCategory from "../assets/Images/woman.png";
import KidCategory from "../assets/Images/kid.png";

const categories = [
  {
    title: "Men",
    imageURL: ManCategory,
  },
  {
    title: "Women",
    imageURL: WomanCategory,
  },
  {
    title: "Kids",
    imageURL: KidCategory,
  },
];

const CategorySection = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer">
      {categories.map((category, index) => (
        <div
          key={index}
          className="relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
          <img
            src={category.imageURL}
            alt=""
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
          <div className="absolute top-20 left-12">
            <p className="text-xl font-bold">{category.title}</p>
            <p className="text-gray-600">View All</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
