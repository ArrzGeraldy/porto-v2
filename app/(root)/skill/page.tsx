import { skillRows } from "@/app/data/skills";
import React from "react";

const page = () => {
  return (
    <div className="px-6 flex flex-col flex-1">
      <section>
        <div className="flex gap-3 items-center">
          <div className="w-2 bg-primary self-stretch rounded-full block"></div>
          <h1 className="text-2xl lg:text-4xl font-semibold">Skill</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-6 pe-4">
          {skillRows.map((skill) => (
            <div key={skill.type}>
              <h4 className="text-xl md:text-2xl font-medium">{skill.type}</h4>
              {skill.skills.map(({ Icon, value }, i) => (
                <div key={i} className="flex items-center gap-4 mt-2">
                  <Icon size={40} />
                  <div className="w-full bg-border h-2 rounded-full relative">
                    <div
                      style={{ width: `${value}%` }}
                      className={` bg-primary h-2 absolute rounded-full`}
                    ></div>
                  </div>
                  <div>{value}%</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
