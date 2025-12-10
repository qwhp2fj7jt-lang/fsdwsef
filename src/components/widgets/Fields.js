export default function Fields({ fields }) {
    return (
      <div className="pt-5">
        {fields.article.map((item, index) => (
          <div key={index} className="mb-6">
            <h3 className="dark:text-white text-xl md:text-2xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-white mb-2">{item.content}</p>
            <ul className="dark:text-white list-disc list-inside text-gray-700 text-sm md:text-base space-y-1">
              {item.skills.map((skill, i) => (
                <li key={i}>{skill.baslik}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
  