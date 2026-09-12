"use client";

import { motion } from "framer-motion";
import { Card, CardBody, Progress } from "@heroui/react";
import { Icon } from "@iconify/react";

import { GradientText } from "@/components/textAnimations/gradient-text";
import { DATA } from "@/data";

const colorMap: Record<string, { bg: string; text: string; progress: "primary" | "secondary" | "success" | "warning" }> = {
  blue: { bg: "bg-blue-100", text: "text-blue-500", progress: "primary" },
  purple: { bg: "bg-purple-100", text: "text-purple-500", progress: "secondary" },
  green: { bg: "bg-green-100", text: "text-green-500", progress: "success" },
  orange: { bg: "bg-orange-100", text: "text-orange-500", progress: "warning" },
};

export const SkillsOverviewSection = () => {
  const overview = DATA.home.skills.overview;
  const { sectionTitle, sectionDescription } = DATA.home.skills;

  return (
    <section className="py-20 bg-gradient-to-b from-background to-content2">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <GradientText
            className="text-3xl md:text-4xl font-bold mb-4 gradient"
            text={sectionTitle}
          />
          <p className="text-foreground-600 text-lg max-w-2xl mx-auto">
            {sectionDescription}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {overview.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <Card className="border-none shadow-md ">
                <CardBody className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-full ${colorMap[skill.color].bg}`}>
                      <Icon
                        className={`w-6 h-6 ${colorMap[skill.color].text}`}
                        icon={skill.icon}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{skill.name}</h3>
                      <p className="text-foreground-600">{skill.level}%</p>
                    </div>
                  </div>
                  <Progress
                    className="h-2"
                    color={colorMap[skill.color].progress}
                    value={skill.level}
                  />
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
