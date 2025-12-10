import { myGoal } from "@/shared";
export default function MyGoal() {
  return (
    <div className="mx-auto px-6 md:px-20 py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-6">
        {myGoal.sections.map((item, index) => {
          return (
            <div
              key={index}
              className="p-6 rounded-2xl shadow-md  dark:bg-zinc-800 bg-white justify-between  flex items-start gap-4"
            >
              <div>
                <h2 className="text-xl font-bold mb-1 dark:text-white">
                  {item.title}
                </h2>
                <p className="text-gray-600 dark:text-white">{item.content}</p>
              </div>
              <a href={item && item.link} target="_blank">
                {item.image &&        <img
                  src={item.image.src}
                  width="80"
                  height="80"
                  className="rounded-xl"
                />}
         
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
