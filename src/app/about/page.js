"use client";

import { AboutCard, Skills, OpenSource,Communication, MyGoal ,Fields} from "@/widgets";
import {fields} from "@/shared"

export default function About() {
  return (
    <div className="container mx-auto px-6 md:px-20 py-10">
      <div className="mx-auto px-6 md:px-20 py-5">
        <h2 className=" text-3xl dark:text-white md:text-4xl font-bold  mb-8 text-gray-800">
          Hakkımda
        </h2>

        <p className="text-gray-700 dark:text-white text-sm md:text-base mb-10 leading-relaxed">
          Merhaba! Ben <span className="font-semibold dark:text-white">Zeynep</span>, Yazılım
          Geliştiricisiyim. Kod ve tasarımı birleştirerek fikirleri hızlı ve
          etkili arayüzlere dönüştürmeyi seviyorum.
        </p>
       <Fields fields={fields}/>
   
      </div>
      <div className=" px-6 md:px-20 py-5">
        <AboutCard />
      </div>

      <Skills />
      <OpenSource />
  <Communication/>
  <MyGoal/>
    </div>
  );
}
